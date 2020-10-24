import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import Images from "./Images";
import { API_KEY, API_URL } from "../util/apikeys";

class App extends React.Component {
  onSearchSubmit = (term) => {
    axios.get(API_URL(), {
      params: { query: term },
      headers: {
        Authorization: `Client-ID ${API_KEY()}`,
      },
    });
  };
  render() {
    return (
      <div className="ui container">
        <SearchBar onSubmit={this.onSearchSubmit} />
        <Images />
      </div>
    );
  }
}

export default App;
