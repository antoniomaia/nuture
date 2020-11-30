import React from 'react';
import Typography from '@material-ui/core/Typography';
import { useHistory, withRouter } from 'react-router-dom';

import Steps from 'components/steps';
import Stepper from 'components/steps/stepper';

const Home = () => {
  const history = useHistory();
  const search = history.location.search;
  const params = new URLSearchParams(search);
  const step = params.get('neutral');
  const [activeStep, setActiveStep] = React.useState(step);

  const setStep = step => {
    const newStep = step === 'next' ? activeStep + 1 : activeStep - 1;
    history.push(`/dashboard?neutral=${newStep}`);
    setActiveStep(newStep);
  };

  const handleClick = step => () => {
    history.push(`/dashboard?neutral=${step - 1}`);
    setActiveStep(step - 1);
  };

  if (step) {
    return <Stepper activeStep={parseInt(activeStep, 10)} setStep={setStep} />;
  }

  return (
    <>
      <Typography variant="h3" gutterBottom>
        Welcome to Ecological Earth
      </Typography>
      <Typography paragraph>
        This is your dashboard, where you can see all the activity regarding
        your carbon emissions. Follow the steps below relative to the month of
        October to become carbon neutral.
      </Typography>
      <Steps onStepClick={handleClick} />
    </>
  );
};

export default withRouter(Home);
