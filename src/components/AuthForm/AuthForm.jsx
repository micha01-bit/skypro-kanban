import { useState } from 'react';
import BaseInput from '../AuthInput/AuthInput.jsx';
import BaseButton from '../AuthButton/AuthButton.jsx';
import { useAuth } from '../../hooks/useAuth.js';
import { Link } from 'react-router-dom';
import {
  AuthFormWrapper,
  AuthFormModal,
  AuthFormContainer,
  AuthFormModalBlock,
  AuthFormTitle,
  AFForm,
  AFInputWrapper,
  AFFormGroup,
} from './AuthForm.styled.js';


const AuthForm = ({ isSignUp, onSuccess }) => {
  const { login, register, error: authError, isLoading } = useAuth();


  const [formData, setFormData] = useState({
    name: '',
    login: '',
    password: '',
  });
  const [errors, setErrors] = useState({}); 
    const validate = () => {
    const newErrors = {};
    
    if (isSignUp && !formData.name.trim()) {
      newErrors.name = 'Имя обязательно';
    }
    
    if (!formData.login.trim()) {
      newErrors.login = 'Email обязателен';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.login)) {
      newErrors.login = 'Некорректный email';
    }
    
    if (!formData.password) {
      newErrors.password = 'Пароль обязателен';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Пароль должен быть не менее 6 символов';
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      if (isSignUp) {
        await register(formData);
      } else {
        await login(formData);
      }
      onSuccess?.(); // вызов callback при успехе
    } catch (err) {
      // Ошибки из useAuth уже попадают в authError
    }
  };

  return (
    <AuthFormWrapper>
      <AuthFormModal>
        <AuthFormContainer>
          <AuthFormModalBlock>
            <AuthFormTitle>{isSignUp ? 'Регистрация' : 'Вход'}</AuthFormTitle>
            <AFForm onSubmit={handleSubmit}>
              <AFInputWrapper>
                {isSignUp && (
                  <BaseInput
                    tag="input"
                    name="name"
                    placeholder="Имя"
                    value={formData.name}
                    onChange={handleChange}
                    error={errors.name}
                  />
                )}
                <BaseInput
                  tag="input"
                  name="login"
                  placeholder="Эл. почта"
                  value={formData.login}
                  onChange={handleChange}
                  error={errors.login}
                />
                <BaseInput
                  tag="input"
                  type="password"
                  name="password"
                  placeholder="Пароль"
                  value={formData.password}
                  onChange={handleChange}
                  error={errors.password}
                />
              </AFInputWrapper>

              {authError && (
                <p style={{ color: 'red', marginTop: '8px' }}>
                  {authError}
                </p>
              )}

              <BaseButton
                onClick={handleSubmit}
                type="secondary"
                text={isSignUp ? 'Зарегистрироваться' : 'Войти'}
                disabled={isLoading}
              />

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
            </AFForm>
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

// const AuthForm = ({ isSignUp, setIsAuth }) => {
//   const navigate = useNavigate();
//   const handleLogin = (e) => {
//     e.preventDefault();
//     setIsAuth(true);
//     navigate("/");
//   };
//   return ( 
//     <AuthFormWrapper>
//       <AuthFormModal>
//         <AuthFormContainer>
// 				<AuthFormModalBlock>
// 						<AuthFormTitle>{isSignUp ? "Регистрация" : "Вход"}</AuthFormTitle> 
//           <AFForm id="form" action="#">
//             <AFInputWrapper>
//               {isSignUp && (
//                 <BaseInput
//                   tag="input"
//                   className="auth-input"
//                   type="text"
//                   name="name"
//                   id="formname"
//                   placeholder="Имя"
//                 />
//               )}
//               <BaseInput
//                 tag="input"
//                 className="auth-input"
//                 type="text"
//                 name="login"
//                 id="formlogin"
//                 placeholder="Эл. почта"
//               />
//               <BaseInput
//                 tag="input"
//                 type="password"
//                 name="password"
//                 id="formpassword"
//                 placeholder="Пароль"
//               />
//             </AFInputWrapper>

//             <BaseButton
//               onClick={handleLogin}
//               type="secondary"
//               fullWidth={true}
//               className="button-enter"
//               text={isSignUp ? "Зарегистрироваться" : "Войти"}
//             />

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