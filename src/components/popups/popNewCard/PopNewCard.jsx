import { Calendar } from "../../calendar/Calendar";
import {
  SWrapper,
  SContainer,
  SBlock,
  SContent,
  STitle,
  SXButton,
  SNewCardWrapper,
  SFormNewCard,
  SFormBlock,
  SFormTitle,
  SFormInput,
  SFormDescribe,
  SCategoriesWrapper,
  SCategoriesTitle,
  SCategoriesThemesWrapper,
  SCategoriesThemeContainerOrange,
  SCategoriesThemeOrange,
  SCategoriesThemeContainerGreen,
  SCategoriesThemeGreen,
  SCategoriesThemeContainerPurple,
  SCategoriesThemePurple,
  BSButtonWrapper
} from "./PopNewCard.styled";
import { Button } from "../../Button/Button";
import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { TasksContext } from "../../../context/TasksContext";
import { AuthContext } from "../../../context/AuthContext"; // Импорт AuthContext
import { toast } from 'react-toastify';

export const PopNewCard = ({ onClose }) => {
  const { token } = useContext(AuthContext); // Получаем токен из AuthContext
  const {
    addTask,
    selectedDate,
    updateSelectedDate,
    setError
  } = useContext(TasksContext);

  const navigate = useNavigate();

  const currentDate = new Date().toISOString();

  const [title, setTitle] = useState("");
  const [topic, setTopic] = useState("");
  const [description, setDescription] = useState("");
  const [isCategorySelected, setIsCategorySelected] = useState("");

  const onSelectCategory = (categoryName) => {
    setTopic(categoryName);
    setIsCategorySelected(categoryName);
  };

  const handleCreateTask = async () => {
    if (!token) {
      toast.warn("Для создания задачи необходимо авторизоваться");
      navigate("/login");
      return;
    }

    if (!description.trim()) {
      toast.error("Описание задачи не может быть пустым");
      return;
    }

    try {
      await addTask({
        newTask: {
          title: title.trim() || "Новая задача",
          topic: topic || "Research",
          status: "Без статуса",
          description: description,
          date: selectedDate?.toISOString() || currentDate,
        }
      });

      setTitle("");
      setDescription("");
      setTopic("");
      updateSelectedDate(null);
      onClose?.(); // Закрываем модальное окно после создания
    } catch (err) {
      setError("Ошибка при создании задачи");
    }
  };

  return (
    <SWrapper>
      <SContainer>
        <SBlock>
          <SContent>
            <STitle>Создание задачи</STitle>
            <Link to="/" onClick={() => onClose?.()}>
              <SXButton href="#">&#10006;</SXButton>
            </Link>
            <SNewCardWrapper>
              <SFormNewCard>
                <SFormBlock>
                  <SFormTitle htmlFor="formTitle">Название задачи</SFormTitle>
                  <SFormInput
                    onChange={(event) => setTitle(event.target.value)}
            value={title}
            type="text"
            name="name"
            id="formTitle"
            placeholder="Введите название задачи..."
            autoFocus
          />
        </SFormBlock>

        <SFormBlock>
          <SFormTitle htmlFor="textArea">Описание задачи</SFormTitle> 
                    <SFormDescribe
            onChange={(event) => setDescription(event.target.value)}
            value={description}
            name="text"
            id="textArea"
            placeholder="Введите описание задачи..."
          />
        </SFormBlock>
      </SFormNewCard>
      <Calendar isEditTask={true} />
    </SNewCardWrapper>
    <SCategoriesWrapper>
      <SCategoriesTitle>Категория</SCategoriesTitle>
      <SCategoriesThemesWrapper>
        <SCategoriesThemeContainerOrange
          onClick={(e) => onSelectCategory(e.target.textContent)}
          $isCategorySelected={isCategorySelected}
        >
          <SCategoriesThemeOrange>Web Design</SCategoriesThemeOrange>
        </SCategoriesThemeContainerOrange>
        <SCategoriesThemeContainerGreen
          onClick={(e) => onSelectCategory(e.target.textContent)}
          $isCategorySelected={isCategorySelected}
        >
          <SCategoriesThemeGreen>Research</SCategoriesThemeGreen>
        </SCategoriesThemeContainerGreen>
        <SCategoriesThemeContainerPurple
          onClick={(e) => onSelectCategory(e.target.textContent)}
          $isCategorySelected={isCategorySelected}
        >
          <SCategoriesThemePurple>Copywriting</SCategoriesThemePurple>
        </SCategoriesThemeContainerPurple>
      </SCategoriesThemesWrapper>
    </SCategoriesWrapper>
  </SContent>
  <BSButtonWrapper>
    <Button
      onClick={handleCreateTask}
      id="btnCreate"
      width="132px"
      text="Создать задачу"
      type="primary"
      disabled={!token} // Кнопка неактивна без токена
    />
  </BSButtonWrapper>
</SBlock>
</SContainer>
</SWrapper>
);
};