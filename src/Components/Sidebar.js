import React from "react";
import "./Sidebar.css";
import { FaMusic, FaPaintBrush, FaStepBackward } from "react-icons/fa";
import { SpotifyState } from "../SpotifyContext";
import UserButton from "./UserButton";

const Header = () => {
  const { type, setType, setValue } = SpotifyState();

  const handleChange = (type) => {
    setType(type);
    setValue(0);
  };

  return (
    <div className="entire-thing">
      <div className="sidebar">
        <div className="content">
          <div className="btnDiv">
            <UserButton />
            <button
              onClick={() => handleChange("artists")}
              className={type === "artists" ? "btnInd selected" : "btnInd"}
            >
              <FaMusic className="icn" /> Artists
            </button>

            <button
              onClick={() => handleChange("tracks")}
              className={type === "tracks" ? "btnInd selected" : "btnInd"}
            >
              <FaPaintBrush className="icn" /> Tracks
            </button>

            <button
              onClick={() => handleChange("recently_played")}
              className={
                type === "recently_played" ? "btnInd selected" : "btnInd"
              }
            >
              <FaStepBackward className="icn" /> Recently Played
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
