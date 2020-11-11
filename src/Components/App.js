import React from "react";
import axios from "axios";
import { API_KEY, API_URL } from "../util/apikeys";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
  state = {
    images: [],
  };

  onSearchSubmit = async (term) => {
    const response = await axios.get(API_URL(), {
      params: { query: term },
      headers: {
        Authorization: `Client-ID ${API_KEY()}`,
      },
    });

    const responseData = [...response.data.results.map((res) => res)];

    this.setState({ images: responseData });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList>{this.state.images}</ImageList>
      </div>
    );
  }
}

export default App;
