import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import BookingForm from '../components/booking-sections/BookingForm';
import LocationSearchingIcon from '@mui/icons-material/LocationSearching';
import { BookOnlineSharp, GridViewSharp,  HomeSharp, InsightsSharp, LogoutSharp, SettingsSharp } from '@mui/icons-material';
import { Button } from '@mui/material';
import styles from '../assets/styles/mui.module.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';
const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [section, setSection] = useState(0)

  const ConditionalSection = () =>{
    switch (section) {
      case 0 :
        return <BookingForm/>
      default:
        return <BookingForm/>
    }
  }
  const drawerItems=[
    {text:"Book Now", icons: <BookOnlineSharp/>, section:0},
    {text:"Dashboard", icons: <GridViewSharp/>, section: 1},
    {text:"Analytics", icons: <InsightsSharp/>, section: 2} ,
    {text:"Tracking", icons: <LocationSearchingIcon/>, section:3},
    {text:"Settings", icons: <SettingsSharp/>, section: 4},
]
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Link to="/">
        <Button startIcon={<HomeSharp/>} size="large" sx={{ width:"100%"}}>Home</Button>
      </Link>
      <Divider />
      <>
        {drawerItems.map((item) => (
          <List>
            <ListItem key={item.text} disablePadding onClick={()=>setSection(item.section)}>
              <ListItemButton>
                <ListItemIcon>
                  {item.icons}
                </ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          </List>
        ))}
      </>   
      <Divider />
      <List>
          <ListItem disablePadding>
            <ListItemButton>
            <Button startIcon={<LogoutSharp/>} 
                          sx={{fontSize:"1rem",marginTop:"5rem"}}
                          className={styles.navbarlogin}>
                          Logout
                        </Button>
            </ListItemButton>
          </ListItem>
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h4" noWrap component="div">
            Confi's Labs
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` }}}
      >
        <Toolbar/>
        <Box>
          {ConditionalSection()}
        </Box>
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
