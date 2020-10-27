import React from "react";
import axios from "axios";
import { Image } from "semantic-ui-react";
import { API_KEY, API_URL } from "../util/apikeys";
import SearchBar from "./SearchBar";
import Images from "./Images";

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

    const responseData = [
      ...response.data.results.map((res) => res.urls.small),
    ];

    this.setState({ images: responseData });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onSubmit={this.onSearchSubmit} />
        <Images />
        {this.state.images.map((path) => (
          <div className="ui stackable three column grid" key={path}>
            <Image src={path} alt="alt" size="medium" bordered />
          </div>
        ))}
      </div>
    );
  }
}

export default App;
