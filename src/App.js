import "./App.css";
import React, { useEffect } from "react";
import Login from "./Components/Login/Login";
import { getTokenFromResponse } from "./spotify";
import { SpotifyState } from "./SpotifyContext";
import Homepage from "./Components/Homepage";
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyDU5W9-p5e-v7ri7o-Qx9ceXyo717KPvTw",
  authDomain: "spotify-replay-e7c30.firebaseapp.com",
  projectId: "spotify-replay-e7c30",
  storageBucket: "spotify-replay-e7c30.appspot.com",
  messagingSenderId: "727765515963",
  appId: "1:727765515963:web:ea61feec7486aa3f0cb39e",
  measurementId: "G-NP8E9RBXP8",
};
const app = initializeApp(firebaseConfig);

function App() {
  const { token, setToken } = SpotifyState();

  useEffect(() => {
    // Set token
    const hash = getTokenFromResponse();
    window.location.hash = "";
    let _token = hash.access_token;
    setToken(_token);
  }, []);

  return <div className="App">{!token ? <Login /> : <Homepage />}</div>;
}

export default App;
