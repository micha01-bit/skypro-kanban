import { SInput } from "./Input.styled";


export const Input = ({ type, placeholder, name, error, onChange }) => {
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