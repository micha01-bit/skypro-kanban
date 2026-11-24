import { Main } from "../components/Main/Main";
import { Outlet } from "react-router-dom";


export const MainPage = () => {
  return (
    <>
      <Main />
      <Outlet />
    </>
  )
} 