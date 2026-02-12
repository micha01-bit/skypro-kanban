import { useNavigate } from 'react-router-dom';
import AuthForm from '../components/AuthForm/AuthForm.jsx';

const SignUpPage = () => {
  const navigate = useNavigate();

  const handleSuccess = () => {
    navigate('/sign-in', { replace: true });
  };

  return <AuthForm isSignUp={true} onSuccess={handleSuccess} />;
};

export default SignUpPage;
 
  
  
   
//  import SignUp from "../components/SignUp/SignUp.jsx";

// const SignUpPage = () => {
//   return <SignUp />;
// };

// export default SignUpPage;