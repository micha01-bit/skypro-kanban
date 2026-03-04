import { Card } from "../Card/Card";
import { SColumn, SColumnTitleContainer, SColumnTitle, SCards, SCardItem } from "./Column.styled";
import { format } from "date-fns";


export const Column = ({ title, cardsByStatus }) => {
  return (
    <SColumn>
      <SColumnTitleContainer>
        <SColumnTitle>{title}</SColumnTitle>
      </SColumnTitleContainer>
      <SCards>
        {
          cardsByStatus[title].map((card) => {
            return (
              <SCardItem key={card._id}>
                <Card
                  id={card._id}
                  topic={card.topic}
                  title={card.title}
                  date={format(card.date, "dd.MM.yy")}
                />
              </SCardItem>
            )
          })
        }
      </SCards>
    </SColumn>
  )
}
