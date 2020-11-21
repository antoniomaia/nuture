import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';

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
    backgroundColor: theme.palette.background.paper,
    borderRadius: 4,
    '&.Mui-disabled': {
      '&:hover': {
        cursor: 'inherit',
        boxShadow: 'none',
      },
    },
    '&:hover': {
      cursor: 'pointer',
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

function sum(obj) {
  return Object.keys(obj).reduce(
    (sum, key) => sum + parseFloat(obj[key] || 0),
    0
  );
}

const Steps = ({ onStepClick }) => {
  const classes = useStyles();
  const footprint = useSelector(state => state.neutralForm.values);
  const project = useSelector(state => state.neutralForm.project);

  const sumValue = sum(footprint);

  const isDisabled = step => {
    if (step === 1) {
      return false;
    } else if (step === 2 && sumValue > 0) {
      return false;
    } else if (step === 3 && sumValue > 0 && project) {
      return false;
    }
    return true;
  };

  return (
    <Grid container>
      <Grid item xs={12}>
        <List>
          {steps.map(({ step, title, description }) => {
            const disabled = isDisabled(step);
            return (
              <ListItem
                disabled={disabled}
                key={title}
                className={classes.listItem}
                onClick={disabled ? null : onStepClick(step)}
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
                  <IconButton
                    edge="end"
                    aria-label="forward"
                    disabled={disabled}
                  >
                    <ArrowForwardIosRoundedIcon
                      color={disabled ? 'background' : 'secondary'}
                    />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            );
          })}
        </List>
      </Grid>
    </Grid>
  );
};

Steps.propTypes = {};

export default Steps;
