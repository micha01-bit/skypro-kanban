import AuthForm from "../AuthForm/AuthForm.jsx";

const SignIn = () => {
  // useAuth уже управляет состоянием авторизации
  return <AuthForm isSignUp={false} />;
};

export default SignIn;
 
 
  
   
// import AuthForm from "../AuthForm/AuthForm.jsx";

// const SignIn = ({ setIsAuth }) => {
//   return <AuthForm setIsAuth={setIsAuth} isSignUp={false} />;
// };

// export default SignIn;