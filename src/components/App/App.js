import "./App.css";
import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";

function App() {
  return (
    <div>
      <h1>
        Vi<span class="highlight">b</span>er
      </h1>
      <div class="App">
        <SearchBar />
        <div class="App-playlist">
          <SearchResults />
          {/* Add a Playlist component */}
        </div>
      </div>
    </div>
  );
}

export default App;
