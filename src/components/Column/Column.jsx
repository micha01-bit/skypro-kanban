import { useState, useEffect } from "react";
import Card from "../Card/Card.jsx"; 

function Column() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // задержка 3 секунды

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="main__content"
      style={{ height: "100vh", position: "relative" }}
    >
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
            zIndex: 1000 /* Чтобы сообщение было поверх контента */,
          }}
        >
          Данные загружаются
        </div>
      )}

      {!isLoading && <Card />}
    </div>
  );
}

export default Column;