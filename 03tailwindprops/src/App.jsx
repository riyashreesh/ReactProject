import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/card.jsx";

function App() {
  const [count, setCount] = useState(0);
  let person = {
    name: "riya ",
    age: 22,
  };

  let arr = [1, 2, 3, 4];

  return (
    <>
      <h1 className="bg-green-400  text-center p-4 rounded-xl text-yellow-200 mb-4  ">
        Tailwind Test
      </h1>
      <Card
        username="Riya"
        myObj={person}
        myArray={arr}
        btnText="Click Here "
      />
      <br />
      <Card btnText="Visit me  " />
    </>
  );
}

export default App;
