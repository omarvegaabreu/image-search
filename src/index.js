import React from "react";
import ReactDom from "react-dom";
import "semantic-ui-css/semantic.min.css";
import App from "./Components/App";

const Application = () => {
  return <App />;
};

ReactDom.render(<Application />, document.querySelector("#root"));
