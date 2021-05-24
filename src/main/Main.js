import React from "react";
import HomePage from "./HomePage";
import Aboutme from "../content/AboutMe";

import {
    Switch,
    Route,
  } from "react-router-dom";
import AllContent from "../content/AllContent";

function Main() {
  return (
    <>
      <main>
        <div className="wrapper"> 
            <Switch>
              <Route path="/Aboutme">
                  <Aboutme />
              </Route>
              <Route path="/AllContent">
                  <AllContent />
              </Route>
              <Route path="/">
                  <HomePage />
              </Route>
            </Switch>
        </div>
      </main>
    </>
  );
}

export default Main;
