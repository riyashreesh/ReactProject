const reactElement = {
  type: "a",
  props: {
    href: "https://youtube.com",
    target: "_blank",
  },
  children: "Click to google me ",
};

// function customRender(reactElement, container) {
//   const dom = document.createElement(reactElement.type);
//   dom.innerHTML = reactElement.children;
//   dom.setAttribute("href", reactElement.props.href);
//   dom.setAttribute("target", reactElement.props.target);
//   container.appendChild(dom);
// }

function customRender(reactElement, container) {
  const dom = document.createElement(reactElement.type);
  dom.innerHTML = reactElement.children;
  for (const prop in reactElement.props) {
    if (prop === "children") continue;
    dom.setAttribute(prop, reactElement.props[prop]);
  }

  container.appendChild(dom);
}

const root = document.getElementById("root");
customRender(reactElement, root);
