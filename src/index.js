import React from "react";
import ReactDom from "react-dom";
import "semantic-ui-css/semantic.min.css";
import App from "./Components/App";

// console.log();

const Application = () => {
  return (
    <div>
      <App />
    </div>
  );
};

ReactDom.render(<Application />, document.querySelector("#root"));
