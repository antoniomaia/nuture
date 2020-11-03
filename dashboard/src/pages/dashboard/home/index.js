import Typography from '@material-ui/core/Typography';

const Home = () => {
  return (
    <div>
      <Typography variant="h1" gutterBottom>
        your carbon neutral footprint
      </Typography>
      <Typography paragraph>
        start by calculating the carbon emissions for the month of october
      </Typography>
    </div>
  );
};

Home.propTypes = {};

export default Home;
