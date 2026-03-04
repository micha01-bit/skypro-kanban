import styled, { keyframes } from "styled-components";


export const SColumn = styled.div`
  width: 20%;
  margin: 0 auto;
  display: block;
`

export const SColumnTitleContainer = styled.div`
  padding: 0 10px;
  margin: 15px 0;
`

export const SColumnTitle = styled.p`
  color: #94A6BE;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
  text-transform: uppercase;
`

export const SCards = styled.div`
  width: 100%;
  display: block;
  position: relative;
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
`
