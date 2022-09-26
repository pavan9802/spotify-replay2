import "./App.css";
import React, { useEffect } from "react";
import Login from "./Components/Login/Login";
import { getTokenFromResponse } from "./spotify";
import { SpotifyState } from "./SpotifyContext";
import Homepage from "./Components/Homepage";
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: "",
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
