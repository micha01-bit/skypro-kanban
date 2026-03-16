import { useState, useEffect, useRef, useContext } from "react";
import { PopUser } from "../popups/popUser/PopUser";
import {
  SHeader,
  SHeaderContainer,
  SHeaderBlock,
  SHeaderLogo,
  SHeaderLogoLight,
  SHeaderLogoDark,
  SHeaderNavigation,
  SButtonWrapper,
  SHeaderLink,
  SPopUserWrapper,
} from "./Header.styled";
import { Button } from "../Button/Button";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

export const Header = () => {
  const [isPopUserOpen, setIsPopUserOpen] = useState(false);
  const popUserRef = useRef(null);

  const { user } = useContext(AuthContext);
  const userName = user.name;

  const handleClick = () => {
    setIsPopUserOpen(!isPopUserOpen);
  };

  const handleOutsideClick = (event) => {
    if (popUserRef.current && !popUserRef.current.contains(event.target)) {
      setIsPopUserOpen(false); // закрыть PopUser, если клик вне его
    }
  };

  useEffect(() => {
    // добавить обработчик клика вне окна
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      // удалить обработчик клика вне окна при размонтировании компонента
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
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
          <SHeaderNavigation>
            <SButtonWrapper>
              <Link to="/card/add">
                <Button
                  href="#popNewCard"
                  width="178px"
                  type="primary"
                  text="Создать новую задачу"
                  disabled={false}
                ></Button>
              </Link>
            </SButtonWrapper>
            <SHeaderLink href="#user-set-target" onClick={handleClick}>
              {userName}
            </SHeaderLink>
            {isPopUserOpen && (
              <SPopUserWrapper ref={popUserRef}>
                <PopUser setIsPopUserOpen={setIsPopUserOpen} />
              </SPopUserWrapper>
            )}
          </SHeaderNavigation>
        </SHeaderBlock>
      </SHeaderContainer>
    </SHeader>
  );
};
