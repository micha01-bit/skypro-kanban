import { Routes, Route } from "react-router-dom";
import { MainPage } from "../pages/Main.jsx";
import { ExitPage } from "../pages/Exit.jsx";
import { NewCardPage } from "../pages/NewCard.jsx";
import { PopBrowsePage } from "../pages/PopBrowse.jsx";
import { LoginPage } from "../pages/Login.jsx";
import { RegistrationPage } from "../pages/Registration.jsx";
import { NotFoundPage } from "../pages/NotFound.jsx";
import { PrivateRoute } from "./PrivateRoute.jsx";


export function AppRoutes({ token, setToken }) {
  return (
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<MainPage token={token} />} >
            <Route path="/card/add" element={<NewCardPage />} />
            <Route path="/card/:id" element={<PopBrowsePage token={token} />} />
            <Route path="/exit" element={<ExitPage />} />
          </Route>
        </Route>

        <Route path="/login" element={<LoginPage setToken={setToken} />} />
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="*" element={<NotFoundPage token={!!token} />} />
      </Routes>
  )
}
