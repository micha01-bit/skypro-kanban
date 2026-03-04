import { Header } from "../Header/Header";
import { Content } from "../content/Content";
import { SWrapper, SMock, SMessage } from "./Main.styled";
import { Button } from "../Button/Button";
import { Link } from "react-router-dom";
import { TasksContext } from "../../context/TasksContext";
import { useContext } from "react";

export const Main = () => {
  const { tasks, isLoading } = useContext(TasksContext);

  return (
    <SWrapper>
      <Header />
      {!isLoading && !tasks.length ? (
        <SMock>
          <SMessage>У вас пока нет задач &#128123;</SMessage>
          <Link to="/card/add">
            <Button
              width="212px"
              type="primary"
              text="Создать мою первую задачу"
              disabled={false}
            />
          </Link>
        </SMock>
      ) : (
        <Content />
      )}
    </SWrapper>
  );
};
