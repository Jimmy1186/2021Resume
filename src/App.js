import React, { useState } from "react";
import "./normalize.css";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./style/Theme.js";
import "./style/layout.css";
import Main from "./main/Main";
import Side from "./side/Side";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  const [theme, setTheme] = useState("dark");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
        <Router> 
          <Side themeToggler={themeToggler}/>
          <Main />
        </Router>
    </ThemeProvider>
  );
}

export default App;
