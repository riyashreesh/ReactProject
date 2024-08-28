import { useCallback, useState, useEffect, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [length, setLength] = useState(10);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    // useCallback functionlae cache memory bhitra rakhxa ane chaiyeko bela run garxa means
    // optimize garxa
    let pass = "";
    let string = "ABCDEFGHIJKLMNOPQRISTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) string += "0123456789";
    if (charAllowed) string += "~`!#@$%^&*()_{}[]|";
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * string.length + 1);
      pass += string.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]); // length change vayo vane run hunxa function.
  //numberAllowed change vayo vane run garxa similarly so on

  const passwordref = useRef(null); // useRef ley cahi reference dinxa
  const copyToClipboard = useCallback(() => {
    passwordref.current?.select(); // passwordlae select garne
    passwordref.current?.setSelectionRange(0, 6);
    window.navigator.clipboard.writeText(password); // password lae copy garne
  }, [password]);

  useEffect(() => {
    // useEffect ley cahi function run garxa page load hunebhitikai
    //When you call useEffect , you're telling React to run your “effect” function after flushing changes to the DOM.
    // Effects are declared inside the component so they have access to its props and state.
    // By default, React runs the effects after every render — including the first render.
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <>
      <div className=" w-full max-w-md mx-auto shadow-md  bg-gray-700 text-center my-10 px-10 py-5 rounded-2xl  text-black-500 text-xl">
        <h1>Password Generator</h1>
        <div className="flex w-full my-5 p-1 overflow-hidden rounded-xl">
          <input
            className=" w-full rounded outline-none "
            type="text"
            value={password}
            name="password"
            placeholder="Password"
            readOnly
            ref={passwordref}
          />
          <button className="bg-blue-600 rounded" onClick={copyToClipboard}>
            copy
          </button>
        </div>
        <div className="flex text-sm gap-x-3 ">
          <div className="flex gap-x-2.4 ">
            <input
              type="range"
              name="range"
              id=""
              min={10}
              max={100}
              className="cursor-pointer"
              value={length}
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label htmlFor="">Length : {length}</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="number"
              defaultChecked={numberAllowed}
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="number">Number</label>
          </div>
          <div>
            <input
              type="checkbox"
              name=""
              id="charAllowed"
              defaultChecked={charAllowed}
              onChange={() => {
                setcharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="character">Character</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
