import { SPageBackground, SWrapper, STitle, SForm, SInputWrapper, SFooterWrapper, SFooterText, SFooterLink, SErrorMessageWrapper, SErrorMessageText } from "./AuthForm.styled";
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";


export const AuthForm = ({ isSignUp }) => {
  const navigate = useNavigate();

  const {
    handleChange, handleLogin,
    formData, errors,
    error, isValid
  } = useContext(AuthContext);


  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await handleLogin(isSignUp);
    if (success) {
      navigate("/");
    }
  };


  return (
    <SPageBackground>
      <SWrapper style={{ height: "329px" }}>
        <STitle>{isSignUp ? "Регистрация" : "Вход"}</STitle>
        <SForm id="form" onSubmit={handleSubmit}>

          <SInputWrapper>
            {isSignUp && (<Input error={errors.name} type="text" placeholder="Имя" name="name" value={formData.name} onChange={handleChange} />)}
            <Input error={errors.login} type="text" placeholder="Эл. почта" name="login" value={formData.login} onChange={handleChange} />
            <Input error={errors.password} type="password" placeholder="Пароль" name="password" value={formData.password} onChange={handleChange} />
          </SInputWrapper>

          <SErrorMessageWrapper><SErrorMessageText>{error}</SErrorMessageText></SErrorMessageWrapper>

          <Button text={isSignUp ? "Зарегистрироваться" : "Войти"} type="primary" disabled={!isValid} />

          {!isSignUp && (
            <SFooterWrapper>
              <SFooterText>Нужно зарегистрироваться?</SFooterText>
              <SFooterLink to="/registration">
                Регистрируйтесь здесь
              </SFooterLink>
            </SFooterWrapper>
          )}

          {isSignUp && (
            <SFooterWrapper>
              <SFooterText>
                Уже есть аккаунт? <SFooterLink to="/login">Войдите здесь</SFooterLink>
              </SFooterText>
            </SFooterWrapper>
          )}

        </SForm>
      </SWrapper>
    </SPageBackground>
  )
}
