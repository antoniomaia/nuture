import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router-dom';

import Steps from 'components/steps';
import Stepper from 'components/steps/stepper';
import React from 'react';

const Home = () => {
  const history = useHistory();
  const search = history.location.search;
  const params = new URLSearchParams(search);
  const step = params.get('neutral');
  const [activeStep, setActiveStep] = React.useState(step);

  const handleClick = step => () => {
    history.push(`/dashboard?neutral=${step - 1}`);
    setActiveStep(step - 1);
  };

  if (step) {
    return (
      <Stepper
        activeStep={activeStep}
        setActiveStep={setActiveStep}
        step={parseInt(step, 10)}
      />
    );
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

Home.propTypes = {};

export default Home;
