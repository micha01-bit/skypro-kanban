import styled from "styled-components";  
 
export const AuthFormWrapper = styled.div`
  max-width: 100%;
  width: 100vw;
  min-height: 100vh;
  overflow: hidden;
  background-color: rgba(234, 238, 246, 1); 
`;   
 
export const AuthFormModal = styled.div`
 width: 100%;
 height: 100%;
 min-width: 320px;
 min-height: 100vh;
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
`;
 
export const AuthFormContainer = styled.div`
width: 368px; 
display: flex;
flex-direction: row;
justify-content: flex-start;
align-items: flex-start;
padding: 50px 60px 50px 60px;
box-sizing: border-box;
border: 0.7px solid rgba(212, 219, 229, 1);
border-radius: 10px;
box-shadow: 0px 4px 67px -12px rgba(0, 0, 0, 0.13);
background: rgba(255, 255, 255, 1);
`; 
 
export const AuthFormModalBlock = styled.div`
 width: 100%;
 display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;; 
`;
 
export const AuthFormTitle = styled.h2`
width: 100%; 
color: rgba(0, 0, 0, 1);
font-family: Roboto;
font-size: 20px;
font-weight: 700;
line-height: 150%;
text-align: center; 
margin: 0 0 20px; 
`; 
 
export const AFForm = styled.form`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 20px;
width: 100%; 
`; 
 
export const AFInputWrapper = styled.div`
display: flex;
flex-direction: column;
width: 100%;
gap: 7px;
`; 
 
export const AFFormGroup = styled.div`
width: 100%; 
color: rgba(148, 166, 190, 0.4);
font-family: Roboto;
font-size: 14px;
font-weight: 400;
line-height: 150%;
text-align: center; 
 
& a {
 color: rgba(148, 166, 190, 0.4); 
 text-decoration: underline;
}
`; 