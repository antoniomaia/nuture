import { Redirect } from 'react-router-dom';
import LoginForm from '../../components/form/login';
import Header from '../../components/header';

const Login = ({ login, isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <div>
      <Header />
      <LoginForm login={login} />
    </div>
  );
};

export default Login;
