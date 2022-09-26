import React from "react";
import "./Login.css";
import { accessUrl } from "../../spotify";

function Login() {
  return (
    <div className="login">
      <img
        src="https://www.freepnglogos.com/uploads/spotify-logo-png/spotify-icon-green-logo-8.png"
        alt=""
      />
      <a href={accessUrl}>LOGIN TO SPOTIFY</a>
    </div>
  );
}

export default Login;
