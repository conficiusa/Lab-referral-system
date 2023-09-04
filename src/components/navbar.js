
import Navbar from 'react-bootstrap/Navbar';
import styles from '../assets/styles/navbar.module.css'
import logo from '../assets/images/logo.png'
import { Button } from '@mui/material';
import { BookOnlineSharp, GridViewSharp, HomeSharp, InsightsSharp, LocationSearchingSharp, LoginSharp, SettingsSharp} from '@mui/icons-material';



function CustomNavbar() {
  const drawerItems=[
    {text:"Home", icons: <HomeSharp/>},
    {text:"Book Now", icons: <BookOnlineSharp/>},
    {text:"Dashboard", icons: <GridViewSharp/>},
    {text:"Analytics", icons: <InsightsSharp/>} ,
    {text:"Tracking", icons: <LocationSearchingSharp/>},
    {text:"Settings", icons: <SettingsSharp/>, outline:false},
]
  return (
    <Navbar collapseOnSelect expand="lg" className={styles.navbarContainer} sticky="top">
         <div className={styles.Nav}>
                <ul>
                    <li className={styles.logo}>
                      <img src ={logo} alt="logo"/>
                    </li>
                    {drawerItems.map((item)=>(
                      <li key={item.text}>
                      <a href="/">
                        <Button startIcon={item.icons} sx={{color:"rgb(255, 252, 250)"}}>
                          {item.text}
                        </Button>
                      </a> 
                    </li>
                    ))}
                    <li>
                      <a href="/">
                        <Button endIcon={<LoginSharp/>} 
                        sx={{
                          color:"rgb(255, 252, 250)", 
                          border: "1px solid rgb(255, 252, 250)", 
                          paddingLeft:"3rem",paddingRight:"3rem",
                          "&:hover":{
                            backgroundColor:'rgb(255, 252, 250)',
                            color: "#271302"
                          }
                        
                        }} 
                          className={styles.navbarlogin}>
                          Login
                        </Button>
                      </a> 
                    </li>
                </ul>
            </div>
    </Navbar>
  );
}

export default CustomNavbar