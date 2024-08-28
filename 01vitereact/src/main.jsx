import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Hello from "./React1.jsx";

// function Myapp() {
// return <h2>custom myapp!</h2>;
// }

///-------- react ma yesari value dina mildaina /////
// const elem = {
// type: "a ",
// props: {
// href: "https://google.com",
// target: "_blank",
// },
// children: "click me to visit google",
// };

// yesare dine // react ma createElement vanne method jun chai babel ley inject garxa
const name = " riya";
const elem = React.createElement(
  "a", // first parameter  represent tag
  { href: "https://google.com", target: "_blank" }, // 2nd parameter represents attributes
  "click me to visit google",
  // this parameter represents  children or text
  name // fourth represents variable
);

// yesare ne dina milxa
const reactElem = (
  <a href="https://facebook.com"> click here to visit facebook</a>
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <App />
    <Hello />
  </>
);

// empty tag refers to fragment in reactjs
