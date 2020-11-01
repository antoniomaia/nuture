import { Redirect } from 'react-router-dom';
import LoginForm from 'components/form/login';
import Header from 'components/header';
import MainLayout from 'components/layout/main';

const Login = ({ login, isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <MainLayout>
      <Header />
      <LoginForm login={login} />
    </MainLayout>
  );
};

export default Login;
