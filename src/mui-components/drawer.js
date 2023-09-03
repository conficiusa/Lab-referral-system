import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import { Button } from '@mui/material';
import { BookOnlineSharp, GridViewSharp, MenuSharp } from '@mui/icons-material';
import styles from '../assets/styles/mui.module.css'
import { HomeSharp } from '@mui/icons-material';
import LocationSearchingIcon from '@mui/icons-material/LocationSearching';

export default function SwipeableTemporaryDrawer() {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const drawerItems=[
    {text:"Home", icons: <HomeSharp/>},
    {text:"Dashboard", icons: <GridViewSharp/>},
    {text:"Book Now", icons: <BookOnlineSharp/>},
    {text:"Tracking", icons: <LocationSearchingIcon/>},
]

  const list = (anchor) => (
    <Box
      sx={{ width: 250,paddingTop:"2rem" }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      className={styles.drawerbox}
    >
      <List mt="7">
        {drawerItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {item.icons}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div className={styles.drawer}>
      <Button onClick={toggleDrawer('left', true)}>
        <MenuSharp className={styles.drawerBtn} />
      </Button>
      <SwipeableDrawer
        anchor="left"
        open={state.left}
        onClose={toggleDrawer('left', false)}
        onOpen={toggleDrawer('left', true)}
      >
        {list('left')}
      </SwipeableDrawer>
    </div>
  );
}
