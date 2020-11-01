import React from 'react';
import Grid from '@material-ui/core/grid';
import Typography from '@material-ui/core/Typography';
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
            background: '#f6f6f6',
            padding: '2rem',
            borderRadius: 8,
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
