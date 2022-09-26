export const authEndpoint = "https://accounts.spotify.com/authorize";

const clientId = "f444673ce18846049f1a05f01211d237";
const redirectUri = "https://spotify-replay-e7c30.web.app/";

const scopes = [
  "playlist-modify-private",
  "user-read-recently-played",
  "user-top-read",
  "user-read-private",
];

export const getTokenFromResponse = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      var parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);

      return initial;
    }, {});
};

export const accessUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
