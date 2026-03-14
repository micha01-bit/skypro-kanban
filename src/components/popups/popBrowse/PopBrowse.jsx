import { Calendar } from "../../calendar/Calendar";
import {
  SWrapper,
  SContainer,
  SBlock,
  SContent,
  STopBlock,
  STitle,
  SCategoriesThemeTop,
  SCategoryThemeTop,
  SStatusesWrapper,
  SStatusesTitle,
  SStatusesContent,
  SStatus,
  SStatusTheme,
  SFormWrapper,
  SForm,
  SFormBlock,
  SFormLabel,
  SFormText,
  SButtonsWrapper,
  SButtonsGroup
} from "./PopBrowse.styled";
import { Button } from "../../Button/Button";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { TasksContext } from "../../../context/TasksContext";
import { statuses } from "../../../data";

export const PopBrowse = () => {
  const navigate = useNavigate();

  // Берём token из AuthContext, остальные данные из TasksContext
  const { tasks, editTasks, deleteTasks, updateSelectedDate } = useContext(TasksContext);

  const [isEditTask, setIsEditTask] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { id } = useParams();
  const card = tasks.find((card) => card._id === id);

  // Начальные значения
  const taskCategory = card?.topic;
  const initialTaskStatus = card?.status;
  const initialTaskDescription = card?.description;
  const initialTaskDate = card?.date;
  const initialTaskDateToDisplay = initialTaskDate
    ? new Date(initialTaskDate).toLocaleDateString('ru-RU', { year: "2-digit", month: "2-digit", day: "2-digit" })
    : "Не указана";

  // Состояния для редактирования
  const [currentTaskStatus, setCurrentTaskStatus] = useState(initialTaskStatus);
  const [currentTaskDescription, setCurrentTaskDescription] = useState(initialTaskDescription || "");
  const [currentTaskDate, setCurrentTaskDate] = useState(initialTaskDate);

  const onSelectTaskNewDate = (date) => {
    setCurrentTaskDate(date);
    updateSelectedDate(date);
  };

  const onSelectTaskNewStatus = (status) => {
    setCurrentTaskStatus(status);
  };

  const onSaveTask = async () => {
    if (!card) return;

    setIsLoading(true);
    try {
      const updatedTask = {
        ...card,
        description: currentTaskDescription,
        status: currentTaskStatus,
        date: currentTaskDate
      };
      await editTasks(id, updatedTask);
      setIsEditTask(false);
    } catch (error) {
      console.error("Ошибка при сохранении отредактированной задачи:", error.message);
      alert("Не удалось сохранить задачу. Попробуйте ещё раз.");
    } finally {
      setIsLoading(false);
      navigate("/");
    }
  };

  const onDeleteTask = async () => {
    if (!card) return;

    setIsLoading(true);
    try {
      await deleteTasks(id);
    } catch (error) {
      console.error("Ошибка при удалении задачи:", error.message);
      alert("Не удалось удалить задачу. Попробуйте ещё раз.");
    } finally {
      setIsLoading(false);
      navigate("/");
    }
  };

  const onCancel = () => {
    setCurrentTaskStatus(initialTaskStatus);
    setCurrentTaskDescription(initialTaskDescription);
    setCurrentTaskDate(initialTaskDate);
    setIsEditTask(false);
  };

  const onEditTask = () => {
    setIsEditTask(true);
  };

  // Проверка на отсутствие задачи
  if (!card) {
    return (
      <SWrapper id="popBrowse">
        <SContainer>
          <SBlock>
            <SContent>
              <p>Задача не найдена</p>
              <Link to="/">
                <Button text="Вернуться" type="primary" width="100px" />
              </Link>
            </SContent>
          </SBlock>
        </SContainer>
      </SWrapper>
    );
  }

  return (
    <SWrapper id="popBrowse">
      <SContainer>
        <SBlock>
          <SContent>
            <STopBlock>
              <STitle>{card?.title}</STitle>
              <SCategoriesThemeTop $taskCategory={taskCategory}>
                <SCategoryThemeTop>{card?.topic}</SCategoryThemeTop>
              </SCategoriesThemeTop>
            </STopBlock>

            <SStatusesWrapper>
              <SStatusesTitle>Статус</SStatusesTitle>
              {isEditTask ? (
                <SStatusesContent>
                  {statuses.map((status) => (
                    <SStatus
              key={status}
              onClick={() => onSelectTaskNewStatus(status)}
              $isStatusSelected={currentTaskStatus === status}
            >
              <SStatusTheme $isStatusSelected={currentTaskStatus === status}>
                {status}
              </SStatusTheme>
            </SStatus>
          ))}
        </SStatusesContent>
      ) : (
        <SStatusesContent>
          <SStatus $isStatusSelected={currentTaskStatus === card?.status}>
            <SStatusTheme $isStatusSelected={currentTaskStatus === card?.status}>
              {card?.status}
            </SStatusTheme>
          </SStatus>
        </SStatusesContent>
      )}
            </SStatusesWrapper>

            <SFormWrapper>
              <SForm className="form-browse" id="formBrowseCard" action="#">
                <SFormBlock>
                  <SFormLabel htmlFor="textArea01">Описание задачи</SFormLabel>
                  <SFormText
            $isEditTask={isEditTask}
            name="text"
            id="textArea01"
            readOnly={!isEditTask}
            value={currentTaskDescription}
            placeholder="Введите описание задачи..."
            onChange={(e) => setCurrentTaskDescription(e.target.value)}
          >
          </SFormText>
        </SFormBlock>
      </SForm>

      <Calendar
        isEditTask={isEditTask}
        initialTaskDateToDisplay={initialTaskDateToDisplay}
        currentTaskDate={currentTaskDate}
        setCurrentTaskDate={isEditTask ? setCurrentTaskDate : undefined}
        onSelectTaskNewDate={isEditTask ? onSelectTaskNewDate : undefined}
      />
            </SFormWrapper>

            {isEditTask ? (
              <SButtonsWrapper>
                <SButtonsGroup>
                  <Button
            onClick={onSaveTask}
            text={isLoading ? "Сохранение..." : "Сохранить"}
            type="primary"
            width="99px"
            disabled={isLoading}
          />
          <Button
            onClick={onCancel}
            text="Отменить"
            type="secondary"
            width="93px"
            disabled={isLoading}
          />
          <Button
            onClick={onDeleteTask}
            id="btnDelete"
            text={isLoading ? "Удаление..." : "Удалить задачу"}
            type="secondary"
            width="131px"
            disabled={isLoading}
          />
        </SButtonsGroup>
        <Link to="/">
          <Button text="Закрыть" type="primary" width="86px" disabled={isLoading} />
        </Link>
      </SButtonsWrapper>
    ) : (
      <SButtonsWrapper>
        <SButtonsGroup>
          <Button
            onClick={onEditTask}
            text="Редактировать задачу"
            type="secondary"
            width="176px"
            disabled={isLoading}
          />
          <Button
            onClick={onDeleteTask}
            text="Удалить задачу"
            type="secondary"
            width="131px"
            disabled={isLoading}
          />
        </SButtonsGroup>
        <Link to="/">
          <Button text="Закрыть" type="primary" width="86px" disabled={isLoading} />
        </Link>
      </SButtonsWrapper>
    )}
          </SContent>
        </SBlock>
      </SContainer>
    </SWrapper>
  );
};