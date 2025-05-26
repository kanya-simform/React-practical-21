//Follow this link: https://how.dev/answers/how-to-create-a-react-application-with-webpack

import React from "react";
import ReactDOM from "react-dom/client";
const div = React.createElement("div", { className: "hello" }, [
  React.createElement("p", { key: 1 }, "hello part1"),
  React.createElement("p", { key: 2 }, "hello part2"),
]);

const div1 = <div>Hello world</div>; //also allowed

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(div);
