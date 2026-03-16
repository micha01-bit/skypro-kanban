import { AuthForm } from "../components/authForm/AuthForm";


export const Login = ({ setToken }) => {
  return <AuthForm setToken={setToken} isSignUp={false} />;
};