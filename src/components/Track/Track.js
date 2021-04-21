import React from "react";

class Track extends React.Component {
  render() {
    return (
      <div class="Track">
        <div class="Track-information">
          <h3>{/* track name */}</h3>
          <p>
            {/* artist name */} | {/* album name */}
          </p>
        </div>
        <button class="Track-action">{/* + or - */}</button>
      </div>
    );
  }
}

export default Track;
