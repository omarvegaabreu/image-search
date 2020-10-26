import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import Images from "./Images";
import { API_KEY, API_URL } from "../util/apikeys";

class App extends React.Component {
  state = {
    images: "",
  };

  async onSearchSubmit(term) {
    const response = await axios.get(API_URL(), {
      params: { query: term },
      headers: {
        Authorization: `Client-ID ${API_KEY()}`,
      },
    });
    console.log(response.data.results);
  }
  render() {
    return (
      <div className="ui container">
        <div>{`images: ${this.state.images}`}</div>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <Images />
      </div>
    );
  }
}

export default App;
