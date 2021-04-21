import "./App.css";
import React from "react";
import SearchBar from "../SearchBar/SearchBar";

function App() {
  return (
    <div>
      <h1>
        Vi<span class="highlight">b</span>er
      </h1>
      <div class="App">
        <SearchBar />
        <div class="App-playlist">
          {/* Add a SearchResults component */}
          {/* Add a Playlist component */}
        </div>
      </div>
    </div>
  );
}

export default App;
