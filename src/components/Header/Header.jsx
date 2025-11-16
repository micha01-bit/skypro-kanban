import { useState } from 'react'; 
import {
  HeaderWrapper,
  HeaderBlock,
  HeaderLogo,
  HeaderNav,
  HeaderButton, 
  ExitButton,
  HeaderUser,
  HeaderPopUserSet,
} from "./Header.styled.js";

function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <HeaderWrapper>
        <div className="container">
          <HeaderBlock>
            {/* Логотипы */}
            <div className="header__logo _show _light">
              <a href="" target="_self">
                <HeaderLogo src="../images/logo.png" alt="logo" />
              </a>
            </div>
            <div className="header__logo _dark">
              <a href="" target="_self">
                <HeaderLogo src="../images/logo_dark.png" alt="logo" />
              </a>
            </div>

            {/* Навигация */}
            <HeaderNav>
              <HeaderButton id="btnMainNew">
                <a href="#popNewCard">Создать новую задачу</a>
              </HeaderButton>
              
              {/* Имя пользователя с обработчиком onClick */}
              <HeaderUser
                onClick={(e) => {
                  e.preventDefault(); // чтобы избежать перехода по ссылке
                  toggleModal();
                }}
              >
                Ivan Ivanov
              </HeaderUser>

              {/* Модальное окно, показывается по состоянию isModalOpen */}
              {isModalOpen && (
                <HeaderPopUserSet id="user-set-target">
                  {/* <a href="">x</a> */}
                  <p className="pop-user-set__name">Ivan Ivanov</p>
                  <p className="pop-user-set__mail">ivan.ivanov@gmail.com</p>
                  <div className="pop-user-set__theme">
                    <p>Темная тема</p>
                    <input
                      type="checkbox"
                      className="checkbox"
                      name="checkbox"
                    />
                  </div>
                  <ExitButton
                    type="button"
                    onClick={toggleModal} // Закрываем окно при клике
                  >
                    Выйти
                  </ExitButton>
                </HeaderPopUserSet>
              )}
            </HeaderNav>
          </HeaderBlock>
        </div>
      </HeaderWrapper>
    </>
  );
}

export default Header;