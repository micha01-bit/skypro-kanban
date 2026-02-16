 import { BrowserRouter,Routes, Route } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth.js';
import Main from '../Main/Main.jsx';
import SignInPage from '../../pages/SignInPage.jsx';
import SignUpPage from '../../pages/SignUpPage.jsx';
import PopNewCard from '../../pages/popups/PopNewCard/PopNewCard.jsx';
import PopBrowse from '../../pages/popups/PopBrowse/PopBrowse.jsx';
import PopUser from '../../pages/popups/PopUser/PopUser.jsx';
import PrivateRoute from '../../components/PrivateRoute/PrivateRoute.jsx';
import NotFoundPage from '../../pages/NotFound.jsx';


const AppRoutes = () => {
  const { token } = useAuth();

  return ( 
    <Routes>
      <Route element={<PrivateRoute />}>
        <Route path="/" element={<Main token={token} />} />
        <Route path="/card/:id" element={<PopBrowse />} />
        <Route path="/popExit" element={<PopUser />} />
        <Route path="/PopNewCard" element={<PopNewCard />} />
      </Route>
      <Route path="/sign-in" element={<SignInPage />} />
      <Route path="/sign-up" element={<SignUpPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>  
  );
};

export default AppRoutes; 
 
  
   
    
// import { Routes, Route } from 'react-router-dom';
// import { useAuth } from '../../hooks/useAuth.js';
// import Main from '../Main/Main.jsx';
// import SignInPage from '../../pages/SignInPage.jsx';
// import SignUpPage from '../../pages/SignUpPage.jsx';
// import PopNewCard from '../../pages/popups/PopNewCard/PopNewCard.jsx';
// import PopBrowse from '../../pages/popups/PopBrowse/PopBrowse.jsx';
// import PopUser from '../../pages/popups/PopUser/PopUser.jsx';
// import PrivateRoute from '../../components/PrivateRoute/PrivateRoute.jsx';
// import NotFoundPage from '../../pages/NotFound.jsx';


// const AppRoutes = () => {
//   const { token } = useAuth();

//   return (
//     <Routes>
//       <Route element={<PrivateRoute />}>
//         <Route path="/" element={<Main token={token} />} />
//         <Route path="/card/:id" element={<PopBrowse />} />
//         <Route path="/popExit" element={<PopUser />} />
//         <Route path="/PopNewCard" element={<PopNewCard />} />
//       </Route>
//       <Route path="/sign-in" element={<SignInPage />} />
//       <Route path="/sign-up" element={<SignUpPage />} />
//       <Route path="*" element={<NotFoundPage />} />
//     </Routes>
//   );
// };

// export default AppRoutes;



 
  
   
// import "../../App.css";
// import { Routes, Route } from "react-router-dom";
// import { useEffect, useState } from "react"; 
// import Main from '../Main/Main.jsx';
// import SignInPage from "../../pages/SignIn.jsx";
// import SignUpPage from "../../pages/SignUp.jsx";
// import PopNewCard from '../../pages/popups/PopNewCard/PopNewCard.jsx';
// import PopBrowse from '../../pages/popups/PopBrowse/PopBrowse.jsx';
// import PopUser from '../../pages/popups/PopUser/PopUser.jsx'; 
// import PrivateRoute from "../../components/PrivateRoute/PrivateRoute.jsx"; 
// import NotFoundPage from "../../pages/NotFound.jsx";  

// const AppRoutes = () => {
//   const [isLoading, setIsLoading] = useState(true);
//   const [isAuth, setIsAuth] = useState(false); 

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsLoading(false);
//     }, 3000);

//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <Routes>
//       <Route element={<PrivateRoute isAuth={isAuth} />}>
//         <Route path="/" element={<Main loading={isLoading} />} />
//         <Route path="/card/:id" element={<PopBrowse />} />
//         <Route path="/popExit" element={<PopUser />} />
//         <Route path="/PopNewCard" element={<PopNewCard />} />
//       </Route>
//       <Route path="/sign-in" element={<SignInPage setIsAuth={setIsAuth} />} />
//       <Route path="/sign-up" element={<SignUpPage />} />
//       <Route path="*" element={<NotFoundPage />} />
//     </Routes>
//   );
// } 

// export default AppRoutes;
 
