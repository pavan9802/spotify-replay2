import React, { useState, useEffect } from "react";
import CardContent from "@mui/material/CardContent";

import { SpotifyState } from "../SpotifyContext";
import "./InfoBox.css";

function InfoBox() {
  const {
    value,
    type,
    shortTermArtists,
    mediumTermArtists,
    longTermArtists,
    shortTermTracks,
    mediumTermTracks,
    longTermTracks,
    token,
    recentlyPlayed,
    s,
  } = SpotifyState();
  const [data, setData] = useState({});

  function fetchData() {
    if ((value === 2) & (type === "artists")) {
      setData(shortTermArtists);
    }
    if ((value === 1) & (type === "artists")) {
      setData(mediumTermArtists);
    }
    if ((value === 0) & (type === "artists")) {
      setData(longTermArtists);
    }
    if ((value === 2) & (type === "tracks")) {
      setData(shortTermTracks);
    }
    if ((value === 1) & (type === "tracks")) {
      setData(mediumTermTracks);
    }
    if ((value === 0) & (type === "tracks")) {
      setData(longTermTracks);
    }
    if (type === "recently_played") {
      setData(recentlyPlayed);
    }
  }

  useEffect(() => {
    // setData(shortTermArtists);
    if (token) {
      fetchData();
    }
  }, [longTermArtists, longTermTracks, token, value, type]);

  return (
    <>
      <div className="if-container">
        {data.items !== undefined
          ? data.items.map((item, index) => (
              <a
                href={
                  type !== "recently_played"
                    ? item.external_urls
                      ? item.external_urls.spotify
                      : console.log("error getting url")
                    : item.track
                    ? item.track.external_urls.spotify
                    : console.log("error getting url")
                }
              >
                <div className="info_box">
                  <CardContent>
                    <div className="row">
                      <div className="num">
                        <p> {index + 1 + ". "}</p>
                      </div>

                      <div className="picture">
                        <img
                          src={
                            type === "artists"
                              ? item.images
                                ? item.images[2].url
                                : console.log("error InfoBox images")
                              : type === "tracks"
                              ? item.album
                                ? item.album.images[2].url
                                : console.log("error InfoBox images")
                              : item.track
                              ? item.track.album.images[2].url
                              : console.log("error InfoBox images")
                          }
                          alt="Loading"
                          height="75px"
                          width="75px"
                        />
                      </div>

                      <div className="info">
                        <div className="name">
                          <h4>
                            {type !== "recently_played"
                              ? item.name
                              : item.track
                              ? item.track.name
                              : console.log("error getting name")}
                          </h4>
                        </div>

                        <div className="rest">
                          <p>
                            {type === "artists"
                              ? item.genres
                              : type === "tracks"
                              ? item.artists
                                ? item.artists[0].name
                                : console.log("error geting artists")
                              : item.track
                              ? item.track.artists[0].name
                              : console.log("error geting artists")}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </div>
              </a>
            ))
          : console.log("")}
      </div>
    </>
  );
}

export default InfoBox;
