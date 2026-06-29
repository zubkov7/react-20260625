import { createElement } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./components/App/App";

const root = document.getElementById("root");

const reactRoot = createRoot(root);

// reactRoot.render(createElement("div", {}, "hello world!"));

// reactRoot.render(
//   createElement("div", {}, createElement("span", {}, "hello world!")),
// );

// reactRoot.render(
//   createElement(
//     "div",
//     { style: { color: "red", fontSize: "20px" }, className: "someClass" },
//     "hello world!",
//   ),
// );

// reactRoot.render(
//   createElement(
//     "ul",
//     {},
//     createElement("li", {}, 1),
//     createElement("li", {}, 2),
//     createElement("li", {}, 3),
//   ),
// );

// const elements = [1, 2, 3, 4, 5];
// reactRoot.render(
//   createElement(
//     "ul",
//     {},
//     elements.map((item) => createElement("li", {}, item)),
//   ),
// );

// reactRoot.render(createElement("div", {}, 123));
// reactRoot.render(
//   <ul className='someClass' id='123' onClick={() => console.log("click")}>
//     <li>1</li>
//     <li>2</li>
//     <li>3</li>
//     <li>4</li>
//     <li>5</li>
//     <div />
//   </ul>,
// );

// const elements = [1, 2, 3, 4, 5];
// reactRoot.render(
//   <ul style={{ color: "red" }}>
//     {elements.map((item) => (
//       <li>{item}</li>
//     ))}
//     {elements.map((item) => (
//       <li>{item}</li>
//     ))}
//   </ul>,
// );s

// reactRoot.render(
//   <App style={{ color: "red" }} text='App' elements={[1, 2, 3, 4]} />,
// );
// reactRoot.render(
//   <App>
//     <div>hello world!</div>
//     <div>hello world!</div>
//     <div>hello world!</div>
//     <div>hello world!</div>
//     <div>hello world!</div>
//     <div>hello world!</div>
//     <div>hello world!</div>
//     <div>hello world!</div>
//   </App>,
// );

reactRoot.render(<div>123</div>);

console.log(reactRoot);
