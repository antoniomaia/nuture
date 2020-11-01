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
import { useForm, Form } from 'components/form/useForm';
import Controls from '../controls';

const initialFormValues = {
  email: '',
  password: '',
};

const LoginForm = () => {
  const validate = (fieldValues = values) => {
    const temp = {};
    temp.email = values.email ? '' : 'This field is required.';
    temp.password = values.password ? '' : 'This field is required.';

    setErrors({
      ...temp,
    });

    if (fieldValues === values) return Object.values(temp).every(x => x === '');
  };

  const {
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange,
    resetForm,
  } = useForm(initialFormValues, true, validate);

  const status = useSelector(state => state.auth.status);
  const isLogginIn = status === STATUS.LOADING;
  const dispatch = useAppDispatch();

  const onLogin = e => {
    e.preventDefault();
    if (validate()) {
      debugger
      dispatch(
        login({
          email: 'eve.holt@reqres.in',
          password: 'cityslicka',
        })
      );
      //resetForm();
    }
  };

  return (
    <Form onSubmit={onLogin}>
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
          </Typography>
          <Controls.Input
            name="email"
            label="Email"
            value={values.email}
            onChange={handleInputChange}
            error={errors.email}
          />
          <Controls.Input
            name="password"
            label="Password"
            type="password"
            value={values.password}
            onChange={handleInputChange}
            error={errors.password}
          />
          <div style={{ height: '1rem' }} />
          <Controls.Button
            type="submit"
            text={!isLogginIn ? 'Log in' : <CircularProgress size={30} />}
          />
          <Controls.Button
            href="/register"
            variant="default"
            text="No account? Create one"
            lowercase
          />
        </div>
      </Grid>
    </Form>
  );
};

export default LoginForm;
