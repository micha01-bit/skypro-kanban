import { Link, useNavigate } from "react-router-dom";
import BaseButton from "../AuthButton/AuthButton.jsx";
import BaseInput from "../AuthInput/AuthInput.jsx";
import {
  AuthFormWrapper,
  AuthFormModal,
  AuthFormContainer,
  AuthFormModalBlock,
  AuthFormTitle,
  AFForm,
  AFInputWrapper,
  AFFormGroup,
} from "./AuthForm.styled.js";
import { useAuth } from "../../hooks/useAuth.js";

const AuthForm = ({ isSignUp }) => {
  const { login, register, isLoading, error } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    try {
      if (isSignUp) {
        await register(data);
      } else {
        await login(data);
      }
      if (!error) {
        navigate("/");
      }
    } catch (err) {
      // Ошибка уже установлена в хуке useAuth
    }
  };

  return (
    <AuthFormWrapper>
      <AuthFormModal>
        <AuthFormContainer>
          <AuthFormModalBlock>
            <AuthFormTitle>{isSignUp ? "Регистрация" : "Вход"}</AuthFormTitle> 
                        <AFForm onSubmit={handleSubmit}>
              {isSignUp && (
                <BaseInput
                  tag="input"
                  name="name"
                  placeholder="Имя"
                />
              )}
              <BaseInput
                tag="input"
                name="login"
                placeholder="Эл. почта"
              />
              <BaseInput
                tag="input"
                type="password"
                name="password"
                placeholder="Пароль"
              />
              {error && <p style={{ color: 'red' }}>{error}</p>}
              <BaseButton
                type="secondary"
                text={isSignUp ? 'Зарегистрироваться' : 'Войти'}
                disabled={isLoading}
              />
            </AFForm>
            {!isSignUp && (
              <AFFormGroup>
                <p>Нужно зарегистрироваться?</p>
                <Link to="/sign-up">Регистрируйтесь здесь</Link>
              </AFFormGroup>
            )}
            {isSignUp && (
              <AFFormGroup>
                <p>
                  Уже есть аккаунт? <Link to="/sign-in">Войдите здесь</Link>
                </p>
              </AFFormGroup>
            )}
          </AuthFormModalBlock>
        </AuthFormContainer>
      </AuthFormModal>
    </AuthFormWrapper>
  );
};

export default AuthForm;
 
 
   
   
// import { Link, useNavigate } from "react-router-dom";
// import BaseButton from "../AuthButton/AuthButton.jsx";
// import BaseInput from "../AuthInput/AuthInput.jsx"; 
// import { AuthFormWrapper, 
//   AuthFormModal,  
//   AuthFormContainer,  
//   AuthFormModalBlock, 
//   AuthFormTitle, 
//   AFForm, AFInputWrapper, 
//   AFFormGroup
//  } from "./AuthForm.styled.js"; 
// import { useAuth } from '../../hooks/useAuth.js';
  
// const AuthForm = ({ isSignUp }) => {
//   const { login, register, isLoading, error } = useAuth();
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formData = new FormData(e.target);
//     const data = Object.fromEntries(formData);

//     if (isSignUp) {
//       await register(data);
//     } else {
//       await login(data);
//     }

//     if (!error) {
//       navigate('/');
//     }
//   };

//   return (
//     <AuthFormWrapper>
//       <AuthFormModal>
//         <AuthFormContainer>
//           <AuthFormModalBlock>
//             <AuthFormTitle>{isSignUp ? 'Регистрация' : 'Вход'}</AuthFormTitle>
//             <AFForm onSubmit={handleSubmit}>
//               {isSignUp && (
//                 <BaseInput
//                   tag="input"
//                   name="name"
//                   placeholder="Имя"
//                 />
//               )}
//               <BaseInput
//                 tag="input"
//                 name="login"
//                 placeholder="Эл. почта"
//               />
//               <BaseInput
//                 tag="input"
//                 type="password"
//                 name="password"
//                 placeholder="Пароль"
//               />
//               {error && <p style={{ color: 'red' }}>{error}</p>}
//               <BaseButton
//                 type="secondary"
//                 text={isSignUp ? 'Зарегистрироваться' : 'Войти'}
//                 disabled={isLoading}
//               />
// {/* 
// // const AuthForm = ({ isSignUp, setIsAuth }) => {
// //   const navigate = useNavigate();
// //   const handleLogin = (e) => {
// //     e.preventDefault();
// //     setIsAuth(true);
// //     navigate("/");
// //   };
// //   return ( 
// //     <AuthFormWrapper>
// //       <AuthFormModal>
// //         <AuthFormContainer>
// // 				<AuthFormModalBlock>
// // 						<AuthFormTitle>{isSignUp ? "Регистрация" : "Вход"}</AuthFormTitle> 
// //           <AFForm id="form" action="#">
// //             <AFInputWrapper>
// //               {isSignUp && (
// //                 <BaseInput
// //                   tag="input"
// //                   className="auth-input"
// //                   type="text"
// //                   name="name"
// //                   id="formname"
// //                   placeholder="Имя"
// //                 />
// //               )}
// //               <BaseInput
// //                 tag="input"
// //                 className="auth-input"
// //                 type="text"
// //                 name="login"
// //                 id="formlogin"
// //                 placeholder="Эл. почта"
// //               />
// //               <BaseInput
// //                 tag="input"
// //                 type="password"
// //                 name="password"
// //                 id="formpassword"
// //                 placeholder="Пароль"
// //               />
// //             </AFInputWrapper>

// //             <BaseButton
// //               onClick={handleLogin}
// //               type="secondary"
// //               fullWidth={true}
// //               className="button-enter"
// //               text={isSignUp ? "Зарегистрироваться" : "Войти"}
// //             /> */}

//             {!isSignUp && (
//               <AFFormGroup>
//                 <p>Нужно зарегистрироваться?</p>
//                 <Link to="/sign-up">Регистрируйтесь здесь</Link>
//               </AFFormGroup>
//             )}
//             {isSignUp && (
//               <AFFormGroup>
//                 <p>
//                   Уже есть аккаунт? <Link to="/sign-in">Войдите здесь</Link>
//                 </p>
//               </AFFormGroup>
//             )}
//           </AFForm> 
//           </AuthFormModalBlock>
//         </AuthFormContainer> 
//         </AuthFormModal>
//     </AuthFormWrapper>    
//   );
// };

// export default AuthForm; 