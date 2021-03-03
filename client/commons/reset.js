import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  ${reset}
  a{
    text-decoration: none;
    color: inherit;
  }
  *{
    box-sizing: border-box;
  }
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 14px;
    background: #0F1218;
    color: white;
    overflow-x: hidden;
    line-height: 130%;
  }
`

export default GlobalStyles;