 import { useNavigate } from 'react-router-dom';
import AuthForm from '../components/AuthForm/AuthForm.jsx';


const SignInPage = () => {
  const navigate = useNavigate();

  const handleSuccess = () => {
    navigate('/', { replace: true });
  };

  return <AuthForm isSignUp={false} onSuccess={handleSuccess} />;
};

export default SignInPage; 
 
  
  
    
//  import SignIn from "../components/SignIn/SignIn.jsx";

// const SignInPage = ({ setIsAuth }) => {
//   return <SignIn setIsAuth={setIsAuth} />;
// };

// export default SignInPage;