import { NextResponse } from "next/server";
import { connectToDb } from "@/app/util/connectToDb";
import { User } from "@/app/util/models";
import { revalidatePath } from "next/cache";

export async function GET() {
  try {
    await connectToDb();
    const users = await User.find();

    return NextResponse.json(users);
  } catch (error) {
    throw new Error(`Error connecting to db: ${error}`);
  }
}

export async function POST(req) {
    try {
        const { username, email, password } = await req.json();

        console.log(username,email)
        await connectToDb();

        const newUser = new User({
            username,
            email,
            password, // Remember to hash the password before saving
        });

        await newUser.save();
        revalidatePath("/users")
        return NextResponse.json({ res: "Data posted" }, { status: 201 });
    } catch (error) {
        console.error("Error creating user:", error);
        return NextResponse.json({ error: "Failed to create user" }, { status: 500 });
    }
}

