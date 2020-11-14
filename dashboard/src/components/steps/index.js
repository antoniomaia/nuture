import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';
import { makeStyles } from '@material-ui/core/styles';

const steps = [
  {
    step: 1,
    title: 'Calculate carbon emissions',
    description: 'Include the relevant data to allow our calculations.',
  },
  {
    step: 2,
    title: 'Choose a offsetting project',
    description: 'Pick one of the certified projects available.',
  },
  {
    step: 3,
    title: 'Become carbon neutral',
    description: 'Make the commitment to become carbon neutral and share.',
  },
];

const useStyles = makeStyles(theme => ({
  listItem: {
    margin: '1.5rem 0',
    padding: '1.5rem 1rem',
    //border: '1px solid #DFE0EB',
    backgroundColor: theme.palette.background.paper,
    borderRadius: 4,
    '&:hover': {
      cursor: 'pointer',
      //border: 'none',
      boxShadow: '0 0 1px 0 rgba(0,0,0,0.31), 0 3px 4px -2px rgba(0,0,0,0.25)',
    },
  },
  listAvatar: {
    padding: '0 1.5rem 0 1rem',
  },
  avatar: {
    backgroundColor: theme.palette.text.primary,
  },
}));

const Steps = () => {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={12}>
        <List>
          {steps.map(({ step, title, description }) => (
            <ListItem
              className={classes.listItem}
              onClick={() => console.log(step)}
            >
              <ListItemAvatar className={classes.listAvatar}>
                <Avatar className={classes.avatar}>{step}</Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={title}
                primaryTypographyProps={{ variant: 'h4' }}
                secondary={description}
              />
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="forward">
                  <ArrowForwardIosRoundedIcon color="secondary" />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </Grid>
    </Grid>
  );
};

Steps.propTypes = {};

export default Steps;
