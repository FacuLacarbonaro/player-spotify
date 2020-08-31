import React from "react";

import logo from "../../assets/images/png/logo.png";

import "./Login.scss";
import { loginUrl } from "../../spotify";

const Login = () => {
  return (
    <div className="login">
      <img src={logo} alt="winamp" />

      {/* Login with spotify button */}
      <a href={loginUrl} >Login with spotify</a>
    </div>
  );
};

export default Login;
