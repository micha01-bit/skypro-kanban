import styled, { keyframes } from "styled-components";


export const SColumn = styled.div`
  width: 20%;
  margin: 0 auto;
  display: block;
  @media screen and (max-width: 1200px) { 
    width: 100%;
    margin: 0 auto;
    display: block;
  }
  grid-template-rows: auto 1fr;
  height: 100%;
`

export const SColumnTitleContainer = styled.div`
  padding: 0 10px;
  margin: 15px 0;
`

export const SColumnTitle = styled.p`
  color: var(--text-secondary);
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
  text-transform: uppercase;
`

export const SCards = styled.div`
  gap: 10px;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: 130px;
  align-content: start;
  
  @media screen and (max-width: 1200px) { 
    width: 100%;
    display: flex;
    overflow-y: auto;
  }
`

const cardAnimation = keyframes`
  0% {
    height: 0;
    opacity: 0;
  }

  100% {
    height: auto;
    opacity: 1;
  }
`

export const SCardItem = styled.div`
  padding: 5px;
  animation-name: ${cardAnimation};
  animation-duration: 500ms;
  animation-timing-function: linear;
  position: relative;
`

export const SGhostContainer = styled.div`
  width: 100%;
  height: 130px;
  padding: 5px;
  margin-top: 5px;
  position: relative;
  animation-name: ${cardAnimation};
  animation-duration: 500ms;
  animation-timing-function: linear;
  ` 