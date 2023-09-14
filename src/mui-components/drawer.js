import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Button } from '@mui/material';
import { BookOnlineSharp, GridViewSharp, InsightsSharp, LoginSharp, MenuSharp, SettingsSharp } from '@mui/icons-material';
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
    {text:"Book Now", icons: <BookOnlineSharp/>},
    {text:"Dashboard", icons: <GridViewSharp/>},
    {text:"Analytics", icons: <InsightsSharp/>} ,
    {text:"Tracking", icons: <LocationSearchingIcon/>},
    {text:"Settings", icons: <SettingsSharp/>},
]

  const list = (anchor) => (
    <Box
      sx={{ width: 250,paddingTop:"2rem" }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      className={styles.drawerbox}
    >
      <List>
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
        {['Services', 'About Us', 'Contact','FAQ', 'Account'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
          <ListItem disablePadding>
            <ListItemButton>
            <Button endIcon={<LoginSharp/>} 
                        sx={{
                          color:"rgb(255, 252, 250)", 
                          paddingLeft:"3rem",paddingRight:"3rem",
                          backgroundColor:'#271302',
                        
                        }} 
                          className={styles.navbarlogin}
                          >
                          Login
                        </Button>
            </ListItemButton>
          </ListItem>
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
