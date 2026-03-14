import { SCardContainer, SLeft, SRight, SSceleton } from "./Loader.styled";


export const Loader = () => {
  return (
    <SCardContainer>
      <SLeft>
        <SSceleton $width="82px" $height="20px" $radius="18px" $marginbottom="15px" />
        <SSceleton $width="113px" $height="13px" $radius="0" $marginbottom="35px" />
        <SSceleton $width="58px" $height="13px" $radius="0" $marginbottom="0" />
      </SLeft>
      <SRight>
        <SSceleton $width="18px" $height="4px" $radius="0" $marginbottom="0" />
      </SRight>
    </SCardContainer>
  )
}; 