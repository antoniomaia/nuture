import Logo from 'components/ui/icons/logo';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { Link } from 'react-router-dom';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { Button } from '@material-ui/core';

import { sidebarItems } from 'constants/sidebar';
import { useAppDispatch } from 'store';
import { logout } from 'slices/auth';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  toolbar: theme.mixins.toolbar,
}));
const Sidebar = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();

  const onLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      <Logo />
      <div className={classes.toolbar} />

      <List>
        {sidebarItems.map(({ text, href }) => (
          <ListItem button key={text} component={Link} to={href}>
            <ListItemIcon>{<InboxIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        <ListItem>
          <Button fullWidth onClick={onLogout}>
            Logout
          </Button>
        </ListItem>
      </List>
    </div>
  );
};

Sidebar.propTypes = {};

export default Sidebar;
