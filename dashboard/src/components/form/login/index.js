import React from 'react';
import Grid from '@material-ui/core/grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useAppDispatch } from 'store';
import { login } from 'slices/auth';
import { useSelector } from 'react-redux';
import { STATUS } from 'constants/status';
import CircularProgress from '@material-ui/core/CircularProgress';

const LoginForm = () => {
  const status = useSelector(state => state.auth.status);
  const isLogginIn = status === STATUS.LOADING;
  const dispatch = useAppDispatch();

  const onLogin = e => {
    e.preventDefault();
    dispatch(
      login({
        email: 'eve.holt@reqres.in',
        password: 'cityslicka',
      })
    );
  };

  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          minWidth: 200,
          maxWidth: 300,
          width: '100%',
        }}
      >
        <Typography align="center" variant="h4" gutterBottom>
          Login
        </Typography>{' '}
        <TextField
          label="Email"
          type="email"
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="Password"
          type="password"
          margin="normal"
          variant="outlined"
        />
        <div style={{ height: '1rem' }} />
        <Button
          color="primary"
          variant="contained"
          size="large"
          onClick={onLogin}
          disabled={isLogginIn}
        >
          {!isLogginIn ? 'Log in' : <CircularProgress size={30} />}
        </Button>
        <div style={{ height: '1rem' }} />
        <Button href="/register" size="large">
          No account? Create one
        </Button>
      </div>
    </Grid>
  );
};

export default LoginForm;
