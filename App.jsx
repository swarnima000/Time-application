import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

let curdate = new Date();
let hour = curdate.getHours();
let mins = curdate.getMinutes();
let second = curdate.getSeconds();

function App() {
  return (
    <>
      <h1>
        Date: {hour}:{mins}:{second}
      </h1>
    </>
  );
}

export default App;
