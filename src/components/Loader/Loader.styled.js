import styled, { keyframes } from "styled-components";


const gradient = keyframes`
  0% { background-position: 0% 0%; }
  100% { background-position: 200% 0%; }
`;


export const SSceleton = styled.div`
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
  border-radius: ${({ $radius }) => $radius || "0"};
  margin-bottom: ${({ $marginbottom }) => $marginbottom || "0"};
  background-repeat: no-repeat;

  background: linear-gradient(270deg, #C1CDDC 0%, #E9EEF7 25%, #C1CDDC 50%, #E9EEF7 75%, #C1CDDC 100%);
  background-size: 400% 100%;

  animation: ${gradient} 1.5s infinite linear;
`

export const SCardContainer = styled.div`
  width: 220px;
  height: 130px;
  background-color: var(--bg-secondary);
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 15px 17px 19px 13px;
`

export const SLeft = styled.div`
  max-width: 113px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: stretch;
`

export const SRight = styled.div`
  min-width: 18px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: stretch;
` 