import { useState, useEffect } from "react";
import { fetchTasks, postTask, editTask } from "../services/api.js";

export const useTasks = (token) => {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (token) {
      loadTasks();
    }
  }, [token]);

  const loadTasks = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await fetchTasks({ token });
      setTasks(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const addTask = async (task) => {
    setIsLoading(true);
    setError(null);
    try {
      const newTask = await postTask({ token, task });
      setTasks((prev) => [...prev, newTask]);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const updateTask = async (id, updatedTask) => {
    setIsLoading(true);
    setError(null);
    try {
      const updated = await editTask({ token, id, task: updatedTask });
      setTasks((prev) =>
        prev.map((task) => (task.id === id ? updated : task))
      );
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return { tasks, isLoading, error, loadTasks, addTask, updateTask };
};

 
  
   
// import { useState, useEffect } from 'react';
// import { fetchTasks, postTask, editTask } from '../services/api.js';

// export const useTasks = (token) => {
//   const [tasks, setTasks] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     if (token) {
//       loadTasks();
//     }
//   }, [token]);

//   const loadTasks = async () => {
//     setIsLoading(true);
//     setError(null);
//     try {
//       const data = await fetchTasks({ token });
//       setTasks(data);
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const addTask = async (task) => {
//     setIsLoading(true);
//     setError(null);
//     try {
//       const newTask = await postTask({ token, task });
//       setTasks((prev) => [...prev, newTask]);
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const updateTask = async (id, updatedTask) => {
//     setIsLoading(true);
//     setError(null);
//     try {
//       const updated = await editTask({ token, id, task: updatedTask });
//       setTasks((prev) =>
//         prev.map((task) => (task.id === id ? updated : task))
//       );
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return { tasks, isLoading, error, loadTasks, addTask, updateTask };
// };
