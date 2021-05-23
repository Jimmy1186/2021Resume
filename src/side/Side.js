import React from "react";
import Copyright from "./Copyright";
import NameAndPhoto from "./NameAndPhoto";
import Routers from "./Routers";

function Side() {
  return (
    <>
      <header>
        <NameAndPhoto />
        <Routers />
        <Copyright />
      </header>
    </>
  );
}

export default Side;
