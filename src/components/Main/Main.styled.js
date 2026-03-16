import styled from "styled-components";

export const MainWrapper = styled.main`
  width: 100%;
  background-color: #EAEEF6;
  height: 100vh
`;

export const MainBlock = styled.div`
   width: 100%;
  margin: 0 auto;
  padding: 25px 0 49px; 
  display: flex; 
  max-width: 1200px;

  @media screen and (max-width: 1200px) {
    padding: 40px 0 64px;
  }
`;
