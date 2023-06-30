import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  html, body, #__next {
    height: 100%;
  }

  h1, h2, h3 {
    font-weight: 600;
    line-height: 42px;
  }

  p {
    font-weight: 300;
    line-height: 27px;
    opacity: 90%;
  }

  body {
    background-color: #fafeff;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif, 'Poppins';
  }
`

export default GlobalStyles
