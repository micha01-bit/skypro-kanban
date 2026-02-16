 import axios from 'axios';

const API_URL = 'https://wedev-api.sky.pro';

// Авторизация
export async function signIn(userData) {
  try {
    const response = await axios.post(`${API_URL}/api/user/login`, userData, {
      headers: { 'Content-Type': 'application/json' },
    });
    return response.data.user;
  } catch (error) {
    throw new Error(error.response?.data?.error || 'Ошибка входа');
  }
}

export async function signUp({ name, login, password }) {
  try {
    const response = await axios.post(`${API_URL}/api/user`, { login, name, password }, {
      headers: { 'Content-Type': 'application/json' },
    });
    return response.data.user;
  } catch (error) {
    throw new Error(error.response?.data?.error || 'Ошибка регистрации');
  }
}

// Задачи
export async function fetchTasks(token) {
  try {
    const response = await axios.get(`${API_URL}/api/kanban`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data.tasks;
  } catch (error) {
    throw new Error(error.response?.data?.error || 'Ошибка загрузки задач');
  }
}

export async function createTask(token, task) {
  try {
    const response = await axios.post(`${API_URL}/api/kanban`, task, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.error || 'Ошибка создания задачи');
  }
}

export async function updateTask(token, id, task) {
  try {
    const response = await axios.patch(`${API_URL}/api/kanban/${id}`, task, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.error || 'Ошибка обновления задачи');
  }
}  

 
  
   
    
// import axios from "axios";

// const API_URL = "https://wedev-api.sky.pro/api/kanban";
// export async function fetchTasks({ token }) {
//   try {
//     const data = await axios.get(API_URL, {
//       headers: {
//         Authorization: "Bearer " + token,
//       },
//     });
//     return data.data.tasks;
//   } catch (error) {
//     throw new Error(error.message);
//   }
// }

// export async function postTask({ token, task }) {
//   try {
//     const data = await axios.post(API_URL, task, {
//       headers: {
//         Authorization: "Bearer " + token,
//         "Content-Type": "text/html",
//       },
//     });
//     return data.data.tasks;
//   } catch (error) {
//     throw new Error(error.message);
//   }
// }

// export async function editTask({ token, id, task }) {
//   try {
//     const data = await axios.patch(`${API_URL}/${id}`, task, {
//       headers: {
//         Authorization: "Bearer " + token,
//         "Content-Type": "text/html",
//       },
//     });
//     return data.data.tasks;
//   } catch (error) {
//     throw new Error(error.message);
//   }
// }