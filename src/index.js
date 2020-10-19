import React from "react";
import ReactDom from "react-dom";
import App from "./Components/App";

class Application extends React.Component {
  render() {
    return <App />;
  }
}

ReactDom.render(<Application />, document.querySelector("#root"));
