import styled from "styled-components";


export const SInput = styled.input`
  width: 248px;
  height: 30px;
  padding: 8px 10px;
  background-color: transparent;
  color:  var(--text-primary);
  border: 0.7px solid ${({ $error }) => ($error ? 'rgba(248, 77, 77, 1)' : 'rgba(148, 166, 190, 0.4)')};
  border-radius: 8px;
  &:hover {
    outline: none;
    border-color: rgba(86, 94, 239, 0.8);
  }
  &:focus {
    outline: none;
    border-color: rgba(86, 94, 239, 0.8);
    box-shadow: 0 0 0 3px rgba(86, 94, 239, 0.2);
  }
  &::placeholder {
    color: rgba(148, 166, 190, 1);
    font-size: 14px;
  }
`