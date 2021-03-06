let accessToken;
const clientID = `${process.env.REACT_APP_SPOTIFY_CLIENT_ID}`;
const redirectURI = "https://viber-by-charlie.netlify.app";

const Spotify = {
  getAccessToken() {
    if (accessToken) {
      return accessToken;
    }

    // checking to see if the access token is match
    const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
    const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);

    if (accessTokenMatch && expiresInMatch) {
      accessToken = accessTokenMatch[1];
      const expiresIn = Number(expiresInMatch[1]);

      window.setTimeout(() => (accessToken = ""), expiresIn * 1000);
      window.history.pushState("Access Token", null, "/");
      return accessToken;
    } else {
      const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`;
      window.location = accessUrl;
    }
  },

  async search(term) {
    const accessToken = Spotify.getAccessToken(); //acquiring access token

    // fetching input term from the url with additional Authorization header
    const response = await fetch(
      `https://api.spotify.com/v1/search?type=track&q=${term}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    // converting response to json after successfully fetching
    const jsonResponse = await response.json();
    // if there are no tracks, return an empty array of tracks
    if (!jsonResponse.tracks) {
      return [];
    }
    // if there are tracks, map the array and return the object containing pair key value of the tracks
    return jsonResponse.tracks.items.map(track => ({
      id: track.id,
      name: track.name,
      artist: track.artists[0].name,
      album: track.album.name,
      uri: track.uri,
    }));
  },

  async savePlaylist(playlistName, trackURIs) {
    if (!playlistName || !trackURIs.length) {
      return;
    }

    const accessToken = Spotify.getAccessToken();
    const headers = {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    };
    let userId;

    const response = await fetch("https://api.spotify.com/v1/me", {
      headers: headers,
    });
    const jsonResponse = await response.json();
    userId = jsonResponse.id;
    const response_1 = await fetch(
      `https://api.spotify.com/v1/users/${userId}/playlists`,
      {
        headers: headers,
        method: "POST",
        body: JSON.stringify({ name: playlistName }),
      }
    );
    const jsonResponse_1 = await response_1.json();
    const playlistId = jsonResponse_1.id;
    return await fetch(
      `https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
      {
        headers: headers,
        method: "POST",
        body: JSON.stringify({ uris: trackURIs }),
      }
    );
  },
};

export default Spotify;
