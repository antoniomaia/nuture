import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { useAppDispatch } from 'store';
import { login } from 'slices/auth';
import { useSelector } from 'react-redux';
import { STATUS } from 'constants/status';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useForm, Form } from 'components/form/useForm';
import Controls from '../controls';
import { Content } from '../primitives';

const initialFormValues = {
  email: '',
  password: '',
};

const LoginForm = () => {
  const authStatus = useSelector(state => state.auth.status);
  const isLoading = authStatus === STATUS.LOADING;

  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if ('email' in fieldValues) {
      temp.email = /\S+@\S+\.\S+/.test(fieldValues.email)
        ? ''
        : 'Email is not valid.';
    }
    if ('password' in fieldValues) {
      temp.password = fieldValues.password ? '' : 'This field is required.';
    }

    setErrors({
      ...temp,
    });

    if (fieldValues === values) {
      return Object.values(temp).every(x => x === '');
    }
  };

  const {
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange,
    resetForm,
  } = useForm(initialFormValues, false, validate);

  const status = useSelector(state => state.auth.status);
  const isLogginIn = status === STATUS.LOADING;
  const dispatch = useAppDispatch();

  const onLogin = e => {
    e.preventDefault();
    if (validate()) {
      dispatch(login(values));
      //resetForm();
    }
  };

  return (
    <Form onSubmit={onLogin} disabled={isLoading}>
      <Grid container direction="column" justify="center" alignItems="center">
        <Content>
          <Typography
            align="center"
            variant="h2"
            component="h3"
            color="textPrimary"
            gutterBottom
          >
            Log in to your account
          </Typography>
          <br />
          <Controls.Input
            name="email"
            label="Email"
            type="email"
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
            disabled={isLoading}
            text={
              isLoading ? (
                <CircularProgress size={30} color="secondary" />
              ) : (
                'Log in'
              )
            }
          />
          <Controls.Button
            href="/register"
            variant="text"
            text="No account? Create one"
            color="secondary"
          />
        </Content>
      </Grid>
    </Form>
  );
};

export default LoginForm;
