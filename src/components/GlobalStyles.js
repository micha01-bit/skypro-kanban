import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

  body {
    font-family: "Roboto", sans-serif;
  }

  *:before,
  *:after {
    box-sizing: border-box;
  }

  a,
  a:visited {
    text-decoration: none;
    cursor: pointer;
  }

  button,
  ._btn {
    cursor: pointer;
    outline: none;
  }

  ul li {
    list-style: none;
  }

  
// стили для темы
body, body.light-theme {
  --bg-primary: #EAEEF6;
  --bg-secondary: #FFFFFF;
  --bg-tertiary: #FFFFFF;
  
  --text-header-link: #565EEF;
  --text-primary: #000000;
  --text-secondary: #94A6BE;
  --text-tertiary: #FFFFFF;

  --borders: #D4DBE5;
  --borders-button: #565EEF;

  --shadow: rgba(26, 56, 101, 0.21);
  --card-shadow: rgba(148, 166, 190, 0.4);
  
  --bg-web-design: #FFE4C2;
  --bg-research: #B4FDD1;
  --bg-copywriting: #E9D4FF;
  --color-web-design: #FF6D00;
  --color-research: #06B16E;
  --color-copywriting: #9A48F1;
}

body.dark-theme {
  --bg-primary: #151419;
  --bg-secondary: #20202C;
  --bg-tertiary: #202229;
  
  --text-header-link: #FFFFFF;
  --text-primary: #FFFFFF;
  --text-secondary: #94A6BE;
  --text-tertiary: #FFFFFF;
  
  --borders: #4E5566;
  --borders-button: #FFFFFF;
  
  --shadow: rgba(148, 166, 190, 0.4);
  --card-shadow: rgba(148, 166, 190, 0.4);
  
  --bg-web-design: #FF6D00;
  --bg-research: #06B16E;
  --bg-copywriting: #9A48F1;
  --color-web-design: #FFE4C2;
  --color-research: #B4FDD1;
  --color-copywriting: #E9D4FF;
}

  html,
  body {
    width: 100%;
    height: 100%;
    font-family: "Roboto", Arial, Helvetica, sans-serif;
    color: var(--text-primary);
}

  input, textarea {
    color: var(--text-primary);
    background-color: var(--bg-primary);
    border-color: var(--border-color);
  }

  input::placeholder, textarea::placeholder {
    color: var(--text-secondary);
  }

#root {
  min-height: 100%;
  position: relative;
}
` 