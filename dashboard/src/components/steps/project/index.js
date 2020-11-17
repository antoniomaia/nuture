import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  media: {
    height: 240,
  },
}));

const projects = [
  {
    title: 'Sidrap Wind Farm Project',
    description:
      'the Sidrap Wind Farm project consists of 30 wind turbines with a total installed capacity of 75 MW.',
    price: '€10.00',
    image:
      '//cdn.shopify.com/s/files/1/0356/1596/5319/products/aerial_upc_stockimages-201.jpg?v=1585168290',
  },
  {
    title: 'Ceará Renewable Energy Project',
    description:
      'he Ceará project has switched the fuel used by five ceramic factories from illegal firewood to agricultural and industrial residues.',
    price: '€11.00',
    image:
      '//cdn.shopify.com/s/files/1/0356/1596/5319/products/ceara_coconut-husks_800x450_847461bd-6b12-49a5-b94e-f7bd419ca8db.jpg?v=1586259275',
  },
  {
    title: '22.5 MW Wind Power Project',
    description:
      'This project is dedicated to Corporate Social Responsibility initiatives to improve the quality of life in the projects vicinity.',
    price: '€10.00',
    image:
      '//cdn.shopify.com/s/files/1/0356/1596/5319/products/22.5_mw_wind_power_project_in_rajasthan_india0.jpg?v=1585169035',
  },
  {
    title: 'Safe Water Access',
    description:
      'CO2balance works with local groups and NGOs in Rwanda to deliver clean, safe water by identifying and rehabilitating broken-down boreholes.',
    price: '€12.00',
    image:
      '//cdn.shopify.com/s/files/1/0356/1596/5319/products/rwanda-borehole-3_800x450_c55e0d95-bd36-4fc2-8d1a-838bbedece83.jpg?v=1585167985',
  },
];

const Project = props => {
  const classes = useStyles();

  return (
    <Grid container spacing={3}>
      {projects.map(({ title, description, image, price }) => (
        <Grid item xs={6}>
          <Card className={classes.root} elevation={0}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={image}
                title={title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {title}
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  gutterBottom
                >
                  {description}
                </Typography>
                <Typography size="small" component="p" color="primary">
                  {price}
                </Typography>
              </CardContent>
            </CardActionArea>
            {/*<CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>*/}
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

Project.propTypes = {};

export default Project;
