let accessToken;
const clientId = "0d782445da2e4039bdd0c39959ea2f95";
const redirectURI = "http://localhost:3000";

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
            headers: {Authorization: `bearer ${accessToken}`},
        })
        .then(response => response.json())
        .then(jsonResponse => {
            if (!jsonResponse) {
                console.log('Response error');
            }
            return jsonResponse.tracks.items.map(track => ({
                id: track.id,
                name: track.name,
                artist: track.artists[0].name,
                album: track.album.name,
                uri: track.uri,
            }));
        })
    }
};

export {Spotify};