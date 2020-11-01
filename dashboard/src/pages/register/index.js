import Header from 'components/header';
import RegisterForm from 'components/form/register';
import MainLayout from 'components/layout/main';

const Register = () => {
  return (
    <MainLayout>
      <Header />
      <RegisterForm />
    </MainLayout>
  );
};

Register.propTypes = {};

export default Register;
