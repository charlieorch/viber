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
        { name: "Something", artist: "Diplo", album: "Album Something", id: 1 },
        {
          name: "Random",
          artist: "Justin Bieber",
          album: "Try Something",
          id: 2,
        },
        { name: "Oof", artist: "Skrillex", album: "Rave", id: 3 },
      ],

      playlistName: "Charlie's Playlist",

      playlistTracks: [
        {
          name: "Something Different",
          artist: "Illenium",
          album: "Random Album",
          id: 4,
        },
        {
          name: "Random",
          artist: "Mitch",
          album: "Try Something",
          id: 5,
        },
        { name: "Megaoof", artist: "Someone", album: "Rave", id: 6 },
      ],
    };

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }

  addTrack(track) {
    let tracks = this.state.playlistTracks;

    if (
      // checks to see if track is already in playlist
      this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)
    ) {
      return;
    }
    tracks.push(track);

    this.setState({
      playlistTracks: tracks,
    });
  }

  removeTrack(track) {
    let tracks = this.state.playlistTracks;

    tracks = tracks.filter(savedTrack => savedTrack.id !== track.id);

    this.setState({
      playlistTracks: tracks,
    });
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
            <SearchResults
              searchResults={this.state.searchResults}
              onAdd={this.addTrack}
            />
            <Playlist
              playlistName={this.state.playlistName}
              playlistTracks={this.state.playlistTracks}
              onRemove={this.removeTrack}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
