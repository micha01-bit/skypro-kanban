import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth.js';


const PrivateRoute = () => {
  const { token, isLoading } = useAuth();

  // Пока идёт проверка токена — показываем заглушку (или спиннер)
  if (isLoading) {
    return (
      <div style={{ textAlign: 'center', padding: '20px' }}>
        Проверяем авторизацию...
      </div>
    );
  }

  // Если токена нет — редирект на вход
  if (!token) {
    return <Navigate to="/sign-in" replace />;
  }

  // Если авторизован — отдаём защищённые маршруты
  return <Outlet />;
};

export default PrivateRoute;


   

//  import { Navigate, Outlet } from "react-router-dom";
// import { useAuth } from "../../hooks/useAuth.js";

// function PrivateRoute() {
//   const { token, isLoading } = useAuth();

//   // Пока идёт загрузка, ничего не показываем (или спиннер)
//   if (isLoading) {
//     return null; // Или <LoadingSpinner />
//   }

//   return token ? <Outlet /> : <Navigate to="/sign-in" />;
// }

// export default PrivateRoute;
   
    
// import { Navigate, Outlet } from "react-router-dom";

// function PrivateRoute({ isAuth }) {
//   return isAuth ? <Outlet /> : <Navigate to="/sign-in" />;
// }

// export default PrivateRoute;