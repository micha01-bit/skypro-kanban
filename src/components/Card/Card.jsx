import { cardList } from "../mock/data.js"; 
import CardItem from "./CardItem.jsx";
 
function Card() {
  return (
    <> 
    <div className="main__column column">
                    <div className="column__title">
                      <p>Без статуса</p> 
                      </div> 
                      {cardList
                    .filter(item => item.status === "Без статуса")
                    .map(item => <CardItem key={item.id} item={item} />)}
                    <div className="cards"> 
                      <CardItem />
                    </div>
                  </div>
                  <div className="main__column">
                    <div className="column__title">
                      <p>Нужно сделать</p>
                    </div> 
                     {cardList
                    .filter(item => item.status === "Нужно сделать")
                    .map(item => <CardItem key={item.id} item={item} />)}
                    <div className="cards"> 
                      <CardItem />
                    </div>
                  </div>
                  <div className="main__column">
                    <div className="column__title">
                      <p>В работе</p>
                    </div> 
                    {cardList
                    .filter(item => item.status === "В работе")
                    .map(item => <CardItem key={item.id} item={item} />)}
                    <div className="cards"> 
                      <CardItem />
                    </div>
                  </div>
                  <div className="main__column">
                    <div className="column__title">
                      <p>Тестирование</p>
                    </div> 
                    {cardList
                    .filter(item => item.status === "Тестирование")
                    .map(item => <CardItem key={item.id} item={item} />)}
                    <div className="cards"> 
                      <CardItem />
                    </div>
                  </div>
                  <div className="main__column">
                    <div className="column__title">
                      <p>Готово</p>
                    </div> 
                    {cardList
                    .filter(item => item.status === "Готово")
                    .map(item => <CardItem key={item.id} item={item} />)}
                    <div className="cards"> 
                      <CardItem />
                    </div>
                  </div>
    </>
  );
}

export default Card;