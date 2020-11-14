import Typography from '@material-ui/core/Typography';

import Steps from 'components/steps';

const Home = () => {
  return (
    <>
      <Typography variant="h1" gutterBottom>
        Welcome to Ecological Earth
      </Typography>
      <Typography paragraph>
        This is your dashboard, where you can see all the activity regarding
        your carbon emissions. Follow the steps below relative to the month of
        October to become carbon neutral.
      </Typography>
      <Steps step={1} />
    </>
  );
};

Home.propTypes = {};

export default Home;
