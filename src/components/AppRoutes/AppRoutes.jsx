import "../../App.css";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react"; 
import Main from '../Main/Main.jsx';
import SignInPage from "../../pages/SignIn.jsx";
import SignUpPage from "../../pages/SignUp.jsx";
import PopNewCard from '../../pages/popups/PopNewCard/PopNewCard.jsx';
import PopBrowse from '../../pages/popups/PopBrowse/PopBrowse.jsx';
import PopUser from '../../pages/popups/PopUser/PopUser.jsx'; 
import PrivateRoute from "../../components/PrivateRoute/PrivateRoute.jsx"; 
import NotFoundPage from "../../pages/NotFound.jsx";  

const AppRoutes = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuth, setIsAuth] = useState(false); 

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Routes>
      <Route element={<PrivateRoute isAuth={isAuth} />}>
        <Route path="/" element={<Main loading={isLoading} />} />
        <Route path="/popBrowse/:id" element={<PopBrowse />} />
        <Route path="/popExit" element={<PopUser />} />
        <Route path="/popNewCard" element={<PopNewCard />} />
      </Route>
      <Route path="/sign-in" element={<SignInPage setIsAuth={setIsAuth} />} />
      <Route path="/sign-up" element={<SignUpPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
} 

export default AppRoutes;
 
