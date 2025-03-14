"use server";

import { revalidatePath } from "next/cache";
import { connectToDb } from "./connectToDb";
import { User } from "./models";

export async function getUser(id) {
  console.log(id, "action");
  await connectToDb();
  const user = User.findById(id).lean();
  return user;
}

export async function getUsers() {
  try {
    await connectToDb();

    const users = User.find();

    return users;
  } catch (err) {
    throw new Error(`Error: ${err}`);
  }
}

export async function deleteUser(id){

  try {
    await connectToDb()

    const user = User.findById(id)

    if(!user) throw new Error("User not found")

    await user.delete()
  } catch (error) {
    console.log("Error deleting user:", error)
    throw new Error("Error deleting user: " + error.message)
  }
}

export async function addUser(inp) {
  await connectToDb();

  const { name, email, pass } = inp;
  const newUser = new User({
    username: name,
    email,
    password: pass,
  });

  await newUser.save();
  return newUser;
}

export async function updateUser({ payload, id }) {
  const { username, email } = payload;

  try {
    await connectToDb();

    // Find the user by ID
    const user = await User.findById(id);

    if (!user) {
      throw new Error("User not found");
    }

    //   console.log(user, "back");

    // Update the user's fields
    user.username = username;
    user.email = email;

    // Save the updated user
    const updatedUser = await user.save();

    revalidatePath("/users"); // Adjust this path to where you're fetching users
    revalidatePath(`/users/${id}`);

    return updatedUser.toObject();
  } catch (error) {
    console.error("Error updating user:", error);
    throw new Error("Error updating user: " + error.message);
  }
}
