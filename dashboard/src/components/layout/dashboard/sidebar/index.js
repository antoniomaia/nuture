import Logo from '@components/ui/icons/logo';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { Link } from 'react-router-dom';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { Button } from '@material-ui/core';

import { sidebarItems } from '@constants/sidebar';
import { useAppDispatch } from '@store';
import { setAuthState } from '@slices/auth';

const Sidebar = (props) => {
  const dispatch = useAppDispatch();

  return (
    <div>
      <Logo />
      <div className={props.classes.toolbar} />

      <List>
        {sidebarItems.map(({ text, href }) => (
          <ListItem button key={text} component={Link} to={href}>
            <ListItemIcon>{<InboxIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <Button onClick={() => dispatch(setAuthState(false))}>logout</Button>
    </div>
  );
};

Sidebar.propTypes = {};

export default Sidebar;
