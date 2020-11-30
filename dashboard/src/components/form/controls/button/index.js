import MuiButton from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(0.5),
  },
  label: {
    textTransform: 'none',
  },
}));

const Button = ({ text, size, color, variant, onClick, ...other }) => {
  const classes = useStyles();

  return (
    <MuiButton
      variant={variant || 'contained'}
      size={size || 'large'}
      color={color || 'primary'}
      onClick={onClick}
      {...other}
      classes={{
        root: classes.root,
        label: variant === 'text' ? classes.label : '',
      }}
    >
      {text}
    </MuiButton>
  );
};

export default Button;
