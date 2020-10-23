import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import Images from "./Images";

class App extends React.Component {
  onSearchSubmit = (term) => {
    axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
      headers: {
        Authorization: `Client-ID ${process.env.REACT_APP_API_KEY}`,
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
