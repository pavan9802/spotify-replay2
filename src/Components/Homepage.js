import React, { useEffect } from "react";
import { SpotifyState } from "../SpotifyContext";
import SpotifyWebApi from "spotify-web-api-js";
import Panel from "./Panel";
import Sidebar from "./Sidebar";
import "./Homepage.css";

const s = new SpotifyWebApi();
function Homepage() {
  const {
    ltArtists,
    stArtists,
    mtArtists,
    stTracks,
    mtTracks,
    ltTracks,
    token,
    getMe,
    recPlayed,
  } = SpotifyState();
  useEffect(() => {
    if (token) {
      s.setAccessToken(token);
      ltArtists();
      mtArtists();
      stArtists();
      stTracks();
      mtTracks();
      ltTracks();
      recPlayed();
      getMe();

      //console.log(JSON.stringify(longTermArtists));
    }
  }, [token]);

  return (
    <div className="hpContainer">
      <div className="sidebar-div">
        <Sidebar />
      </div>
      <div className="panel-div">
        <Panel />
      </div>
    </div>
  );
}

export default Homepage;
