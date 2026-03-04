import { useState } from "react";
import { AuthContext } from "./AuthContext";
import { login, registration } from "../services/auth";
import { validateForm } from "../utils/helpers";


export const AuthProvider = ({ children }) => {
  function checkLs() {
    try {
      return localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) : null
    } catch {
      return null
    }
  }

  const [user, setUser] = useState(checkLs());

  const updateUserInfo = (userData) => {
    setUser(userData);

    if (userData) {
      localStorage.setItem("userInfo", JSON.stringify(userData));
    } else {
      localStorage.removeItem("userInfo");
    };
  }


  const [formData, setFormData] = useState({ name: "", login: "", password: "" });
  const [errors, setErrors] = useState({ name: false, login: false, password: false });
  const [error, setError] = useState("");
  const [isValid, setIsValid] = useState(true);

  const handleChange = (e) => {
    setIsValid(true);
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: false });
    setError("");
  };

  const handleLogin = async (isSignUp) => {
    setIsValid(false);

    if (!validateForm(formData, isSignUp, setErrors, setError, setIsValid)) {
      return;
    }

    try {
      const data = !isSignUp ? await login({ login: formData.login, password: formData.password }) : await registration(formData);

      if (data) {
        updateUserInfo(data);
        return true;
      }
    } catch (err) {
      setError(err.message);
      setIsValid(false)
      return false;
    }
  };

  const handleLogout = (e) => {
    updateUserInfo(null);
  };


  return (
    <AuthContext.Provider value={{
      user, updateUserInfo,
      handleChange, handleLogin, handleLogout,
      formData,
      errors,
      error,
      isValid,
    }}>
      {children}
    </AuthContext.Provider>
  )
}