import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome-pro/css/all.css';
import {BrowserRouter, Link, Route} from "react-router-dom";
import Practice from "./components/a7/Practice";
import Build from "./components/a7/Build";
import NavigationSidebar from "./components/a6/Build/NavigationSidebar";
import A6 from "./components/a6";
import A7 from "./components/a7";
import A8 from "./components/a8";
import A9 from "./components/a9";

import who from "./reducers/who";
import tweets from "./reducers/tweets";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";

const reducer = combineReducers({tweets: tweets, who})
const store = createStore(reducer);

function App() {


  return (
      <>
      <BrowserRouter>
          <div className="container">
            <Link to="/a6/practice">A6</Link> |
            <Link to="/a7/practice">A7</Link> |
              <Link to="/a8/practice">A8</Link> |


<Link to="/a9/practice">A9</Link>
<Route path="/a9">
  <A9/>
</Route>

            <Route path="/a6">
              <A6/>
            </Route>
            <Route path="/a7">
              <A7/>
            </Route>
              <Route path="/a8">
                  <A8/>
              </Route>
              {/*<Route path={["/", "/a7", "/a7/practice"]} exact={true}>*/}
              {/*    <Practice/>*/}
              {/*</Route>*/}
              {/*<Route path="/a7/twitter">*/}
              {/*    <Build/>*/}
              {/*</Route>*/}
          </div>
      </BrowserRouter>
    </>
  );
}

export default App;
