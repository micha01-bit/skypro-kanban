import { SLoaderWrapper, SLoader, SLoaderText } from "./Loader.styled";


export const Loader = () => {
  return (
    <SLoaderWrapper>
      <SLoader id="loader">
        <SLoaderText>Данные загружаются</SLoaderText>
      </SLoader>
    </SLoaderWrapper>
  )
}