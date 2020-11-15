import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Typography } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  paper: {
    color: theme.palette.text.secondary,
    marginBottom: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2rem 0',
  },
  buttonWrapper: {
    textAlign: 'center',
  },
  button: {
    width: '100%',
    padding: '1.25rem 0.5rem',
    color: theme.palette.background.dark,
    border: `1px solid ${theme.palette.background.dark}`,
    fontSize: '1.2rem',
    //background: '#f6f6f6',
    transition: 'all 0.2s',
    '&:hover': {
      background: theme.palette.primary.main,
      color: 'white',
    },
  },
  buttonLabel: {
    marginTop: '2rem',
    padding: '1rem',
    fontSize: '0.875rem',
    color: theme.palette.text.secondary,
  },
  back: {
    width: '100%',
    padding: '1.25rem 0.5rem',
    color: theme.palette.background.dark,
    //border: `1px solid ${theme.palette.background.dark}`,
    fontSize: '1.2rem',
    background: '#f6f6f6',
    transition: 'all 0.2s',
    '&:hover': {
      color: theme.palette.text.primary,
      background: '#f6f6f6',
    },
  },
}));

const Summary = ({ activeStep, handleBack, handleNext, steps }) => {
  const classes = useStyles();
  return (
    <>
      <Paper className={classes.paper} elevation={0}>
        <Typography variant="h4" gutterBottom>
          October
        </Typography>
        <Typography variant="h1">0</Typography>
        <Typography variant="subtitle2">tCO2</Typography>
      </Paper>
      <Typography className={classes.buttonLabel}>
        Complete each step of the business emissions calculator that is relevant
        to your business, using monthly operational data.
      </Typography>
      <Paper elevation={0} className={classes.buttonWrapper}>
        <Button className={classes.button} onClick={handleNext}>
          {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
        </Button>
      </Paper>
      {activeStep !== 0 && (
        <Paper elevation={0} className={classes.buttonWrapper}>
          <Button className={classes.back} onClick={handleBack}>
            back
          </Button>
        </Paper>
      )}
    </>
  );
};

Summary.propTypes = {};

export default Summary;
