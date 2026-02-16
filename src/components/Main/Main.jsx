import Header from '../Header/Header.jsx';
import Content from '../Content/Content.jsx';
import PopNewCard from '../../pages/popups/PopNewCard/PopNewCard.jsx';
import PopBrowse from '../../pages/popups/PopBrowse/PopBrowse.jsx';
import PopUser from '../../pages/popups/PopUser/PopUser.jsx';
import { AppWrapper } from '../../App.styled.js';
import { createGlobalStyle } from 'styled-components';
import { Outlet } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth.js';

 
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
  
const Main = () => {
  const { token } = useAuth();

  return (
    <>
      <GlobalStyle />
      <Header />
      <AppWrapper>
        <Content token={token} />
      </AppWrapper>
      <PopNewCard />
      <PopBrowse />
      <PopUser />
      <Outlet />
    </>
  );
};

export default Main; 
    
// import Header from '../Header/Header.jsx';
// import PopNewCard from '../../pages/popups/PopNewCard/PopNewCard.jsx';
// import PopBrowse from '../../pages/popups/PopBrowse/PopBrowse.jsx';
// import PopUser from '../../pages/popups/PopUser/PopUser.jsx'; 
// import Content from '../Content/Content.jsx';  
// import { AppWrapper } from "../../App.styled.js"; 
// import { createGlobalStyle } from 'styled-components'; 
// import { Outlet } from "react-router-dom"; 

// const GlobalStyle = createGlobalStyle`
//   * {
//     margin: 0;
//     padding: 0;
//     box-sizing: border-box;
//   }

//   *:before,
//   *:after {
//     box-sizing: border-box;
//   }

//   a,
//   a:visited {
//     text-decoration: none;
//     cursor: pointer;
//   }

//   button,
//   ._btn {
//     cursor: pointer;
//     outline: none;
//   }

//   ul li {
//     list-style: none;
//   }

//   @keyframes card-animation {
//     0% {
//       height: 0;
//       opacity: 0;
//     }
//     100% {
//       height: auto;
//       opacity: 1;
//     }
//   }

//   html,
//   body {
//     width: 100%;
//     height: 100%;
//     font-family: "Roboto", Arial, Helvetica, sans-serif;
//     color: #000000;
//   }
// `;

// const Main = ({ isLoading }) => {
//   return (
//     <>
//       <GlobalStyle />
//       <Header />
//       <AppWrapper>
//         <Content loading={isLoading} />
//       </AppWrapper>
//       <PopNewCard />
//       <PopBrowse />
//       <PopUser />
//       <Outlet />
//     </>
//   );
// };

// export default Main;