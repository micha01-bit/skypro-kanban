import { useState, useEffect, useRef, useContext } from "react";
import { PopUser } from "../popups/popUser/PopUser";
import { PopNewCard } from "../popups/popNewCard/PopNewCard";
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
  SPopUserWrapper
} from "./Header.styled";
import { Button } from "../Button/Button";
import { AuthContext } from "../../context/AuthContext";
import { ThemeContext } from "../../context/ThemeContext";

export const Header = () => {
  const { currentTheme } = useContext(ThemeContext);
  const { token, user } = useContext(AuthContext); // Получаем token и user из AuthContext

  const [isPopUserOpen, setIsPopUserOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isPopNewCardOpen, setIsPopNewCardOpen] = useState(false);

  const popUserRef = useRef(null);
  const headerLinkRef = useRef(null);

  const userName = user?.name || "Гость";

  const handleClick = () => {
    setIsPopUserOpen(!isPopUserOpen);
    setIsActive(!isActive);
  };

  const handleOutsideClick = (event) => {
    if (
      popUserRef.current &&
      !popUserRef.current.contains(event.target) &&
      headerLinkRef.current &&
      !headerLinkRef.current.contains(event.target)
    ) {
      setIsPopUserOpen(false);
      setIsActive(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <SHeader>
      <SHeaderContainer>
        <SHeaderBlock>
          <SHeaderLogo>
            <a href="/" target="_self">
              {currentTheme === 'light' ? (
                <SHeaderLogoLight src="/images/logo.png" alt="logo" />
              ) : (
                <SHeaderLogoDark src="/images/logo_dark.png" alt="logo" />
              )}
            </a>
          </SHeaderLogo>

          <SHeaderNavigation>
            <SButtonWrapper>
              <Button
                onClick={() => setIsPopNewCardOpen(true)}
                width="178px"
                type="primary"
                text="Создать новую задачу"
                disabled={!token} // Кнопка неактивна без токена
              />
            </SButtonWrapper>
            <SHeaderLink
              href="#user-set-target"
              onClick={handleClick}
              $isActive={isActive}
              ref={headerLinkRef}
            >
              {userName}
            </SHeaderLink>
            <SPopUserWrapper
              ref={popUserRef}
              $isActive={isActive}
            >
              <PopUser
                setIsPopUserOpen={setIsPopUserOpen}
                setIsActive={setIsActive}
              />
            </SPopUserWrapper>
          </SHeaderNavigation>
        </SHeaderBlock>
      </SHeaderContainer>
      {/* Модальное окно создания задачи */}
      {isPopNewCardOpen && (
        <PopNewCard onClose={() => setIsPopNewCardOpen(false)} />
      )}
    </SHeader>
  );
};