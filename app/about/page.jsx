"use client";
import Toastify from "toastify";
import { useState } from "react";

export default function About() {
  const [inp, setInp] = useState("");

  const [shop, setShop] = useState([]);

  function addItems(inp) {
    // const item = shop.map(ele=>(ele!==inp ? inp : ""))
    if (shop.includes(inp)) {
        Toastify.success("Cant repeat same input")
        return
    }
    setShop((p) => [...p, inp]);
}
console.log(shop);

  const handleClose = (val) => {
    const filt = shop.filter((ele) => ele !== val);

    setShop(filt);
  };

  return (
    <div>
      <div className="container">
        {shop.map((ele) => (
          <Item key={ele} item={ele} close={handleClose} />
        ))}
      </div>
      <input type="text" value={inp} onChange={(e) => setInp(e.target.value)} />
      <button onClick={() => addItems(inp)}>Add item</button>
    </div>
  );
}

function Item({ item, close }) {
  return (
    <div>
      <p onClick={() => close(item)}>X</p>
      <h1>{item}</h1>
    </div>
  );
}
