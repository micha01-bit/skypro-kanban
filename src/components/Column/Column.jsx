import CardItem from "../CardItem/CardItem.jsx"; 
import { ColumnWrapper, ColumnTitle, ColumnItems } from "./Column.styled.js";

function Column({ title, items }) {
  return (
    <ColumnWrapper>
      <ColumnTitle>
        <p>{title}</p>
      </ColumnTitle> 
      <ColumnItems>
     {items.map((item) => (
        <CardItem key={item.id} item={item} />
      ))}
</ColumnItems>
</ColumnWrapper>
  );
} 


export default Column; 