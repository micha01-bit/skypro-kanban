import { useState } from 'react'; 
import {
  HeaderWrapper, 
  HeaderContainer,
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
        <HeaderContainer>
          <HeaderBlock>
            {/* Логотипы */}
            
              <a href="" target="_self">
                <HeaderLogo src="/images/logo.png" alt="logo" />
              </a>
            
            
              <a href="" target="_self">
                <HeaderLogo src="/images/logo_dark.png" alt="logo" />
              </a>
            

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
        </HeaderContainer>
      </HeaderWrapper>
    </>
  );
}

export default Header; 
  
 
{/* <div className='header_logo _show _light'></div> */}  
{/* <div className="header__logo _dark"></div> */}