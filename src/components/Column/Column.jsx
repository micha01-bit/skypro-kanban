import CardItem from "../Card/CardItem.jsx"; 
import { useState, useEffect } from "react";

function Column({ title, items }) {
  return (
    <div className="main__column column">
      <div className="column__title">
        <p>{title}</p>
      </div> 
      <div className="items">
     {items.map((item) => (
        <CardItem key={item.id} item={item} />
      ))}
</div>
</div>
  );
} 


export default Column; 