import React from "react";
import { Button } from "./Button";

class SearchBar extends React.Component {
  render() {
    return (
      <div className="ui focus input">
        <input type="text" placeholder="Search..." />
        <Button />
      </div>
    );
  }
}

export default SearchBar;
