import { SButton, PrimaryButton, SecondaryButton } from "./Button.styled";


export const Button = ({ onClick, text, type = "primary", width="248px", disabled = false }) => {
  if (type === "primary") return <PrimaryButton onClick={onClick} width={width} disabled={disabled}>{text}</PrimaryButton>;
  if (type === "secondary") return <SecondaryButton onClick={onClick} width={width} disabled={disabled}>{text}</SecondaryButton>;

  return (
    <SButton onClick={onClick} $type={type} width={width} disabled={disabled}>{text}</SButton>
  )
};
