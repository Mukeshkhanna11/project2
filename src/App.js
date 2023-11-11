import "./App.css";
import { useState } from "react";
import { Text } from "./Text";
function App() {
  const [showtext, setShowText] = useState(false);

  return (
    <div className="App">
      <div>
        <button
          onClick={() => {
            setShowText(!showtext);
          }}
        >
          show text
        </button>
      </div>
      {showtext && <Text />}
    </div>
  );
}

export default App;
