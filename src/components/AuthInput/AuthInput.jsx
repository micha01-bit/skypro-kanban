import styled from "styled-components";

// Создаем стилизованные компоненты
const StyledInput = styled.input`
  width: 100%; 
  height: 30px;
  outline: none;
  padding: 10px;
  background-color: white;
  border-radius: 8px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  font-size: 16px;

  &::placeholder {
    color: rgba(148, 166, 190, 1);
    font-family: Roboto;
    font-size: 14px;
    font-weight: 400; 
    text-align: left;
  }

  ${({ $error }) => $error && `outline: 0.7px solid red;`}
`;

const StyledTextarea = styled.textarea`
  width: 100%;
  outline: none;
  padding: 10px;
  background-color: white;
  border-radius: 8px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  font-size: 16px;

  &::placeholder {
    color: rgba(148, 166, 190, 1);
    font-family: Roboto;
    font-size: 14px;
    font-weight: 400; 
    text-align: left;
  }

  ${({ $error }) => $error && `outline: 0.7px solid red;`}
`;

const BaseInput = ({
  tag = "input",
  id,
  name,
  placeholder = "",
  type = "text",
  error = false,
}) => {
  // Выбираем компонент в зависимости от тега
  const Component = tag === "textarea" ? StyledTextarea : StyledInput;

  return (
    <Component
      id={id}
      name={name}
      type={type}
      placeholder={placeholder}
      $error={error}
    />
  );
};

export default BaseInput;