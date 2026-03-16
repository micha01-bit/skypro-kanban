// import { useNavigate } from "react-router-dom";
// import { useState, useEffect, useCallback } from "react";
// import { fetchTasks, postTask } from "../services/api.js";


// export const useTasks = (token) => {
//   const navigate = useNavigate();

//   const [isLoading, setIsLoading] = useState(true);
//   const [tasks, setTasks] = useState([]);
//   const [error, setError] = useState("");


//   const getTasks = useCallback(async () => {
//     try {
//       setIsLoading(true);
//       const data = await fetchTasks({
//         token: token,
//       });
//       if (data) setTasks(data);
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setIsLoading(false);
//     }
//   }, [token]);


//   useEffect(() => {
//     if (token) {
//       getTasks();
//       navigate("/");
//     }
//   }, [getTasks, token]);


//   const addTask = async ({ newTask }) => {
//     setIsLoading(true);
//     try {
//       await postTask({ token, newTask })
//         .then((data) => {
//           setTasks(data);
//         })
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return { tasks, error, isLoading, getTasks, addTask };
// };
