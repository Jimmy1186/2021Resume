import React from "react";
import "./normalize.css";
import "./App.css";
import Main from "./main/Main";
import Side from "./side/Side";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Side />
        <Main />
      </Router>
    </>
  );
}

export default App;
