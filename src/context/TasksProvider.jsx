import { useState, useEffect, useCallback, useContext } from "react";
import { deleteTask, editTask, fetchTasks, postTask } from "../services/api.js";
import { TasksContext } from "./TasksContext.js";
import { AuthContext } from "./AuthContext.js";


export const TasksProvider = ({ children }) => {
  const { user } = useContext(AuthContext);
  const token = user?.token;

  const [isLoading, setIsLoading] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);


  const getTasks = useCallback(async () => {
    try {
      setIsLoading(true);
      const data = await fetchTasks({
        token: token,
      });
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
    setIsLoading(true);
    try {
      await postTask({ token, newTask })
        .then((data) => {
          setTasks(data);
        })
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const updateTasks = (newTasks) => {
    setTasks(newTasks);
  };

  const editTasks = async (token, id, task) => {
    setIsLoading(true);
    try {
      await editTask(token, id, task)
        .then((data) => {
          setTasks(data);
        })

      // const updatedTasks = await editTask(token, id, task);
      // setTasks(updatedTasks);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const deleteTasks = async (token, id) => {
    setIsLoading(true);
    try {
      await deleteTask(token, id)
        .then((data) => {
          setTasks(data);
        })

      // await deleteTask(token, id);
      // setTasks((prevTasks) => prevTasks.filter((task) => task._id !== id));
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const updateSelectedDate = (date) => {
    setSelectedDate(date);
  };


  return (
    <TasksContext.Provider
      value={{
        tasks,
        setTasks,
        error,
        isLoading, setIsLoading,
        getTasks, addTask,
        token,
        updateTasks,
        editTasks,
        deleteTasks,
        selectedDate,
        updateSelectedDate
      }}
    >
      {children}
    </TasksContext.Provider>
  )
}