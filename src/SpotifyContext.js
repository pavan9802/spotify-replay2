import React, { createContext, useContext, useState, useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-js";

const Spotify = createContext();
const s = new SpotifyWebApi();
const SpotifyContext = ({ children }) => {
  const limit = 25;
  const [type, setType] = useState("tracks");
  const [value, setValue] = useState(0);
  const [profilePic, setProfilePic] = useState("");
  const [token, setToken] = useState("");
  const [username, setUsername] = useState();
  const [alert, setAlert] = useState({
    open: false,
    message: "",
    type: "success",
  });

  const [shortTermArtists, setShortTermArtists] = useState({});
  const [mediumTermArtists, setMediumTermArtists] = useState({});
  const [longTermArtists, setLongTermArtists] = useState({});
  const [shortTermTracks, setShortTermTracks] = useState({});
  const [mediumTermTracks, setMediumTermTracks] = useState({});
  const [longTermTracks, setLongTermTracks] = useState({});
  const [recentlyPlayed, setRecentlyPlayed] = useState({});

  const getMe = () => {
    s.getMe().then((response) => {
      response.id
        ? setUsername(response.id)
        : console.log("error getting display name");
      response.images
        ? setProfilePic(response.images[0].url)
        : console.log("error getting profile pic");
    });
  };

  const stArtists = () => {
    s.getMyTopArtists({ limit: limit, time_range: "short_term" }).then(
      (response) => {
        setShortTermArtists(response);
      }
    );
  };
  const mtArtists = () => {
    s.getMyTopArtists({ limit: limit, time_range: "medium_term" }).then(
      (response) => {
        setMediumTermArtists(response);
      }
    );
  };
  const ltArtists = () => {
    s.getMyTopArtists({ limit: limit, time_range: "long_term" }).then(
      (response) => {
        setLongTermArtists(response);
      }
    );
  };

  const stTracks = () => {
    s.getMyTopTracks({ limit: limit, time_range: "short_term" }).then(
      (response) => {
        //console.log(response);
        setShortTermTracks(response);
      }
    );
  };

  const mtTracks = () => {
    s.getMyTopTracks({ limit: limit, time_range: "medium_term" }).then(
      (response) => {
        //console.log(response);
        setMediumTermTracks(response);
      }
    );
  };
  const ltTracks = () => {
    s.getMyTopTracks({ limit: limit, time_range: "long_term" }).then(
      (response) => {
        //console.log(response);
        setLongTermTracks(response);
      }
    );
  };

  const recPlayed = () => {
    s.getMyRecentlyPlayedTracks({ limit: limit }).then((response) => {
      setRecentlyPlayed(response);
    });
  };

  return (
    <Spotify.Provider
      value={{
        type,
        setType,
        token,
        setToken,
        value,
        setValue,
        alert,
        setAlert,
        profilePic,
        setProfilePic,
        username,
        setUsername,
        shortTermArtists,
        mediumTermArtists,
        longTermArtists,
        stArtists,
        mtArtists,
        ltArtists,
        shortTermTracks,
        mediumTermTracks,
        longTermTracks,
        stTracks,
        mtTracks,
        ltTracks,
        getMe,
        recPlayed,
        recentlyPlayed,
      }}
    >
      {children}
    </Spotify.Provider>
  );
};

export default SpotifyContext;

export const SpotifyState = () => {
  return useContext(Spotify);
};
