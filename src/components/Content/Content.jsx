import { statuses } from "../../data";
import { Column } from "../Column/Column";
import { SContent, SContainer, SBlock, SData } from "./Content.styled";
import { TasksContext } from "../../context/TasksContext";
import { useContext } from "react";

export const Content = () => {
  const {
    tasks,
    error,
    updateTaskStatus,
  } = useContext(TasksContext);

  const cardsByStatus = statuses.reduce((acc, status) => {
    acc[status] = tasks.filter((task) => task.status === status);
    return acc;
  }, {});

  const onMoveCard = async (cardId, targetColumnTitle) => {
    if (typeof updateTaskStatus !== 'function') {
      console.error('updateTaskStatus не является функцией');
      return;
    }

    const currentCard = tasks.find(task => task._id === cardId);

    if (currentCard && currentCard.status !== targetColumnTitle) {
      try {
        await updateTaskStatus(cardId, targetColumnTitle);
      } catch (error) {
        console.error('Ошибка при перемещении карточки:', error);
        alert('Не удалось переместить карточку. Попробуйте ещё раз.');
      }
    }
  };

  return (
    <SContent>
      <p>{error}</p>
      <SContainer>
        <SBlock>
          <SData>
            {statuses.map((status) =>
              <Column
                key={status}
                title={status}
                cardsByStatus={cardsByStatus}
                onMoveCard={onMoveCard}
              />)}
          </SData>
        </SBlock>
      </SContainer>
    </SContent>
  )
}