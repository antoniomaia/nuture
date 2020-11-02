import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { useForm, Form } from 'components/form/useForm';
import Controls from 'components/form/controls';
import { useAppDispatch } from 'store';
import { register } from 'slices/auth';

const initialFormValues = {
  name: '',
  email: '',
  password: '',
};

const LoginForm = () => {
  const dispatch = useAppDispatch();

  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if ('email' in fieldValues) {
      temp.email = /\S+@\S+\.\S+/.test(fieldValues.email)
        ? ''
        : 'Email is not valid.';
    }
    if ('name' in fieldValues) {
      temp.name = fieldValues.name ? '' : 'This field is required.';
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

  const handleSubmit = e => {
    e.preventDefault();
    if (validate()) {
      dispatch(register(values));
    }
  };

  const redirect = useSelector(state => state.auth.isAuthenticated);
  if (redirect) {
    return <Redirect to={'/dashboard'} />;
  }

  return (
    <Form onSubmit={handleSubmit}>
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
            Register
          </Typography>
          <Controls.Input
            name="name"
            label="Company name"
            value={values.name}
            onChange={handleInputChange}
            error={errors.name}
          />
          <Controls.Input
            label="Work email"
            name="email"
            type="email"
            value={values.email}
            onChange={handleInputChange}
            error={errors.email}
          />
          <Controls.Input
            label="Password"
            name="password"
            type="password"
            value={values.password}
            onChange={handleInputChange}
            error={errors.password}
          />
          <div style={{ height: '1rem' }} />
          <Controls.Button type="submit" text="Create Account" />
          <Controls.Button
            href="/login"
            variant="text"
            text="Already have an account?"
            color="secondary"
          />
        </div>
      </Grid>
    </Form>
  );
};

export default LoginForm;
