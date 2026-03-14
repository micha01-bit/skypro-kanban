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
  min-width: 375px;
  height: 100vh;
  min-height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 6;
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
  height: 100%;
  min-height: 100vh;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
  @media screen and (max-width: 660px) {
    padding: 0;
    justify-content: flex-start;
  }
  @media screen and (max-width: 495px) {
    padding: 0;
    justify-content: flex-start;
    display: flex;
    flex-direction: column;
  }
`;

export const SBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color: var(--bg-secondary);
  max-width: 630px;
  width: 100%;
  padding: 40px 30px 48px;
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
    display: flex;
    flex-direction: column;
  }
`;

export const STitle = styled.p`
  color: var(--text-primary);
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  margin-bottom: 20px;
`;

export const SXButton = styled.div`
  position: absolute;
  top: 20px;
  right: 30px;
  color: var(--text-secondary);
  cursor: pointer;
  &:hover {
    color: var(--text-primary);
  }
`;

export const SNewCardWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  @media screen and (max-width: 660px) {
    display: block;
  }
`;

export const SFormNewCard = styled.form`
  max-width: 370px;
  width: 100%;
  display: block;
  margin-bottom: 20px;
  @media screen and (max-width: 495px) {
    max-width: 100%;
    width: 100%;
    display: block;
  }
  @media screen and (max-width: 495px) {
    max-width: 100%;
    display: flex;
    flex-direction: column;
  }
`;

export const SFormBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SFormTitle = styled.label`
  color: var(--text-primary);
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;

export const SFormInput = styled.input`
  width: 100%;
  outline: none;
  padding: 14px;
  background-color: var(--bg-secondary);
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  margin: 20px 0;
  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: var(--text-secondary);
    letter-spacing: -0.14px;
  };
    &::-moz-placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: var(--text-secondary);
    letter-spacing: -0.14px;
  }
`;

export const SFormDescribe = styled.textarea`
  width: 100%;
  outline: none;
  padding: 14px;
  background: transparent;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  max-width: 370px;
  margin-top: 14px;
  height: 200px;
  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: var(--text-secondary);
    letter-spacing: -0.14px;
  };
    &::-moz-placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: var(--text-secondary);
    letter-spacing: -0.14px;
  }
`;

export const SCategoriesWrapper = styled.div`
  
  margin-bottom: 20px;
`

export const SCategoriesTitle = styled.p`
  color: var(--text-primary);
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
  margin-bottom: 14px;
`

export const SCategoriesThemesWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: flex-start;
  justify-content: flex-start;
`

export const SCategoriesThemeContainerOrange = styled.div`
  display: inline-block;
  width: auto;
  height: 30px;
  padding: 8px 20px;
  border-radius: 24px;
  margin-right: 7px;
  background-color: #FFE4C2;
  color: #FF6D00;
  cursor: pointer;
  opacity: ${({ $isCategorySelected }) => ($isCategorySelected === "Web Design" ? 1 : 0.4)};
`

export const SCategoriesThemeOrange = styled.p`
  font-size: 14px;
  font-weight: 600;
  line-height: 14px;
  white-space: nowrap;
`

export const SCategoriesThemeContainerGreen = styled.div`
  display: inline-block;
  width: auto;
  height: 30px;
  padding: 8px 20px;
  border-radius: 24px;
  margin-right: 7px;
  opacity: 0.4;
  background-color: #B4FDD1;
  color: #06B16E;
  cursor: pointer;
  opacity: ${({ $isCategorySelected }) => ($isCategorySelected === "Research" ? 1 : 0.4)};

`

export const SCategoriesThemeGreen = styled.p`
  font-size: 14px;
  font-weight: 600;
  line-height: 14px;
  white-space: nowrap;
`

export const SCategoriesThemeContainerPurple = styled.div`
  display: inline-block;
  width: auto;
  height: 30px;
  padding: 8px 20px;
  border-radius: 24px;
  margin-right: 7px;
  opacity: 0.4;
  background-color: #E9D4FF;
  color: #9A48F1;
  cursor: pointer;
  opacity: ${({ $isCategorySelected }) => ($isCategorySelected === "Copywriting" ? 1 : 0.4)};

`

export const SCategoriesThemePurple = styled.p`
  font-size: 14px;
  font-weight: 600;
  line-height: 14px;
  white-space: nowrap;
`
export const BSButtonWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: flex-end;
  @media screen and (max-width: 495px) {
    width: 100%;
    justify-content: center;
  }
` 