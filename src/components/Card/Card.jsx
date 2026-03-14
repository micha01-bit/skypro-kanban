import { useContext } from "react";
import { SDateContainer, SDateIcon, SDate, SCardContentContainer, SCardContentLink, SCardTitle, SCardHeader, SCardLabel, SCardButton, SCardButtonPoint, SCardTopic, SCardContainer } from "./Card.styled";
import { Link } from "react-router-dom";
import { TasksContext } from "../../context/TasksContext";

export const Card = ({ id, topic, title, date, isDragging, columnTitle }) => {
  const { setIsDraggable, setDraggableCardId, setDragStartColumn } = useContext(TasksContext);

  const handleDragStart = (e) => {
    if (typeof setIsDraggable !== 'function') {
      console.error('setIsDraggable не является функцией');
      return;
    }
    e.dataTransfer.setData('text/plain', id);
    setIsDraggable(true);
    setDraggableCardId(id);
    setDragStartColumn(columnTitle);
  };

  const handleDragEnd = (e) => {
    if (typeof setIsDraggable !== 'function') {
      console.error('setIsDraggable не является функцией');
      return;
    }
    setIsDraggable(false);
    setDraggableCardId(null);
    setDragStartColumn(null);
  };

  return (
    <SCardContainer
      draggable="true"
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      $isDragging={isDragging}
    >
      <SCardHeader>
        <SCardLabel $topic={topic}>
          <SCardTopic>{topic}</SCardTopic>
        </SCardLabel>

        <Link to={`/card/${id}`}>
          <SCardButton>
            <SCardButtonPoint></SCardButtonPoint>
            <SCardButtonPoint></SCardButtonPoint>
            <SCardButtonPoint></SCardButtonPoint>
          </SCardButton>
        </Link>
      </SCardHeader>

      <SCardContentContainer>
        <SCardContentLink href="" target="_blank">
          <SCardTitle>{title}</SCardTitle>
        </SCardContentLink>
        <SDateContainer>
          <SDateIcon xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
            <g clipPath="url(#clip0_1_415)">
              <path d="M10.5625 2.03125H2.4375C1.7644 2.03125 1.21875 2.5769 1.21875 3.25V10.5625C1.21875 11.2356 1.7644 11.7812 2.4375 11.7812H10.5625C11.2356 11.7812 11.7812 11.2356 11.7812 10.5625V3.25C11.7812 2.5769 11.2356 2.03125 10.5625 2.03125Z" stroke="#94A6BE" strokeWidth="0.8" strokeLinejoin="round" />
              <path d="M11.7812 4.0625H1.21875M3.25 1.21875V2.03125V1.21875ZM9.75 1.21875V2.03125V1.21875Z" stroke="#94A6BE" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <defs>
              <clipPath id="clip0_1_415">
                <rect width="13" height="13" fill="white" />
              </clipPath>
            </defs>
          </SDateIcon>
          <SDate>{date}</SDate>
        </SDateContainer>
      </SCardContentContainer>
    </SCardContainer>
  );
}; 