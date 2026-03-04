import styled from "styled-components";
import { Link } from "react-router-dom";


export const SPageBackground = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #EAEEF6;
    display: flex;
    justify-content: center;
    align-items: center;
    `;

export const SWrapper = styled.div`
  width: 368px;
  /* height: 329px; */
  background-color: #FFFFFF;
  border: 0.7px solid #D4DBE5;
  border-radius: 10px;
  padding: 50px 60px;
  box-shadow: 0px 4px 67px -12px #00000021;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 20px;

`;

export const STitle = styled.p`
  font-size: 20px;
  font-weight: 700;
`;

export const SForm = styled.form`
  /* font-size: 20px;
  font-weight: 700; */
`;

export const SInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
  margin-bottom: 7px;
`;

export const SFooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* gap: 7px; */
  line-height: 150%;
  margin-top: 20px;
`;

export const SFooterText = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: rgba(148, 166, 190, 0.4); 
`;

export const SFooterLink = styled(Link)`
  font-size: 14px;
  font-weight: 400;
  text-decoration: underline;
  color: rgba(148, 166, 190, 0.4);
  cursor: pointer;
  /* &:visited {
    color: rgba(148, 166, 190, 0.4);
  } */
`;

export const SErrorMessageWrapper = styled.div`
  /* width: 250px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 7px;
  margin-bottom: 20px;
`;

export const SErrorMessageText = styled.p`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 12px;
  font-weight: 400;
  color: #F84D4D;
  text-align: center;
  line-height: 150%;
`;