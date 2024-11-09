import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CleanURLComponent from "./componets/converter";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Url converter</h1>
      <div className="card">
        <CleanURLComponent></CleanURLComponent>
      </div>
    </>
  );
}

export default App;
