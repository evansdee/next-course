"use client";
import { useState } from "react";
import { useDeleteUser } from "./useUser";
import { toast } from "react-toastify";

export default function DeleteUser() {
  const [val, setVal] = useState("");

  const { mutate, isPending, isError, error } = useDeleteUser();

  function deleteUser() {
    toast.info("it works")
    if (!val) return toast.error("Please enter a user ID.");
    mutate(val);
  }

  return (
    <div>
      <input
        type="text"
        value={val}
        onChange={(e) => setVal(e.target.value)}
        placeholder="Enter user ID"
      />
      <br />
      <button onClick={deleteUser} disabled={isPending}>
        {isPending ? "Deleting user..." : "Delete user"}
      </button>
      <p>{(isError && error.message) || error}</p>
    </div>
  );
}
