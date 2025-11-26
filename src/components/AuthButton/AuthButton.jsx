import styled from "styled-components";

const colors = {
  primary: "rgba(255, 255, 255, 1)",
  secondary: "rgba(86, 94, 239, 1)",
  tertiary: "rgba(255, 255, 255, 1)",
};

const SButton = styled.button`
  display: flex; 
  flex-direction: row;
  align-items: center;
  justify-content: center;

  height: 30px;
  padding: 8px 10px 8px 10px;
  border-radius: 4px;
  border: 1px solid #565eef;

  &:disabled {
    background-color: rgba(86, 94, 239, 1);
    color: #ffffff;
    border: none;
  }
`;

const TextButton = styled(SButton)`
  background-color: ${({ $type }) => colors[$type]};
  ${({ $type }) => ($type === "secondary" ? "color: #FFFFFF" : "")};
  width: 100%;
`;

const IconButton = styled(SButton)`
  width: 248px;
  border-radius: 50%;
  background-color: rgba(86, 94, 239, 1);
`;

const BaseButton = ({
  text,
  type = "primary",
  disabled = false,
  onClick,
  children,
}) => {
  if (type === "icon")
    return (
      <IconButton onClick={onClick} $type={type} disabled={disabled}>
        {children}
      </IconButton>
    );
  return (
    <TextButton onClick={onClick} $type={type} disabled={disabled}>
      {text}
    </TextButton>
  );
};

export default BaseButton;