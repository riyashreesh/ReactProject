import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="flex flex-wrap justify-content bg-gray-300 fixed right-20 bottom-12  px-3 py-3  rounded-3xl">
        <button
          onClick={() => {
            setColor("red");
          }}
          className="flex flex-wrap justify-content  m-2 px-3.5 py-1 rounded-3xl "
          style={{ backgroundColor: "red" }}
        >
          Red
        </button>

        <button
          onClick={() => {
            setColor("blue");
          }}
          className="flex flex-wrap justify-content  m-2 px-3.5 py-1 rounded-3xl"
          style={{ backgroundColor: "blue" }}
        >
          Blue
        </button>

        <button
          onClick={() => {
            setColor("green");
          }}
          className="flex flex-wrap justify-content   m-2 px-3.5 py-1 rounded-3xl"
          style={{ backgroundColor: "green" }}
        >
          Green
        </button>

        <button
          onClick={() => {
            setColor("yellow");
          }}
          className="flex flex-wrap justify-content   m-2 px-3.5 py-1 rounded-3xl"
          style={{ backgroundColor: "yellow" }}
        >
          Yellow
        </button>

        <button
          onClick={() => {
            setColor("purple");
          }}
          className="flex flex-wrap justify-content  m-2 px-3.5 py-1 rounded-3xl"
          style={{ backgroundColor: "purple" }}
        >
          Purple
        </button>

        <button
          onClick={() => {
            setColor("crimson");
          }}
          className="flex flex-wrap justify-content  m-2 px-3.5 py-1 rounded-3xl"
          style={{ backgroundColor: "Crimson" }}
        >
          Crimson
        </button>

        <button
          onClick={() => {
            setColor("white");
          }}
          className="flex flex-wrap justify-content  m-2 px-3.5 py-1 rounded-3xl"
          style={{ backgroundColor: "white" }}
        >
          White
        </button>

        <button
          onClick={() => {
            setColor("orange");
          }}
          className="flex flex-wrap justify-content  m-2 px-3.5 py-1 rounded-3xl"
          style={{ backgroundColor: "orange" }}
        >
          Orange
        </button>
      </div>
    </div>
  );
}

export default App;
