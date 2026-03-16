import { Link } from "react-router-dom";
import styled from "styled-components";


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


export const SWrapper = styled.div`
  width: 100%;
  height: 100vh;
  min-width: 375px;
  position: fixed;
  top: 0;
  @media screen and (max-width: 660px) {
    top: 70px;
  }
  left: 0;
  z-index: 7;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 495px) {
    display: flex;
    flex-direction: column;
  }
`;

export const SContainer = styled.div`
  width: 100%;
  max-width: 630px;
  min-height: calc(100vh - 40px);
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  @media screen and (max-width: 660px) {
    padding: 0;
    justify-content: flex-start;
  }
  @media screen and (max-width: 495px) {
    display: flex;
    flex-direction: column;
  }
`;

export const SBlock = styled.div`
  display: block;
  margin: auto;
  background-color: var(--bg-secondary);
  width: 100%;
  padding: 40px 30px 38px;
  border-radius: 10px;
  border: 0.7px solid var(--borders);
  position: relative;
  @media screen and (max-width: 660px) {
    border-radius: 0;
  }
  @media screen and (max-width: 495px) {
    padding: 20px 16px 32px;
    display: flex;
    flex-direction: column;
  }
`;

export const SContent = styled.div`
  display: block;
  text-align: left;
  @media screen and (max-width: 495px) {
    /* padding: 20px 16px 32px; */
    display: flex;
    flex-direction: column;
  }
`;

export const STopBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
  @media screen and (max-width: 660px) {
    display: block;
  }
  @media screen and (max-width: 495px) {
    display: none;
  }
`;

export const STitle = styled.h3`
  color: var(--text-primary);
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
`;

export const SCategoriesThemeTop = styled.div`
  width: auto;
  height: 30px;
  padding: 8px 20px;
  border-radius: 24px;
  margin-right: 7px;
  display: block;

    background-color: ${({ $taskCategory }) => categoryBackgroundColors[$taskCategory]};
    color: ${({ $taskCategory }) => categoryColors[$taskCategory]};
  `;

export const SCategoryThemeTop = styled.p`
  font-size: 14px;
  font-weight: 600;
  line-height: 14px;
  white-space: nowrap;
`;

export const SStatusesWrapper = styled.div`
  margin-bottom: 11px;
`;

export const SStatusesTitle = styled.p`
  margin-bottom: 14px;
  color: var(--text-primary);
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;

export const SStatusesContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const SStatus = styled.div`
  border-radius: 24px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  padding: 11px 14px 10px;
  margin-right: 7px;
  margin-bottom: 7px;
  background-color: ${({ $isStatusSelected }) => $isStatusSelected ? "#94A6BE" : "transparent"};
  `;

export const SStatusTheme = styled.p`
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  color: ${({ $isStatusSelected }) => $isStatusSelected ? "var(--text-tertiary);" : "var(--text-secondary);"};
  `;

export const SFormWrapper = styled.div`
  display: flex;
  /* align-items: flex-start; */
  align-items: stretch;
  justify-content: space-between;
  @media screen and (max-width: 660px) {
    flex-direction: column;
    align-items: flex-start;
  }
  `;

export const SForm = styled.form`
  max-width: 370px;
  width: 100%;
  display: block;
  margin-bottom: 20px;
  @media screen and (max-width: 495px) {
    max-width: 100%;
  }
`;

export const SFormBlock = styled.div`
  display: flex;
  flex-direction: column;
  `;

export const SFormLabel = styled.label`
  color: var(--text-primary);
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
  `;

export const SFormText = styled.textarea`
  max-width: 370px;
  width: 100%;
  outline: none;
  padding: 14px;
  background-color: ${({ $isEditTask }) => $isEditTask ? "transparent" : "var(--bg-primary)"};
  color: ${({ $isEditTask }) => { $isEditTask ? "var(--text-secondary)" : "var(--text-primary)" }};
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  margin-top: 14px;
  min-height: 200px;
  flex: 1;

  &::-moz-placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: var(--text-secondary);
    letter-spacing: -0.14px;
  }
  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: var(--text-secondary);
    letter-spacing: -0.14px;
  }

  /* @media screen and (max-width: 660px) {
    min-height: 150px;
  } */

  @media screen and (max-width: 495px) {
    max-width: 100%;
    height: 37px;
  }
`;

export const SButtonsWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: row;
  @media screen and (max-width: 495px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 8px;
  }
`;

export const SButtonsGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 8px;
  @media screen and (max-width: 495px) {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`;

export const SStyledLink = styled(Link)`
  text-decoration: none;
  @media only screen and (max-width: 495px) {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`; 