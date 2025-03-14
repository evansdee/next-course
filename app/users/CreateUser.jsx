"use client";

import { useForm } from "react-hook-form";
import { useUser } from "./useUser";

export default function CreateUser() {
  const { register, handleSubmit } = useForm();

  const { mutate, isPending } = useUser();

  function addNewUser(data) {
    console.log(data);
    mutate(data);
  }
  if (isPending) return <p>Adding user...</p>;
  return (
    <div>
      <form action="" onSubmit={handleSubmit(addNewUser)}>
        <input type="text" {...register("username")} /> <br />
        <input type="text" {...register("email")} /> <br />
        <input type="password" {...register("password")} /> <br/>
        <button>Add user</button>
      </form>
    </div>
  );
}
