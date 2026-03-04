import styled from "styled-components";


export const SLoaderWrapper = styled.div`
  position: relative;
`;

export const SLoader = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  text-align: center;
  background: #94A6BE;
  opacity: 0.9;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

export const SLoaderText = styled.p`
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  color: #111;
  text-transform: uppercase;
`;
