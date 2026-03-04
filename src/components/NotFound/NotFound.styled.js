import styled from "styled-components";


export const SPageBackground = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #EAEEF6;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 20px;
`;

export const STitle = styled.p`
  font-size: 150px;
  font-weight: 700;
`;

export const SMessage = styled.p`
  font-size: 50px;
  font-weight: 700;
`;

export const SButtonWrapper = styled.div`
  margin-top: 50px;
`;

export const SHeaderButton = styled.button`
  width: 178px;
  height: 30px;
  border-radius: 4px;
  background-color: #565EEF;
  color: #FFFFFF;
  border: none;
  font-size: 14px;
  line-height: 1;
  font-weight: 500;
  margin-right: 20px;
  &:hover {
    background-color: #33399b;
  }
`;

export const SHeaderButtonLink = styled.a`
  color: #FFFFFF;
`;

export const SHeaderLink = styled.div`
  cursor: pointer;
  height: 20px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 20px;
  color: #565EEF;
  &:hover {
    color: #33399b;
    &::after {
      border-left: 1.9px solid #33399b;
      border-bottom: 1.9px solid #33399b;
    }
  }
  &::after {
    content: "";
    display: block;
    width: 6px;
    height: 6px;
    border-radius: 1px;
    border-left: 1.9px solid #565EEF;
    border-bottom: 1.9px solid #565EEF;
    transform: rotate(-45deg);
    margin: -6px 0 0 5px;
    padding: 0;
  }
`;