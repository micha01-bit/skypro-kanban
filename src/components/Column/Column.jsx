import { useContext } from "react";
import { Card } from "../card/Card";
import { Loader } from "../loader/Loader";
import { SColumn, SColumnTitleContainer, SColumnTitle, SCards, SCardItem, SGhostContainer } from "./Column.styled";
import { format } from "date-fns";
import { TasksContext } from "../../context/TasksContext";
import { SCardContainerGhostColumnEnd } from "../card/Card.styled";

export const Column = ({ title, cardsByStatus, onMoveCard }) => {
  const { isLoading, isDraggable, draggableCardId, setIsDraggable, setDraggableCardId, dragStartColumn } = useContext(TasksContext);

  // Проверяем, исходная колонка или нет
  const isStartColumn = dragStartColumn === title;

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const cardId = e.dataTransfer.getData('text/plain');
    onMoveCard(cardId, title);
    setIsDraggable(false);
    setDraggableCardId(null);
  };

  return (
    <SColumn>
      <SColumnTitleContainer>
        <SColumnTitle>{title}</SColumnTitle>
      </SColumnTitleContainer>
      <SCards
        onDragOver={handleDragOver}
        onDrop={handleDrop}>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            {/* Карточки */}
            {cardsByStatus[title]?.map((card) => (
              <SCardItem key={card._id}>
                <Card
                  id={card._id}
                  topic={card.topic}
                  title={card.title}
                  date={format(card.date, "dd.MM.yy")}
                  columnTitle={title}
                  isDragging={draggableCardId === card._id}
                />
                {/* Призрак на месте перетаскиваемой карточки */}
                {isDraggable &&
                  isStartColumn &&  
                  draggableCardId === card._id && (
            <SCardContainerGhostColumnEnd />
             )}
        </SCardItem>
      ))}

             {/* Призрак в конце всех колонок, кроме исходной */}
        {isDraggable && !isStartColumn && (
          <SGhostContainer>
             <SCardContainerGhostColumnEnd />
          </SGhostContainer>
        )}
           </>
          )}
        </SCards>
      </SColumn>
    )
  } 