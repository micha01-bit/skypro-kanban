import { Link } from "react-router-dom";
import styled from "styled-components";


export const SPageBackground = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #EAEEF6;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const SWrapper = styled.div`
  width: 100%;
  height: 100vh;
  min-width: 320px;
  min-height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
`;

export const SBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color: var(--bg-secondary);
  max-width: 370px;
  width: 100%;
  padding: 50px 28.5px;
  border-radius: 10px;
  border: 0.7px solid var(--borders);
  box-shadow: 0px 4px 67px -12px rgba(0, 0, 0, 0.13);
  @media only screen and (max-width: 375px) {
    padding: 50px 20px;
  }
`;

export const SContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  `;

export const STitle = styled.div`
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: -0.4px;
  margin-bottom: 20px;
  `;

export const SForm = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 7px;
`;

export const SButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 7px;
  & > * {
    flex: 1; 
  }
  @media only screen and (max-width: 375px) {
    flex-direction: column;
    gap: 7px;
  }
`;

export const SStyledLink = styled(Link)`
  text-decoration: none;
  @media only screen and (max-width: 375px) {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`; 