import { useEffect, useState } from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';

export const useStyles = makeStyles(theme => ({
  paper: {
    color: theme.palette.text.secondary,
    marginBottom: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '1rem',
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
  loading: {
    backgroundColor: 'rgba(0,0,0,0.1)',
    color: 'rgba(0,0,0,0.1)',
  },
}));

function sum(obj) {
  return Object.keys(obj).reduce(
    (sum, key) => sum + parseFloat(obj[key] || 0),
    0
  );
}

const Summary = ({ activeStep, handleBack, handleNext, steps }) => {
  const classes = useStyles();
  const footprint = useSelector(state => state.neutralForm);
  const sumValues = sum(footprint);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 350);

    return () => clearTimeout(timeout);
  }, [sumValues]);

  return (
    <>
      <Typography variant="h4" gutterBottom align="center">
        Carbon Emissions
      </Typography>
      <Paper
        className={`${classes.paper} ${loading && classes.loading}`}
        elevation={0}
      >
        {!loading && (
          <div
            style={{
              display: 'flex',
              alignItems: 'baseline',
            }}
          >
            <Typography
              variant="h2"
              style={{
                display: 'flex',
                alignItems: 'center',
                alignContent: 'center',
                paddingRight: '0.25rem',
              }}
            >
              {sumValues}
            </Typography>
            <Typography variant="h5">tCO2e</Typography>
          </div>
        )}
        {loading && <CircularProgress />}
      </Paper>
      <Typography variant="h6" gutterBottom align="center">
        Month
      </Typography>
      <Paper className={classes.paper} elevation={0}>
        <Typography variant="h5">October</Typography>
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
