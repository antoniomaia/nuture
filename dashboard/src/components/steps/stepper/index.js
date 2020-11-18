import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Stepper as MuiStepper } from '@material-ui/core';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import Measure from '../measure';
import Project from '../project';
import Offset from '../offset';
import Summary from '../summary';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  headline: {
    margin: '2rem 0 1.5rem 0',
    fontSize: '1.2rem',
    maxWidth: 700,
  },
}));

function getSteps() {
  return [
    'Calculate carbon emissions',
    'Choose offsetting project',
    'Become carbon neutral',
  ];
}

function getStepsDescription() {
  return [
    'Complete each step of the business emissions calculator that is relevant to your business, using monthly operational data.',
    'Choose offsetting project',
    'Become carbon neutral',
  ];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <Measure />;
    case 1:
      return <Project />;
    case 2:
      return <Offset />;
    default:
      return 'Unknown step';
  }
}

const Stepper = ({ step = 0 }) => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(step);
  const [skipped, setSkipped] = React.useState(new Set());
  const steps = getSteps();
  const stepsDescription = getStepsDescription();

  const isStepSkipped = step => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep(prevActiveStep => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <MuiStepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};

          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </MuiStepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography>All steps completed - you&apos;re finished</Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
            <Typography variant="h2" className={classes.headline}>
              {stepsDescription[activeStep]}
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={8}>
                {getStepContent(activeStep)}
              </Grid>
              <Grid item xs={4}>
                <Summary
                  steps={steps}
                  activeStep={activeStep}
                  handleBack={handleBack}
                  handleNext={handleNext}
                />
              </Grid>
            </Grid>
          </div>
        )}
      </div>
    </div>
  );
};

export default Stepper;
