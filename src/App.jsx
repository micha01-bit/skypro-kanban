import './App.css';
import  Main  from './components/Main/Main.jsx';
import  Header  from './components/Header/Header.jsx';
import  PopNewCard  from './components/popups/PopNewCard/PopNewCard.jsx';
import  PopBrowse  from './components/popups/PopBrowse/PopBrowse.jsx';
import  PopUser  from './components/popups/PopUser/PopUser.jsx'; 
import { AppWrapper } from "./App.styled.js"; 
import { createGlobalStyle } from 'styled-components'; 
 
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
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

  @keyframes card-animation {
    0% {
      height: 0;
      opacity: 0;
    }
    100% {
      height: auto;
      opacity: 1;
    }
  }

  html,
  body {
    width: 100%;
    height: 100%;
    font-family: "Roboto", Arial, Helvetica, sans-serif;
    color: #000000;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
        <Header />
        <AppWrapper>
        <Main /> 
        </AppWrapper>
        <PopNewCard />
        <PopBrowse />
        <PopUser />  
    </>
  );
}

export default App;
