import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#f2f7f5",
  fontColor: "#2d334a",
  h1:"#00473e",
  h1After:"#bae8e8",
  burgerDiv:"#bae8e8",
  allContentNav:"#2d334a",
  Mheader:"#272343",
  MColor:"#F2F7F5"
};

export const darkTheme = {
  body: "#02475e",
  fontColor: "#f3bda1",
  h1:"#fefecc",
  h1After:"#687980",
  burgerDiv:"#fefecc",
  allContentNav:"#fefecc",
  Mheader:"#687980",
  MColor:"#f3bda1"
};

export const GlobalStyles = createGlobalStyle`
body {
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.fontColor};
}

h1 {
  color: ${(props) => props.theme.h1};
}

.photoName{
  color: ${(props) => props.theme.h1};
}

header::after {
  background-color:${(props) => props.theme.h1After};
}

.burger div {
  background-color: ${(props) => props.theme.burgerDiv};
}
.all-content-nav {
  color: ${(props) => props.theme.allContentNav};
}
.all-content-nav:visited {
  color: ${(props) => props.theme.fontColor};
}
.All-Content-list a{
  color:${(props) => props.theme.fontColor};
}
.list a{
  color:${(props) => props.theme.fontColor};
}
a:visited {
    color: ${(props) => props.theme.fontColor};
  }

@media screen and (max-width: 768px) {
  header {
    background: ${(props) => props.theme.Mheader};
    color: ${(props) => props.theme.MColor};
  }

  .liAmin a:visited {
    color: ${(props) => props.theme.MColor};
  }

  .photoName {
    color: ${(props) => props.theme.MColor};
  }
  .intro {
    color: ${(props) => props.theme.MColor};
  }
}
`;