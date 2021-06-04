import React from "react";
import HomePage from "./HomePage";
import Aboutme from "../content/AboutMe";

import {
    Switch,
    Route,
  } from "react-router-dom";
import AllContent from "../content/AllContent";
import NoFriend from "../content/NoFriend";
import Covid19AtHome from "../content/Covid19AtHome";
import Birthday22 from "../content/Birthday22";
import Stock from "../content/Stock";

function Main() {
  return (
      <main>
        <div className="wrapper"> 
            <Switch>
              <Route path="/Aboutme">
                  <Aboutme />
              </Route>
              <Route path="/AllContent">
                  <AllContent />
              </Route>
              <Route path="/NoFriend">
                  <NoFriend />
              </Route>
              <Route path="/Covid19AtHome">
                  <Covid19AtHome />
              </Route>
              <Route path="/Birthday22">
                  <Birthday22 />
              </Route>
              <Route path="/Stock">
                  <Stock />
              </Route>
              <Route path="/">
                  <HomePage />
              </Route>
            </Switch>
        </div>
      </main>
  );
}

export default Main;
