import Header from 'components/header';
import RegisterForm from 'components/form/register';
import MainLayout from 'components/layout/main';
import Typography from '@material-ui/core/Typography';

import { Container } from './primitives';

const Register = () => {
  return (
    <MainLayout>
      <Header />
      <Container>
        <Typography variant="h1" component="h3" color="textPrimary" gutterBottom>
          Sign up and go carbon neutral today
        </Typography>
        <Typography variant="subtitle1" component="p" color="textPrimary">
          Be part of a growing group of early adopters helping change the way
          businesses operate.
        </Typography>
      </Container>

      <RegisterForm />
    </MainLayout>
  );
};

Register.propTypes = {};

export default Register;
