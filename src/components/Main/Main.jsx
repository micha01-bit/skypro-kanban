import { useState, useEffect } from "react"; 
import Column from "../Column/Column.jsx"; 
import { cardList } from "../mock/data.js";

function Main() { 
  const [isLoading, setIsLoading] = useState(true);
  const [cards] = useState(cardList);
  const statuses = ["Без статуса", "Нужно сделать", "В работе", "Тестирование", "Готово"]; 

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="main__content" style={{ height: "100vh", position: "relative" }}>
      {isLoading && (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            fontSize: "24px",
            fontWeight: "bold",
            color: "#555",
            textAlign: "center",
            width: "100%",
            zIndex: 1000,
          }}
        >
          Данные загружаются
        </div>
      )}

      {!isLoading && (
        <div className="main__block">
          {statuses.map((status) => (
            <Column
              key={status}
              title={status}
              items={cards.filter((item) => item.status === status)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Main; 