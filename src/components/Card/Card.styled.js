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
  color: var(--text-secondary);
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
  color: var(--text-primary);
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

const categoryBackgroundColors = {
  "Web Design": "var(--bg-web-design)",
  "Research": "var(--bg-research)",
  "Copywriting": "var(--bg-copywriting)",
};

const categoryColors = {
  "Web Design": "var(--color-web-design)",
  "Research": "var(--color-research)",
  "Copywriting": "var(--color-copywriting)",
};

export const SCardLabel = styled.div`
  width: auto;
  height: 20px;
  padding: 5px 14px;
  border-radius: 18px;
  background-color: ${({ $topic }) => categoryBackgroundColors[$topic]};
  color: ${({ $topic }) => categoryColors[$topic]};
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
  background-color: var(--bg-secondary);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: stretch;
  padding: 15px 13px 19px;

  @media screen and (max-width: 1200px) { 
    width: 220px;
    height: 130px;
    /* background-color: #FFFFFF; */
    background-color: var(--bg-secondary);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: stretch;
    padding: 15px 13px 19px;
  }

  transition: opacity 0.2s ease;

  ${({ $isDragging }) =>
    $isDragging &&
    `
    // opacity: 0.3;
    opacity: 0;
    cursor: grabbing;
    box-shadow: 0 10px 20px rgba(0,0,0,0.15);
    // background-color: #ff00e6;
  `}

  &:hover, &:active {
    box-shadow: 0px 10px 39px 0px var(--card-shadow);
  }

  &:hover {
    cursor: grab;
  }

  &:active {
    cursor: grabbing;
  }
`

export const SCardContainerGhost = styled.div`
  position: absolute;
  top: 5px;
  left: 5px;
  width: 220px;
  height: 130px;
  background-color: rgba(148, 166, 190, 0.1);
  border-radius: 10px;
  border: 1px dashed #94a6be;
  box-sizing: border-box;
  pointer-events: none;
`

export const SCardContainerGhostColumnEnd = styled.div`
  position: absolute;
  top: 5px;
  left: 5px;
  width: 220px;
  height: 130px;
  background-color: transparent;
  border-radius: 10px;
  border: 1px dashed #94a6be;
  box-sizing: border-box;
  pointer-events: none;
` 