import React from "react";
//import {Link} from "react-router-dom";
import Navigation from "./Navigation";

const Login = () => {
  return(
    <div>
      <Navigation/>
      <h3>Login</h3>
      Username: <input/><br/>
      Password: <input type="password"/><br/>
      <button>Login</button><br/>
    </div>
  );
};

export default Login;