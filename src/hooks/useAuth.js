import { useState, useEffect } from "react";
import { signIn, signUp, getUsers } from "../services/auth.js";

export const useAuth = () => {
  const [token, setToken] = useState(localStorage.getItem("tokenAuth") || null);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (token) {
      setUser({ token });
    } else {
      setUser(null);
    }
  }, [token]);

  const login = async (userData) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await signIn(userData);
      setToken(response.token);
      setUser(response);
      localStorage.setItem("tokenAuth", response.token);
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
      const response = await signUp({ name, login, password });
      setToken(response.token);
      setUser(response);
      localStorage.setItem("tokenAuth", response.token);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem("tokenAuth");
  };

  return { token, user, isLoading, error, login, register, logout };
};
 
 
  
  
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
