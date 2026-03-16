import { useState, useEffect, useCallback, useContext, createContext } from "react";
import { deleteTask, editTask, fetchTasks, postTask } from "../services/api.js";
import { TasksContext } from "./TasksContext.js";
import { AuthContext } from "./AuthContext.js";

export const TasksProvider = ({ children }) => {
  const { token } = useContext(AuthContext);

  const [isLoading, setIsLoading] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);

  // Состояния для drag-and-drop функциональности
  const [isDraggable, setIsDraggable] = useState(false);
  const [draggableCardId, setDraggableCardId] = useState(null);
  const [dragStartColumn, setDragStartColumn] = useState(null);

  const getTasks = useCallback(async () => {
    try {
      setIsLoading(true);
      const data = await fetchTasks({ token: token });
      if (data) setTasks(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }, [token]);

  useEffect(() => {
    if (token) {
      getTasks();
    }
  }, [getTasks, token]);

  const addTask = async ({ newTask }) => {
    if (!token) {
      console.error("Токен авторизации отсутствует");
      window.location.href = "/login";
      return;
    }

    setIsLoading(true);
    try {
      await postTask({ token, newTask }).then((data) => {
        setTasks(data);
      });
    } catch (err) {
      if (err.response?.status === 401) {
        console.error("Сессия истекла. Требуется авторизация");
        window.location.href = "/login";
      } else {
        setError(err.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const updateTasks = (newTasks) => {
    setTasks(newTasks);
  };

  const editTasks = async (id, task) => {
    setIsLoading(true);
    try {
      await editTask(token, id, task).then((data) => {
        setTasks(data);
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const deleteTasks = async (id) => {
    setIsLoading(true);
    try {
      await deleteTask(token, id).then((data) => {
        setTasks(data);
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const updateSelectedDate = (date) => {
    setSelectedDate(date);
  };

  // Новая функция для обновления статуса задачи
  const updateTaskStatus = async (cardId, newStatus) => {
    setIsLoading(true);
    try {
      // Находим задачу по ID
      const taskToUpdate = tasks.find(task => task._id === cardId);
      if (!taskToUpdate) return;

      // Создаём обновлённую задачу
      const updatedTask = {
        ...taskToUpdate,
        status: newStatus
      };

      // Обновляем на сервере
      await editTask(token, cardId, updatedTask);

      // Обновляем локальное состояние
      setTasks(prevTasks =>
        prevTasks.map(task =>
          task._id === cardId ? updatedTask : task
        )
      );
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <TasksContext.Provider
      value={{
        tasks,
        setTasks,
        error,
        isLoading,
        setIsLoading,
        getTasks,
        addTask, 
        updateTasks,
        editTasks,
        deleteTasks,
        selectedDate,
        updateSelectedDate,
        // Drag-and-drop функции
        isDraggable,
        setIsDraggable,
        draggableCardId,
        setDraggableCardId,
        dragStartColumn,
        setDragStartColumn,
        // Новая функция для обновления статуса
        updateTaskStatus
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};