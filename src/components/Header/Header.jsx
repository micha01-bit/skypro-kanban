import { useState } from 'react';

function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header__block">
            {/* Логотипы */}
            <div className="header__logo _show _light">
              <a href="" target="_self">
                <img src="../images/logo.png" alt="logo" />
              </a>
            </div>
            <div className="header__logo _dark">
              <a href="" target="_self">
                <img src="../images/logo_dark.png" alt="logo" />
              </a>
            </div>

            {/* Навигация */}
            <nav className="header__nav">
              <button className="header__btn-main-new _hover01" id="btnMainNew">
                <a href="#popNewCard">Создать новую задачу</a>
              </button>
              
              {/* Имя пользователя с обработчиком onClick */}
              <a
                href="#user-set-target"
                className="header__user _hover02"
                onClick={(e) => {
                  e.preventDefault(); // чтобы избежать перехода по ссылке
                  toggleModal();
                }}
              >
                Ivan Ivanov
              </a>

              {/* Модальное окно, показывается по состоянию isModalOpen */}
              {isModalOpen && (
                <div className="header__pop-user-set pop-user-set" id="user-set-target">
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
                  <button
                    type="button"
                    className="_hover03"
                    onClick={toggleModal} // Закрываем окно при клике
                  >
                    Выйти
                  </button>
                </div>
              )}
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;