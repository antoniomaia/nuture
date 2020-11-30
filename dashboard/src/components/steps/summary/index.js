import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';
import Purchase from './purchase';
import { activityType, carbonEmissions } from '@antoniomaia/ee-co2';

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
  list: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    alignContent: 'center',
    listStyle: 'none',
    width: '100%',
    paddingBottom: '0.5rem',
  },
  listLabel: {
    background: '#263238',
    color: 'white',
    padding: '0.75rem',
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
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

const sum = values => {
  const electricityEmissions = {
    type: activityType.electricity,
    spent: values.electricityAmount,
    renewableEnergy: values.electricityRenewableEnergy,
    countryCode: 'PT',
  };
  const heatingEmissions = {
    type: activityType.heating,
    diesel: values.heatDiesel,
    naturalGas: values.heatNaturalGas,
    countryCode: 'PT',
  };
  const transportationEmissions = {
    type: activityType.transportation,
    diesel: values.transportationDiesel,
    gasoline: values.transportationGasoline,
    countryCode: 'PT',
  };
  const waterEmissions = {
    type: activityType.water,
    waterUsage: values.waterUsage,
    countryCode: 'PT',
  };
  const paperEmissions = {
    type: activityType.paper,
    reams: values.paperReams,
    countryCode: 'PT',
  };

  const emissions = carbonEmissions([
    electricityEmissions,
    heatingEmissions,
    transportationEmissions,
    waterEmissions,
    paperEmissions,
  ]);

  return emissions;
};

const Summary = ({ activeStep, handleBack, handleNext, steps }) => {
  const classes = useStyles();
  const footprint = useSelector(state => state.neutralForm.values);
  const project = useSelector(state => state.neutralForm.project);
  const sumValues = sum(footprint);
  const isLastStep = activeStep === steps.length - 1;
  console.log('sumValues', sumValues);
  const costToOffset = (
    <li style={{ textAlign: 'center' }}>
      <div style={{ display: 'flex', alignItems: 'baseline' }}>
        <Typography variant="h5" color="secondary">
          €{' '}
        </Typography>
        <Typography
          color="secondary"
          variant="h4"
          style={{
            display: 'flex',
            flexDirection: 'row',
            paddingLeft: '0.5rem',
          }}
        >
          {project && project.price
            ? parseFloat(
                parseFloat(project.price) * parseFloat(sumValues)
              ).toFixed(2)
            : '0.00'}
        </Typography>
      </div>

      <Typography variant="subtitle2">cost to offset</Typography>
    </li>
  );

  if (isLastStep) {
    return (
      <Purchase
        sumValues={sumValues}
        project={project}
        activeStep={activeStep}
        steps={steps}
        handleNext={handleNext}
        handleBack={handleBack}
      />
    );
  }

  return (
    <>
      <Paper className={`${classes.summary}`} elevation={0}>
        <ul className={classes.list}>
          <li style={{ width: '100%' }}>
            <Typography
              variant="h6"
              gutterBottom
              align="center"
              className={classes.listLabel}
            >
              Carbon Emissions
            </Typography>
          </li>
          <li style={{ textAlign: 'center' }}>
            <Typography variant="h4" color="secondary">
              {sumValues > 0 ? sumValues : '0.00'}
            </Typography>
            <Typography variant="subtitle2">tonnes of CO2e</Typography>
          </li>
          <span
            style={{
              height: 1,
              background: 'lightgrey',
              width: '100%',
              margin: '0.75rem 0',
            }}
          />
          {costToOffset}
        </ul>
      </Paper>

      <Paper
        className={classes.summary}
        elevation={0}
        style={{
          display: 'flex',
        }}
      >
        <ul className={classes.list}>
          <li style={{ width: '100%' }}>
            <Typography
              variant="h6"
              align="center"
              className={classes.listLabel}
            >
              Project
            </Typography>
          </li>
          <li style={{ width: '100%' }}>
            <Typography
              variant="subtitle1"
              style={{ padding: '1rem', textAlign: 'center' }}
            >
              {(project && project.title) || '—'}
            </Typography>
          </li>
        </ul>
      </Paper>

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
