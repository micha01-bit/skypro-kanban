import { useState, useEffect } from 'react';
import { signIn, signUp, logout } from '../services/auth.js';

export const useAuth = () => {
  const storedUser = JSON.parse(localStorage.getItem('user')) || null;
  const storedToken = localStorage.getItem('tokenAuth') || null;

  const [token, setToken] = useState(storedToken);
  const [user, setUser] = useState(storedUser);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (token && user) {
      localStorage.setItem('tokenAuth', token);
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('tokenAuth');
      localStorage.removeItem('user');
    }
  }, [token, user]);

  const login = async (userData) => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await signIn(userData);
      console.log('login data:', data);
      setToken(data.token);
      setUser({
        name: data.name,
        email: data.email || data.login || null,
        token: data.token,
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const register = async ({ name, login, password }) => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await signUp({ name, login, password });
      console.log('register data:', data);
      setToken(data.token);
      setUser({
        name: data.name || name,
        email: data.email || data.login || login || null,
        token: data.token,
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const clearAuth = () => {
    logout();
    setToken(null);
    setUser(null);
  };

  return { token, user, isLoading, error, login, register, clearAuth };
};
  
   
    
// import { useState, useEffect } from 'react';
// import { signIn, signUp, logout } from '../services/auth.js';

// export const useAuth = () => {
//   // Тут читаем из localStorage
//   const storedUser = JSON.parse(localStorage.getItem('user')) || null;
//   const storedToken = localStorage.getItem('tokenAuth') || null;

//   const [token, setToken] = useState(storedToken);
//   const [user, setUser] = useState(storedUser);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     if (token && user) {
//       // При изменении токена или юзера — сохраняем их
//       localStorage.setItem('tokenAuth', token);
//       localStorage.setItem('user', JSON.stringify(user));
//     } else {
//       localStorage.removeItem('tokenAuth');
//       localStorage.removeItem('user');
//     }
//   }, [token, user]);

//   const login = async (userData) => {
//     setIsLoading(true);
//     setError(null);
//     try {
//       const data = await signIn(userData);
//       setToken(data.token);
//       setUser({ name: data.name, email: data.email, token: data.token }); // пример
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const register = async ({ name, login, password }) => {
//     setIsLoading(true);
//     setError(null);
//     try {
//       const data = await signUp({ name, login, password });
//       setToken(data.token);
//       setUser({ name, email: login, token: data.token }); // пример
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const clearAuth = () => {
//     logout();
//     setToken(null);
//     setUser(null);
//   };

//   return { token, user, isLoading, error,  login, register, clearAuth };
// }; 
  
   
    
// import { useState, useEffect } from 'react';
// import { signIn, signUp, logout } from '../services/auth.js';


// export const useAuth = () => {
//   const [token, setToken] = useState(localStorage.getItem('tokenAuth') || null);
//   const [user, setUser] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     if (token) {
//       setUser({ token });
//     } else {
//       setUser(null);
//     }
//   }, [token]);

//   const login = async (userData) => {
//     setIsLoading(true);
//     setError(null);
//     try {
//       const userData = await signIn(userData);
//       setToken(userData.token);
//       setUser(userData);
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const register = async ({ name, login, password }) => {
//     setIsLoading(true);
//     setError(null);
//     try {
//       const userData = await signUp({ name, login, password });
//       setToken(userData.token);
//       setUser(userData);
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const clearAuth = () => {
//     logout();
//     setToken(null);
//     setUser(null);
//   };

//   return { token, user, isLoading, error, login, register, clearAuth };
// };
 
  
   
// import { useState, useEffect } from 'react';
// import { signIn, signUp, logout } from '../services/auth.js';


// export const useAuth = () => {
//   const [token, setToken] = useState(localStorage.getItem('tokenAuth') || null);
//   const [user, setUser] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     if (token) {
//       setUser({ token });
//     } else {
//       setUser(null);
//     }
//   }, [token]);

//   const login = async (userData) => {
//     setIsLoading(true);
//     setError(null);
//     try {
//       const userData = await signIn(userData);
//       setToken(userData.token);
//       setUser(userData);
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const register = async ({ name, login, password }) => {
//     setIsLoading(true);
//     setError(null);
//     try {
//       const userData = await signUp({ name, login, password });
//       setToken(userData.token);
//       setUser(userData);
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const clearAuth = () => {
//     logout();
//     setToken(null);
//     setUser(null);
//   };

//   return { token, user, isLoading, error, login, register, clearAuth };
// };  

 
 
   
    
// import { useState, useEffect } from 'react';
// import { signIn, signUp, getUsers } from '../services/auth.js';

// export const useAuth = () => {
//   const [token, setToken] = useState(localStorage.getItem('tokenAuth') || null);
//   const [user, setUser] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     if (token) {
//       // Здесь можно загрузить данные пользователя, если API предоставляет такой метод
//       setUser({ token });
//     }
//   }, [token]);

//   const login = async (userData) => {
//     setIsLoading(true);
//     setError(null);
//     try {
//       const response = await signIn(userData);
//       setToken(response.token);
//       setUser(response);
//       localStorage.setItem('tokenAuth', response.token);
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const register = async ({ name, login, password }) => {
//     setIsLoading(true);
//     setError(null);
//     try {
//       const response = await signUp({ name, login, password });
//       setToken(response.token);
//       setUser(response);
//       localStorage.setItem('tokenAuth', response.token);
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const logout = () => {
//     setToken(null);
//     setUser(null);
//     localStorage.removeItem('tokenAuth');
//   };

//   return { token, user, isLoading, error, login, register, logout };
// };
