import axios from "axios";

const API_URL = "https://wedev-api.sky.pro/api/user";

export async function signIn(userData) {
  try {
    const response = await axios.post(
      `${API_URL}/login`,
      userData,
      {
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        transformRequest: [(data) => JSON.stringify(data)]
      }
    );
    return response.data.user;
  } catch (error) {
    const message = 
      error.response?.data?.error ||
      error.message ||
      "Ошибка входа. Проверьте логин и пароль.";
    throw new Error(message);
  }
}

export async function signUp({ name, login, password }) {
  try {
    const response = await axios.post(
      API_URL,
      { login, name, password },
      {
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        transformRequest: [(data) => JSON.stringify(data)]
      }
    );
    return response.data.user;
  } catch (error) {
    const message =
      error.response?.data?.error ||
      error.message ||
      "Ошибка регистрации. Попробуйте ещё раз.";
    throw new Error(message);
  }
}

export async function getUsers() {
  try {
    const response = await axios.get(API_URL, {
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    });
    return response.data.users;
  } catch (error) {
    const message =
      error.message ||
      "Ошибка получения пользователей. Проверьте соединение.";
    throw new Error(message);
  }
}
 
 
  
   
// import axios from "axios"; 

// const API_URL = "https://wedev-api.sky.pro/api/user";

// export async function signIn(userData) {
//   try {
//     const response = await axios.post(
//       `${API_URL}/login`,
//       userData,
//       {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       }
//     );
//     return response.data.user;
//   } catch (error) {
//     // Улучшено: проверяем наличие error.response перед доступом к полям
//     const message =
//       error.response?.data?.error ||
//       error.message ||
//       "Ошибка входа";
//     throw new Error(message);
//   }
// }

// export async function signUp({ name, login, password }) {
//   try {
//     const response = await axios.post(
//       API_URL,
//       { login, name, password },
//       {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       }
//     );
//     return response.data.user;
//   } catch (error) {
//     const message =
//       error.response?.data?.error ||
//       error.message ||
//       "Ошибка регистрации";
//     throw new Error(message);
//   }
// }

// export async function getUsers() {
//   try {
//     const response = await axios.get(API_URL, {
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//     return response.data.users;
//   } catch (error) {
//     // Улучшено: добавляем контекст ошибки
//     const message = error.message || "Ошибка получения пользователей";
//     throw new Error(message);
//   }
// }


 
  
  
    
// import axios from "axios";

// const API_URL = "https://wedev-api.sky.pro/api/user";

// export async function signIn(userData) {
//   try {
//     const data = await axios.post(`${API_URL}/login`, userData, {
//       headers: {
//         "Content-Type": "",
//       },
//     });
//     localStorage.setItem("tokenAuth", data.data.user.token);
//     return data.data.user;
//   } catch (error) {
//     throw new Error(error.response.data.error);
//   }
// }

// export async function signUp({ name, login, password }) {
//   try {
//     const data = await axios.post(
//       API_URL,
//       { login, name, password },
//       {
//         headers: {
//           "Content-Type": "",
//         },
//       }
//     );
//     localStorage.setItem("tokenAuth", data.data.user.token);
//     return data.data.user;
//   } catch (error) {
//     throw new Error(error.response.data.error);
//   }
// }

// export async function getUsers() {
//   try {
//     const response = await axios.get(API_URL, {
//       headers: {
//         "Content-Type": "",
//       },
//     });
//     return response.data.users;
//   } catch (error) {
//     if (error.response && error.response.data && error.response.data.error) {
//       throw new Error(error.response.data.error);
//     }
//     throw new Error("Ошибка при получении списка пользователей");
//   }
// }