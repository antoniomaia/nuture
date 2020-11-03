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

const useStyles = makeStyles(theme => ({
  drawer: {
    [theme.breakpoints.up('sm')]: {
      flexShrink: 0,
    },
  },
  listItem: {
    padding: '0.2rem 1.5rem',
  },
  listItemIcon: {
    minWidth: 35,
  },
  listItemText: {
    maxWidth: 'fit-content',
    marginRight: '11px',
  },
}));

const Sidebar = () => {
  const classes = useStyles();

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
        {businessItems.map(({ text, href, icon }) => (
          <ListItem
            button
            key={text}
            component={Link}
            to={href}
            className={classes.listItem}
          >
            <ListItemIcon className={classes.listItemIcon}>{icon}</ListItemIcon>
            <ListItemText primary={text} />
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
        {administrationItems.map(({ text, href, icon }) => (
          <ListItem
            button
            key={text}
            component={Link}
            to={href}
            className={classes.listItem}
          >
            <ListItemIcon className={classes.listItemIcon}>{icon}</ListItemIcon>
            <ListItemText primary={text} />
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
        {otherItems.map(({ text, href }) => (
          <ListItem
            button
            key={text}
            component={Link}
            to={href}
            className={classes.listItem}
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
