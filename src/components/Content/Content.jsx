import { statuses } from "../../data";
import { Column } from "../column/Column";
import { SContent, SContainer, SBlock, SData } from "./Content.styled";
import { TasksContext } from "../../context/TasksContext";
import { useContext } from "react";


export const Content = () => {
  const {
    tasks,
    error,
  } = useContext(TasksContext);
    
    const cardsByStatus = statuses.reduce((acc, status) => {
      acc[status] = tasks.filter((task) => task.status === status);
    return acc;
  }, {});


  return (
    <SContent>
      <p>{error}</p>
      <SContainer>
        <SBlock>
          <SData>
            {statuses.map((status) => <Column key={status} title={status} cardsByStatus={cardsByStatus} />)}
          </SData>
        </SBlock>
      </SContainer>
    </SContent>
  )
}
