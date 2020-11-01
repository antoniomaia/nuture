import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

import { useForm, Form } from 'components/form/useForm';
import Controls from 'components/form/controls';

const initialFormValues = {
  companyName: '',
};

const LoginForm = () => {
  const validate = (fieldValues = values) => {
    const temp = {};
    temp.companyName = fieldValues.companyName ? '' : 'This field is required.';
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
  } = useForm(initialFormValues, false, validate);

  const handleSubmit = e => {
    e.preventDefault();
    if (validate()) {
      //employeeService.insertEmployee(values);
      //resetForm();
    }
  };

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
            name="companyName"
            label="Company name"
            value={values.companyName}
            onChange={handleInputChange}
            error={errors.companyName}
          />
          <TextField
            label="Economic sector"
            type="text"
            margin="normal"
            variant="outlined"
          />
          <TextField
            label="Work email"
            type="text"
            margin="normal"
            variant="outlined"
          />
          <TextField
            label="Number of full-time employees"
            type="text"
            margin="normal"
            variant="outlined"
          />
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
