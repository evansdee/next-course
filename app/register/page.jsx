"use client";

import { useState } from "react";
import { useTest } from "./useTest";

export default function Register() {
  const [inp, setInp] = useState({
    name: "",
    email: "",
    pass: "",
  });

  function handleInput(e) {
    const { value, name } = e.target;
    setInp({
      ...inp,
      [name]: value,
    });
  }

  const { mutate,isPending } = useTest();


  if(isPending) return <div>Loading...</div>
  return (
    <div>
      <input type="text" name="name" onChange={handleInput} />
      <input type="text" name="email" onChange={handleInput} />
      <input type="text" name="pass" onChange={handleInput} />

      <button onClick={() => mutate(inp)}>click</button>
    </div>
  );
}
