import styled from "styled-components";


const colors = {
  primary: "#565EEF",
  secondary: "#FFFFFF",
  tertiary: "#94A6BE",
};

export const SButton = styled.button`
  width: 248px;
  height: 30px;
  padding: 8px 10px;
  border: none;
  outline: none;
  line-height: 21px;
  letter-spacing: -0.14px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
  color: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ $type }) => colors[$type]};
  ${({ $type }) => ($type === "secondary" ? "color: #565EEF" : "")}
`;

export const PrimaryButton = styled(SButton)`
  background-color: ${({ disabled }) => (disabled ? "#94A6BE" : "#565EEF")};
  width: ${({ width }) => width};
  &:hover {
    background-color: ${({ disabled }) => (disabled ? "#94A6BE" : "#33399b")};
  }
`;

export const SecondaryButton = styled(SButton)`
  background-color: transparent;
  color: #565EEF;
  border: 0.7px solid #565EEF;
  width: ${({ width }) => width};
  &:hover {
    background-color: #565EEF;
    color: #FFFFFF;
  }
`;
