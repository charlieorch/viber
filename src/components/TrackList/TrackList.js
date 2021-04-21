import React from "react";
import Track from "../Track/Track";

class TrackList extends React.Component {
  render() {
    return (
      <div className="TrackList">
        {this.props.tracks.map((track, index) => {
          return <Track track={track} />;
        })}
      </div>
    );
  }
}

export default TrackList;
