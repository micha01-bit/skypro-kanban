import { Calendar } from "../../calendar/Calendar";
import { SWrapper, SContainer, SBlock, SContent, STitle, SXButton, SNewCardWrapper, SFormNewCard, SFormBlock, SFormTitle, SFormInput, SFormDescribe, SCategoriesWrapper, SCategoriesTitle, SCategoriesThemesWrapper, SCategoriesThemeContainerOrange, SCategoriesThemeOrange, SCategoriesThemeContainerGreen, SCategoriesThemeGreen, SCategoriesThemeContainerPurple, SCategoriesThemePurple, BSButtonWrapper } from "./PopNewCard.styled";
import { Button } from "../../button/Button";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { TasksContext } from "../../../context/TasksContext";


export const PopNewCard = () => {
  const {
    addTask,
    token,
    selectedDate,
    updateSelectedDate
  } = useContext(TasksContext);

  // console.log("selectedDate в карточке новой задачи: ", selectedDate);
  // selectedDate ? console.log("selectedDate.toISOString(): ", selectedDate.toISOString()) : "нет даты";

  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate('/login');
    }
  }, [token, navigate]);

  const currentDate = new Date().toISOString();

  const [title, setTitle] = useState("");
  const [topic, setTopic] = useState("");
  // const [status, setStatus] = useState("");
  const [description, setDescription] = useState("");
  // const [date, setDate] = useState("");
  const [isCategorySelected, setIsCategorySelected] = useState("");
  // const [isEditTask, setIsEditTask] = useState(false);


  const onSelectCategory = (categoryName) => {
    setTopic(categoryName);
    setIsCategorySelected(categoryName);
  };

  const handleCreateTask = async () => {
    if (!description.trim()) {
      alert("Описание задачи не может быть пустым");
      return;
    };

    navigate("/");

    await addTask({
      newTask: {
        title: title || "Новая задача",
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
  }


  return token ? (
    <SWrapper>
      <SContainer>
        <SBlock>
          <SContent>
            <STitle>Создание задачи</STitle>
            <Link to="/">
              <SXButton href="#">&#10006;</SXButton>
            </Link>
            <SNewCardWrapper>
              <SFormNewCard>

                <SFormBlock>
                  <SFormTitle htmlFor="formTitle">Название задачи</SFormTitle>
                  <SFormInput
                    onChange={(event) => {
                      setTitle(event.target.value)
                    }}
                    value={title} type="text" name="name" id="formTitle" placeholder="Введите название задачи..." autoFocus />
                </SFormBlock>

                <SFormBlock>
                  <SFormTitle htmlFor="textArea">Описание задачи</SFormTitle>
                  <SFormDescribe
                    onChange={(event) => {
                      setDescription(event.target.value)
                    }}
                    value={description} name="text" id="textArea" placeholder="Введите описание задачи..."></SFormDescribe>
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
              id="btnCreate" width="132px" text="Создать задачу" type="primary" disabled={false}></Button>
          </BSButtonWrapper>
        </SBlock>
      </SContainer>
    </SWrapper >
  ) : null;
};
