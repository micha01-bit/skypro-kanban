import axios from 'axios';

const API_URL = 'https://wedev-api.sky.pro/api/kanban';


export async function fetchTasks(token) {
  try {
    const response = await axios.get(API_URL, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data.tasks;
  } catch (error) {
    throw new Error(error.response?.data?.error || 'Не удалось загрузить задачи');
  }
}

export async function createTask(token, task) {
  try {
    const response = await axios.post(API_URL, task, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    return response.data.task;
  } catch (error) {
    throw new Error(error.response?.data?.error || 'Не удалось создать задачу');
  }
}

export async function updateTask(token, id, task) {
  try {
    const response = await axios.patch(`${API_URL}/${id}`, task, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    return response.data.task;
  } catch (error) {
    throw new Error(error.response?.data?.error || 'Не удалось обновить задачу');
  }
} 