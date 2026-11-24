import { AuthForm } from "../components/AuthForm/AuthForm";


export const Login = ({ setToken }) => {
  return <AuthForm setToken={setToken} isSignUp={false} />;
}; 