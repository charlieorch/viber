import "./App.css";
import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [
        { name: "Something", artist: "Diplo", album: "AlbumSomething", id: 1 },
        {
          name: "Random",
          artist: "Justin Bieber",
          album: "TrySomething",
          id: 2,
        },
        { name: "Oof", artist: "Skrillex", album: "Rave", id: 3 },
      ],
    };
  }

  render() {
    return (
      <div>
        <h1>
          V i <span class="highlight">b</span> e r
        </h1>
        <div class="App">
          <SearchBar />
          <div class="App-playlist">
            <SearchResults searchResults={this.state.searchResults} />
            <Playlist />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
