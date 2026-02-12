import { useState, useEffect } from 'react';
import Column from '../Column/Column.jsx';
import { useTasks } from '../../hooks/useTasks.js';
import { MainWrapper, MainBlock } from '../Main/Main.styled.js';


const statuses = ['Без статуса', 'Нужно сделать', 'В работе', 'Тестирование', 'Готово'];

const Content = ({ token }) => {
  const { tasks, isLoading, error, loadTasks } = useTasks(token);

  useEffect(() => {
    if (token) loadTasks();
  }, [token, loadTasks]);

  if (isLoading) {
    return (
      <MainWrapper>
        <div style={{ textAlign: 'center', padding: '20px' }}>
          Загружаем задачи...
        </div>
      </MainWrapper>
    );
  }

  if (error) {
    return (
      <MainWrapper>
        <div style={{ color: 'red', textAlign: 'center', padding: '20px' }}>
          Ошибка: {error}
        </div>
      </MainWrapper>
    );
  }

  return (
    <MainWrapper>
      <MainBlock>
        {statuses.map((status) => (
          <Column
            key={status}
            title={status}
            items={tasks.filter((item) => item.status === status)}
          />
        ))}
      </MainBlock>
    </MainWrapper>
  );
};

export default Content;



 
 
  
   
// import { useState } from 'react';
// import Column from "../Column/Column.jsx"; 
// import { cardList } from "../mock/data.js"; 
// import { MainWrapper, MainBlock } from "../Main/Main.styled.js"; 

// const statuses = ["Без статуса", "Нужно сделать", "В работе", "Тестирование", "Готово"]; 

// const Content = ({ isLoading }) => { 
//   const [cards] = useState(cardList);

//   return (
//     <MainWrapper style={{ height: "100vh", position: "relative" }}>
//       {/* Если идет загрузка, показываем сообщение */}
//       {isLoading ? (
//         <div
//           style={{
//             position: "absolute",
//             top: "50%",
//             left: "50%",
//             transform: "translate(-50%, -50%)",
//             fontSize: "24px",
//             fontWeight: "bold",
//             color: "#555",
//             textAlign: "center",
//             width: "100%",
//             zIndex: 1000,
//           }}
//         >
//           Данные загружаются
//         </div>
//       ) : (
//         // Показываем карточки, когда загрузка завершена
//         <MainBlock>
//           {statuses.map((status) => (
//             <Column
//               key={status}
//               title={status}
//               items={cards.filter((item) => item.status === status)}
//             />
//           ))}
//         </MainBlock>
//       )}
//     </MainWrapper>
//   );
// };

// export default Content; 