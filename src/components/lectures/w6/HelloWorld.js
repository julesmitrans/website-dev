import React from "react";
import {Link} from "react-router-dom";

const HelloWorld = () => {
    return(
      <>

        <h1>Hello World!</h1>
          <Link to="/practice">
              Practice
          </Link> |
          <Link to="/twitter/home">
              Build
          </Link>
      </>
    )
};
