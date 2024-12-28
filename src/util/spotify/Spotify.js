let accessToken;
const clientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
const redirectURI = "https://adam-halnon-jammming.netlify.app/";

const Spotify = {
    getAccessToken() {
        if (accessToken)
            return accessToken;
            // extract access token from URL
            const tokenInURL = window.location.href.match(/access_token=([^&]*)/);
            // extract expiry time from URL
            const expiryTimeFromURL = window.location.href.match(/expires_in=([^&]*)/);

        if (tokenInURL && expiryTimeFromURL) {
            accessToken = tokenInURL[1];
            const expiresIn = Number(expiryTimeFromURL[1]);

            //set function which will reset access token when it expires
            window.setTimeout(() => (accessToken = ""), expiresIn * 1000);

            // Clear the parameters from the URL, so the app doesn't try grabbing the access token after it has expired
            window.history.pushState("Access token", null, "/");
            return accessToken;
        }

        //check for access token if first and second check are both false
        const redirect = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`;
        window.location = redirect;
    },

    search(term) {
        accessToken = Spotify.getAccessToken();
        return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
            method: 'GET',
            headers: { Authorization: `Bearer ${accessToken}` },
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then((jsonResponse) => {
                console.log(jsonResponse)
                if (!jsonResponse.tracks) {
                    return [];
                }
                return jsonResponse.tracks.items.map((t) => ({
                    id: t.id,
                    name: t.name,
                    artist: t.artists[0].name,
                    album: t.album.name,
                    uri: t.uri,
                }));
            })
            .catch((error) => {
                console.error('Error fetching search results:', error);
                return [];
            });
    },

    savePlaylist(name, trackUris) {
        if (!name || !trackUris) return;

        const aToken = Spotify.getAccessToken();
        const header = {
            Authorization: `Bearer ${aToken}`
        };
        let userID;
        
        return fetch(`https://api.spotify.com/v1/me`, {headers: header})
        .then((response) => response.json())
        .then((jsonResponse) => {
            userID = jsonResponse.id;
            let playlistId;
            return fetch(`https://api.spotify.com/v1/users/${userID}/playlists`, {
                headers: header,
                method: 'POST',
                body: JSON.stringify({name: name}),
            })
            .then((response) => response.json())
            .then((jsonResponse) => {
                playlistId = jsonResponse.id
                return fetch(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
                    headers: header,
                    method: 'POST',
                    body: JSON.stringify({uris: trackUris}),
                });
            });
        })
    }
};

export { Spotify };