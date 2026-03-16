import styled from "styled-components";


export const SContent = styled.main`
    margin-top: 70px;
    width: 100%;
    background-color: var(--bg-primary);
    flex-grow: 1;
`

export const SContainer = styled.div`
    max-width: 1260px;
    width: 100%;
    margin: 0 auto;
    padding: 0 30px;
    @media screen and (max-width: 495px) {
        width: 100%;
        padding: 0 16px;
  }
`

export const SBlock = styled.div`
    width: 100%;
    margin: 0 auto;
    padding: 25px 0 49px;
    @media screen and (max-width: 1200px) { padding: 40px 0 64px; }
`

export const SData = styled.div`
    width: 100%;
    display: flex;
    @media screen and (max-width: 1200px) { display: block; }
`