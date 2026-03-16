import { useContext } from "react";
import { SInput } from "./Input.styled";
import { AuthContext } from "../../context/AuthContext";


export const Input = ({ type, placeholder, name, onChange }) => {
  const { error } = useContext(AuthContext);

  
  return (
    <SInput
      type={type}
      placeholder={placeholder}
      name={name}
      $error={error}
      onChange={onChange}
    />
  )
}; 