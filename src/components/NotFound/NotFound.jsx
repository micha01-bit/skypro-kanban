import { SPageBackground, STitle, SMessage } from "./NotFound.styled";
import { SHeader, SHeaderContainer, SHeaderBlock, SHeaderLogo, SHeaderLogoLight, SHeaderLogoDark } from "../header/Header.styled";
import { Button } from "../button/Button";
import { Link, useNavigate } from "react-router-dom";
import { SButtonWrapper } from "./NotFound.styled";


export const NotFound = ({ token }) => {
  const navigate = useNavigate();

  const handleOpenMainPage = (e) => {
    e.preventDefault();
    if (!token) {
      navigate('/login');
    } else {
      navigate("/");
    }
  }

  return (
    <SPageBackground>
      <SHeader>
        <SHeaderContainer>
          <SHeaderBlock>
            <SHeaderLogo>
              <a href="" target="_self">
                <SHeaderLogoLight src="/images/logo.png" alt="logo" />
              </a>
            </SHeaderLogo>
            <SHeaderLogo>
              <a href="" target="_self">
                <SHeaderLogoDark src="/images/logo_dark.png" alt="logo" />
              </a>
            </SHeaderLogo>
          </SHeaderBlock>
        </SHeaderContainer>
      </SHeader >

      <STitle>404</STitle>
      <SMessage>Страница не найдена</SMessage>
      <SButtonWrapper style={{ marginTop: "50px" }}>
        <Link to="/card/add">
          <Button onClick={handleOpenMainPage} href="#popNewCard" width="178px" type="primary" text="На главную" disabled={false}>
          </Button>
        </Link>
      </SButtonWrapper>
    </SPageBackground>
  )
};
