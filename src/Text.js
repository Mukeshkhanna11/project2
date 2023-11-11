import React from "react";
import { useState } from "react";
export const Text = () => {
  const [text, setText] = useState("");
  const handleChange = (event) => {
    setText(event.target.value);
  };
  return (
    <div>
      <input onChange={handleChange} />
      <h1> {text}</h1>
    </div>
  );
};
