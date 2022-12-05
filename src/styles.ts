import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
body, html {
  height: 100%;
  width: 100%;
  background-color: #F5F5F5;
  padding: 0;
  margin: 0;
  color:#666!important;
}

* {
    outline: 0;
    box-sizing: border-box
  }
`;
