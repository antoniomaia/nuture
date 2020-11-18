import Paper from '@material-ui/core/Paper';
import { Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

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

  summary: {
    color: theme.palette.text.secondary,
    marginBottom: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
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
    transition: 'all 0.2s',
    '&:hover': {
      borderColor: theme.palette.primary.main,
      color: theme.palette.primary.main,
      background: 'transparent',
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

const Purchase = ({
  sumValues,
  project,
  activeStep,
  steps,
  handleNext,
  handleBack,
}) => {
  const classes = useStyles();

  const costOffset =
    project && project.price
      ? parseFloat(parseFloat(project.price) * parseFloat(sumValues)).toFixed(2)
      : '0.00';

  return (
    <>
      <Paper className={`${classes.summary}`} elevation={0}>
        <ul
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            alignContent: 'center',
            listStyle: 'none',
            width: '100%',
            paddingBottom: '0.5rem',
          }}
        >
          <li style={{ width: '100%' }}>
            <Typography
              variant="h4"
              gutterBottom
              align="center"
              style={{
                background: '#263238',
                color: 'white',
                padding: '1.5rem 0.75rem',
                borderTopLeftRadius: 4,
                borderTopRightRadius: 4,
              }}
            >
              Summary
            </Typography>
          </li>
          <li>
            <Typography
              variant="h4"
              style={{ padding: '1rem' }}
              color="secondary"
            >
              Subscription Ecological Earth
            </Typography>
          </li>
          <li
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%',
              padding: '0 2rem',
              marginBottom: '1rem',
            }}
          >
            <Typography variant="h5">/ month</Typography>
            <Typography variant="h3" color="secondary">
              € 20.00
            </Typography>
          </li>
          <span
            style={{
              height: 1,
              background: 'lightgrey',
              width: '100%',
              margin: '0.75rem 0',
            }}
          />
          <li>
            <Typography
              variant="h4"
              style={{ padding: '1rem' }}
              color="secondary"
            >
              {(project && project.title) || '—'}
            </Typography>
          </li>
          <li
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%',
              padding: '0 2rem',
              marginBottom: '1rem',
            }}
          >
            <Typography variant="h5">Total ton CO2</Typography>
            <Typography variant="h3" color="secondary">
              {sumValues > 0 ? sumValues : '0.00'}
            </Typography>
          </li>
          <li
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%',
              padding: '0 2rem',
              marginBottom: '1rem',
            }}
          >
            <Typography variant="h5">Cost per ton CO2</Typography>
            <Typography variant="h2" color="secondary">
              {sumValues > 0 ? sumValues : '0.00'}
            </Typography>
          </li>
          <li
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%',
              padding: '0 2rem',
              marginBottom: '1rem',
            }}
          >
            <Typography variant="h5">Total offset</Typography>
            <Typography variant="h3" color="secondary">
              € {costOffset}
            </Typography>
          </li>
          <span
            style={{
              height: 1,
              background: 'lightgrey',
              width: '100%',
              margin: '0.75rem 0',
            }}
          />
          <li>
            <Typography
              variant="h1"
              style={{ padding: '1rem' }}
              color="secondary"
            >
              € {(20 + parseFloat(costOffset)).toFixed(2)}
            </Typography>
          </li>
        </ul>
      </Paper>
      <Paper elevation={0} className={classes.buttonWrapper}>
        <Button className={classes.button} onClick={handleNext}>
          {activeStep === steps.length - 1 ? 'Offset' : 'Next'}
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

Purchase.propTypes = {};

export default Purchase;
