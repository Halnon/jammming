let accessToken;

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
    }
};

export {Spotify};