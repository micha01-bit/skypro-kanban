import { Main } from "../components/main/Main";
import { Outlet } from "react-router-dom";
import { Loader } from "../components/loader/Loader";
import { TasksContext } from "../context/TasksContext";
import { useContext } from "react";


export const MainPage = () => {
  const {
    isLoading,
  } = useContext(TasksContext);

  return (
    <>
      {isLoading && <Loader isLoading={isLoading} />}
      <Main />
      <Outlet />
    </>
  )
}
