import "./App.css";
import { useState } from "react";

function App() {
  const [age, setAge] = useState(0);
  const [inputValue, setinputValue] = useState("");
  const [colorChange, setColorChange] = useState("black");
  const [count, setCount] = useState(0);
  const handleChange = () => {
    setAge(age + 1);
  };
  const handleOnChange = (event) => {
    setinputValue(event.target.value);
  };
  const showOrHide = () => {
    setColorChange(colorChange === "black" ? "red" : "black");
  };
  return (
    <div className="App">
      {age}
      <div>
        <button onClick={handleChange}>click it</button>
      </div>

      <input type="text" onChange={handleOnChange} />
      <div>{inputValue}</div>
      <div>
        <button onClick={showOrHide}>SHOW/HIDE</button>
        {<h1 style={{ color: colorChange }}>HI MY NAME IS MUKESH</h1>}
      </div>

      <div>
        <button
          onClick={() => {
            setCount(count - 1);
          }}
        >
          DECREASE
        </button>
        <div>{count}</div>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          INCREASE
        </button>
        <div>
          <button
            onClick={() => {
              setCount(0);
            }}
          >
            SET TO ZERO
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
