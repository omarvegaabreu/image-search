import React from "react";
import { Button } from "./Button";
import { Label } from "semantic-ui-react";

class SearchBar extends React.Component {
  state = { term: "" };

  //will set state to search bar term
  onInputChange = (event) => {
    this.setState({ term: event.target.value });
  };
  //to pass term to prop on submit for searchbar component in app
  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <Label as="a" color="red" ribbon>
              Image Search
            </Label>
            <input
              value={this.state.value}
              onChange={this.onInputChange}
              type="text"
              placeholder="Search..."
            />
            <Button />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
