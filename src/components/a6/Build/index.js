import React from "react";
import ExploreScreen from "./ExploreScreen";
import HomeScreen from "./HomeScreen";
import { Route } from 'react-router-dom'

const Build = () => {
    return(
        <>
          <h1>Build</h1>
            <Route path="/a6/twitter/explore" component={ExploreScreen}/>
            <Route path="/a6/twitter/home" component={HomeScreen}/>

            </>
    )
};
export default Build;
