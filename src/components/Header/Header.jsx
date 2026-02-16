import { useState } from "react"; 
import { useNavigate } from "react-router-dom";
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
import { useAuth } from "../../hooks/useAuth.js";

function Header() {
  const { user, clearAuth } = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false); 
  const navigate = useNavigate();

  const toggleModal = () => setIsModalOpen(!isModalOpen);
  const openLogoutModal = () => setIsLogoutModalOpen(true);
  const closeLogoutModal = () => setIsLogoutModalOpen(false);

  const handleLogout = () => {
    clearAuth();
    closeLogoutModal();
    setIsModalOpen(false); 
    navigate('/sign-in');
  }; 

  return (
    <>
      <HeaderWrapper>
        <HeaderContainer>
          <HeaderBlock>
            <a href="/" target="_self" rel="noopener noreferrer">
              <HeaderLogo src="/images/logo.png" alt="logo" />
            </a>
            <HeaderNav>
              <HeaderButton id="btnMainNew">
                <a href="#popNewCard">Создать новую задачу</a>
              </HeaderButton>
              <HeaderUser onClick={toggleModal}>
                {user ? user.name : "Гость"}
              </HeaderUser>
              {isModalOpen && (
                <HeaderPopUserSet id="user-set-target">
                  <p className="pop-user-set__name">{user?.name || "Неизвестно"}</p>
                  <p className="pop-user-set__mail">
                    {user?.email && user.email.includes("@")
                      ? user.email
                      : "Нет email"}
                  </p>
                  <ExitButton type="button" onClick={openLogoutModal}>
                    Выйти
                  </ExitButton>
                </HeaderPopUserSet>
              )}
            </HeaderNav>
          </HeaderBlock>
        </HeaderContainer>
      </HeaderWrapper> 

 {isLogoutModalOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
          }}
        >
          <div
            style={{
              backgroundColor: "#fff",
              padding: "20px",
              borderRadius: "8px",
              width: "370px",
              height: "180px",
              maxWidth: "80%",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
            }} 
            onClick={(e) => e.stopPropagation()}
          >
            <p
              style={{
                paddingTop: "30px",
                fontFamily: "Roboto",
                fontSize: "20px",
                fontWeight: "700",
                textAlign: "center",
              }}
            >
              Выйти из аккаунта?
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                marginTop: "20px",
              }}
            >
              <button
                onClick={handleLogout}
                style={{
                  padding: "8px 10px",
                  width: "153px",
                  height: "30px",
                  borderRadius: "4px",
                  backgroundColor: "#ffffff",
                  color: "#565eef",
                  border: "1px solid #565eef",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#33399b";
                  e.target.style.color = "#ffffff";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "#ffffff";
                  e.target.style.color = "#565eef";
                }}
              >
                Да, выйти
              </button>
              <button
                onClick={closeLogoutModal}
                style={{
                  padding: "8px 10px",
                  width: "153px",
                  height: "30px",
                  borderRadius: "4px",
                  backgroundColor: "#ffffff",
                  color: "#565eef",
                  border: "1px solid #565eef",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#33399b";
                  e.target.style.color = "#ffffff";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "#ffffff";
                  e.target.style.color = "#565eef";
                }}
              >
                Нет, остаться
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;     

      
 
  
   
// import { useState } from "react";
// import {
//   HeaderWrapper, 
//   HeaderContainer,
//   HeaderBlock,
//   HeaderLogo,
//   HeaderNav,
//   HeaderButton, 
//   ExitButton,
//   HeaderUser,
//   HeaderPopUserSet,
// } from "./Header.styled.js";
// import { useAuth } from "../../hooks/useAuth.js";

// function Header() {
//   const { user, clearAuth } = useAuth();
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

//   const toggleModal = () => setIsModalOpen(!isModalOpen);
//   const openLogoutModal = () => setIsLogoutModalOpen(true);
//   const closeLogoutModal = () => setIsLogoutModalOpen(false);

//   const handleLogout = () => {
//     clearAuth();
//     closeLogoutModal();
//   };

//   return (
//     <>
//       <HeaderWrapper>
//         <HeaderContainer>
//           <HeaderBlock>
//             <a href="" target="_self">
//               <HeaderLogo src="/images/logo.png" alt="logo" />
//             </a>
//             <HeaderNav>
//               <HeaderButton id="btnMainNew">
//                 <a href="#popNewCard">Создать новую задачу</a>
//               </HeaderButton>
//               <HeaderUser onClick={toggleModal}>
//                 {user ? user.name : "Гость"}
//               </HeaderUser>
//               {isModalOpen && (
//                 <HeaderPopUserSet id="user-set-target">
//                   <p className="pop-user-set__name">{user?.name || "Неизвестно"}</p>
//                   <p className="pop-user-set__mail">{user?.email || "Нет email"}</p>
//                   <ExitButton type="button" onClick={openLogoutModal}>
//                     Выйти
//                   </ExitButton>
//                 </HeaderPopUserSet>
//               )}
//             </HeaderNav>
//           </HeaderBlock>
//         </HeaderContainer>
//       </HeaderWrapper>

//       {isLogoutModalOpen && (
//         <div
//           style={{
//             position: "fixed",
//             top: 0,
//             left: 0,
//             width: "100vw",
//             height: "100vh",
//             backgroundColor: "rgba(0, 0, 0, 0.5)",
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             zIndex: 9999,
//           }}
//         >
//           <div
//             style={{
//               backgroundColor: "#fff",
//               padding: "20px",
//               borderRadius: "8px",
//               width: "370px",
//               height: "180px",
//               maxWidth: "80%",
//               textAlign: "center",
//               display: "flex",
//               flexDirection: "column",
//               justifyContent: "flex-start",
//             }}
//           >
//             <p
//               style={{
//                 paddingTop: "30px",
//                 fontFamily: "Roboto",
//                 fontSize: "20px",
//                 fontWeight: "700",
//                 textAlign: "center",
//               }}
//             >
//               Выйти из аккаунта?
//             </p>
//             <div
//               style={{
//                 display: "flex",
//                 justifyContent: "space-around",
//                 marginTop: "20px",
//               }}
//             >
//               <button
//                 onClick={handleLogout}
//                 style={{
//                   padding: "8px 10px",
//                   width: "153px",
//                   height: "30px",
//                   borderRadius: "4px",
//                   backgroundColor: "#ffffff",
//                   color: "#565eef",
//                   border: "1px solid #565eef",
//                   cursor: "pointer",
//                 }}
//                 onMouseEnter={(e) => {
//                   e.target.style.backgroundColor = "#33399b";
//                   e.target.style.color = "#ffffff";
//                 }}
//                 onMouseLeave={(e) => {
//                   e.target.style.backgroundColor = "#ffffff";
//                   e.target.style.color = "#565eef";
//                 }}
//               >
//                 Да, выйти
//               </button>
//               <button
//                 onClick={closeLogoutModal}
//                 style={{
//                   padding: "8px 10px",
//                   width: "153px",
//                   height: "30px",
//                   borderRadius: "4px",
//                   backgroundColor: "#ffffff",
//                   color: "#565eef",
//                   border: "1px solid #565eef",
//                   cursor: "pointer",
//                 }}
//                 onMouseEnter={(e) => {
//                   e.target.style.backgroundColor = "#33399b";
//                   e.target.style.color = "#ffffff";
//                 }}
//                 onMouseLeave={(e) => {
//                   e.target.style.backgroundColor = "#ffffff";
//                   e.target.style.color = "#565eef";
//                 }}
//               >
//                 Нет, остаться
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// export default Header;
 
  
   
// import { useState } from 'react'; 
// import {
//   HeaderWrapper, 
//   HeaderContainer,
//   HeaderBlock,
//   HeaderLogo,
//   HeaderNav,
//   HeaderButton, 
//   ExitButton,
//   HeaderUser,
//   HeaderPopUserSet,
// } from "./Header.styled.js";

// function Header() {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false); // новое состояние для окна выхода

//   const toggleModal = () => {
//     setIsModalOpen(!isModalOpen);
//   };

//   const openLogoutModal = () => {
//     setIsLogoutModalOpen(true);
//   };

//   const closeLogoutModal = () => {
//     setIsLogoutModalOpen(false);
//   };

//   const handleLogout = () => {
//     // Логика выхода (например, очистка токенов, редирект)
//     console.log("выход из аккаунта");
//     setIsLogoutModalOpen(false);
//     // Можно добавить редирект или другую логику
//   };

//   return (
//     <>
//       {/* Основной блок хедера */}
//       <HeaderWrapper>
//         <HeaderContainer>
//           <HeaderBlock>
//             {/* Логотипы */}
//             <a href="" target="_self">
//               <HeaderLogo src="/images/logo.png" alt="logo" />
//             </a>
//             <a href="" target="_self">
//               <HeaderLogo src="/images/logo_dark.png" alt="logo" />
//             </a>

//             {/* Навигация */}
//             <HeaderNav>
//               <HeaderButton id="btnMainNew">
//                 <a href="#popNewCard">Создать новую задачу</a>
//               </HeaderButton>
              
//               {/* Имя пользователя с обработчиком onClick */}
//               <HeaderUser
//                 onClick={(e) => {
//                   e.preventDefault(); // чтобы избежать перехода по ссылке
//                   toggleModal();
//                 }}
//               >
//                 Ivan Ivanov
//               </HeaderUser>

//               {/* Модальное окно, показывается по состоянию isModalOpen */}
//               {isModalOpen && (
//                 <HeaderPopUserSet id="user-set-target">
//            {/* <a href="">x</a> */}
//            <p className="pop-user-set__name">Ivan Ivanov</p>
//            <p className="pop-user-set__mail">ivan.ivanov@gmail.com</p>
//            <div className="pop-user-set__theme">
    
//            <p>Темная тема</p>
    
//            <input
//           type="checkbox"
//           className="checkbox"
//            name="checkbox"
//           />
//            </div>
//            <ExitButton
    
//            type="button"
     
//           onClick={openLogoutModal} // вызываем окно подтверждения выхода
//            >
//              Выйти
//            </ExitButton>         
//            </HeaderPopUserSet>
//               )}
//             </HeaderNav>
//           </HeaderBlock>
//         </HeaderContainer>
//       </HeaderWrapper>

//       {/* Блок подтверждения выхода из аккаунта (модальное окно) */}
//      {isLogoutModalOpen && (
//   <div
//     style={{
//       position: 'fixed',
//       top: 0,
//       left: 0,
//       width: '100vw',
//       height: '100vh',
//       backgroundColor: 'rgba(0, 0, 0, 0.5)', // затемнение
//       display: 'flex',
//       justifyContent: 'center',
//       alignItems: 'center',
//       zIndex: 9999,
//     }}
//   >
//     <div
//       style={{
//         backgroundColor: '#fff',
//         padding: '20px',
//         borderRadius: '8px',
//         width: '370px',
//         height: '180px',
//         maxWidth: '80%',
//         textAlign: 'center',
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'flex-start',
//       }}
//     >
//       <p style={{
//         paddingTop: '30px',
//         fontFamily: 'Roboto',
//         fontSize: '20px',
//         fontWeight: '700',
//         textAlign: 'center',
//       }}>Выйти из аккаунта?</p>
//       <div style={{
//         display: 'flex',
//         justifyContent: 'space-around',
//         marginTop: '20px',
//       }}>
//         <button
//           onClick={handleLogout}
//           style={{
//             padding: '8px 10px 8px 10px',
//             width: '153px',
//             height: '30px',
//             borderRadius: '4px',
//             backgroundColor: '#ffffff',
//             color: '#565eef',
//             border: '1px solid #565eef',
//             cursor: 'pointer',
//           }}
//           onMouseEnter={(e) => {
//             e.target.style.backgroundColor = '#33399b';
//             e.target.style.color = '#ffffff';
//           }}
//           onMouseLeave={(e) => {
//             e.target.style.backgroundColor = '#ffffff';
//             e.target.style.color = '#565eef';
//           }}
//         >
//           Да, выйти
//         </button>
//         <button
//           onClick={closeLogoutModal}
//           style={{
//             padding: '8px 10px 8px 10px',
//             width: '153px',
//             height: '30px',
//             borderRadius: '4px',
//             backgroundColor: '#ffffff',
//             color: '#565eef',
//             border: '1px solid #565eef',
//             cursor: 'pointer',
//           }}
//           onMouseEnter={(e) => {
//             e.target.style.backgroundColor = '#33399b';
//             e.target.style.color = '#ffffff';
//           }}
//           onMouseLeave={(e) => {
//             e.target.style.backgroundColor = '#ffffff';
//             e.target.style.color = '#565eef';
//           }}
//         >
//           Нет, остаться
//         </button>
//       </div>
//     </div>
//   </div>
// )}

//     </>
//   );
// }

// export default Header; 