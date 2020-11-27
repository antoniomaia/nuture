import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { Link } from 'react-router-dom';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';
import {
  businessItems,
  administrationItems,
  otherItems,
} from 'constants/sidebar';
import { useAppDispatch } from 'store';
import { logout } from 'slices/auth';
import { makeStyles } from '@material-ui/core/styles';
import { useLocation } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  drawer: {
    [theme.breakpoints.up('sm')]: {
      flexShrink: 0,
    },
  },
  listItem: {
    borderLeft: '4px solid transparent',
    padding: '0.5rem 1.5rem',
    '& svg': {
      opacity: 0.8,
    },
    '&.Mui-selected': {
      borderLeft: `4px solid ${theme.palette.primary.main}`,
      color: theme.palette.primary.main,
      background: 'transparent',
      '& svg': {
        opacity: 1,
        color: theme.palette.primary.main,
      },
      '&:hover': {
        background: 'transparent',
      },
    },
    '&:hover': {
      borderLeft: `4px solid ${theme.palette.primary.main}`,
      background: 'transparent',
      color: theme.palette.primary.main,
      '& svg': {
        color: theme.palette.primary.main,
      },
    },
  },
  listItemIcon: {
    minWidth: 35,
  },
  listItemText: {
    maxWidth: 'fit-content',
    marginRight: '11px',
  },
  text: {
    '& span, & svg': {
      fontSize: '1rem',
    },
  },
}));

const Sidebar = () => {
  const classes = useStyles();
  const { pathname } = useLocation();

  const dispatch = useAppDispatch();
  const onLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      <List
        aria-labelledby="business-list-subheader"
        subheader={
          <ListSubheader component="div" id="business-list-subheader">
            Business
          </ListSubheader>
        }
      >
        {businessItems.map(({ text, href, icon, enabled }) => (
          <ListItem
            button
            key={text}
            component={Link}
            to={href}
            className={classes.listItem}
            selected={pathname === href}
            disabled={!enabled}
          >
            <ListItemIcon className={classes.listItemIcon}>{icon}</ListItemIcon>
            <ListItemText primary={text} className={classes.text} />
          </ListItem>
        ))}
      </List>
      <List
        aria-labelledby="settings-list-subheader"
        subheader={
          <ListSubheader component="div" id="settings-list-subheader">
            Administration
          </ListSubheader>
        }
      >
        {administrationItems.map(({ text, href, icon, enabled }) => (
          <ListItem
            button
            key={text}
            component={Link}
            to={href}
            className={classes.listItem}
            disabled={!enabled}
          >
            <ListItemIcon className={classes.listItemIcon}>{icon}</ListItemIcon>
            <ListItemText primary={text} className={classes.text} />
          </ListItem>
        ))}
      </List>

      <List
        aria-labelledby="other-list-subheader"
        subheader={
          <ListSubheader component="div" id="other-list-subheader">
            Other
          </ListSubheader>
        }
      >
        {otherItems.map(({ text, href, enabled }) => (
          <ListItem
            button
            key={text}
            component={Link}
            to={href}
            className={classes.listItem}
            disabled={!enabled}
          >
            <ListItemText primary={text} />
          </ListItem>
        ))}
        <ListItem
          button
          key={'Sign out'}
          onClick={onLogout}
          className={classes.listItem}
        >
          <ListItemText primary={'Sign out'} className={classes.listItemText} />
          <ListItemIcon className={classes.listItemIcon}>
            <ExitToAppRoundedIcon />
          </ListItemIcon>
        </ListItem>
      </List>
    </div>
  );
};

Sidebar.propTypes = {};

export default Sidebar;
