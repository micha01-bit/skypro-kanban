import "./App.css";
import Card from "../Card.jsx"
import { cardList } from "./data.js";

export function Column({ title }) {
  return (
    <div className="main__column column">
      <div className="column__title">
        <p>{title}</p>
      </div>
      <div className="cards">
      {   cardList
                .filter((item) => item.status === title)
                .map((item, id) =>
                  <Card item={item} key={id}/>
                )}
      </div>
    </div>
  );
}

export default Column;