import React from "react";
import HomePage from "./HomePage";
import Upstream from "../content/Upstream";
import {
    Switch,
    Route,
  } from "react-router-dom";

function Main() {
  return (
    <>
      <main>
        <div className="wrapper"> 
            <Switch>
              <Route path="/upstream">
                  <Upstream />
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
