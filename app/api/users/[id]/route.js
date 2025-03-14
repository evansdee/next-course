import { NextResponse } from "next/server";
import {User} from "@/app/util/models"
import {connectToDb} from "@/app/util/connectToDb"
import { revalidatePath } from "next/cache";

//path= app/api/users/%5Bid%5D/route.js

export async function GET(_,response){

    // console.log(response.params.id);

    const {id} = await response.params;
    
    return NextResponse.json({"message": `${id}`});
}

// DELETE request to remove a user by ID
export async function DELETE(req) {
    try {
      const { id } = await req.json();
      if (!id) {
        return NextResponse.json({ error: "User ID is required" }, { status: 400 });
      }
  
      await connectToDb();
  
      const user = await User.findById(id);
      if (!user) {
        return NextResponse.json({ error: "User not found" }, { status: 404 });
      }
  
      await user.deleteOne();
    revalidatePath("/users"); // Adjust this path to where you're fetching users

      return NextResponse.json({ message: "User deleted successfully" }, { status: 200 });
    } catch (error) {
      console.error("Error deleting user:", error);
      return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
  }