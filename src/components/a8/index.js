import React from "react";
import {Route} from "react-router-dom";
import Practice from "./Practice";
//import Build from "./Build";

const A7 = () => {
  return(
    <div>
      <Route path={["/a8", "/a8/practice"]} exact={true}>
        <Practice />
      </Route>
    </div>
  )
}

export default A7;