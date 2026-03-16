import styled from "styled-components";


export const SDateContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`

export const SDateIcon = styled.svg`
  width: 13px;
  height: 13px;
  fill: "none";
`

export const SDate = styled.p`
  margin-left: 6px;
  font-size: 10px;
  line-height: 13px;
  color: #94A6BE;
  letter-spacing: 0.2px;
`

export const SCardContentContainer = styled.div`
  height: 64px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`

export const SCardContentLink = styled.a`
  text-decoration: none;
  cursor: pointer;
`

export const SCardTitle = styled.h3`
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: #000000;
  margin-bottom: 10px;
`

export const SCardHeader = styled.header`
  width: 100%;
  height: 20px;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const SCardLabel = styled.div`
  width: auto;
  height: 20px;
  padding: 5px 14px;
  border-radius: 18px;
  background-color: ${(props) => {
    return props.$labelColor
  }};
  color: ${(props) => {
    return props.$textColor
  }};
`

export const SCardButton = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 2px;
`

export const SCardButtonPoint = styled.div`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: #94A6BE;
`

export const SCardTopic = styled.p`
  font-size: 10px;
  font-weight: 600;
  line-height: 10px;
`

export const SCardContainer = styled.div`
  width: 220px;
  height: 130px;
  background-color: #FFFFFF;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: stretch;
  padding: 15px 13px 19px;
`
