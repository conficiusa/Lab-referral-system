
import Navbar from 'react-bootstrap/Navbar';
import styles from '../assets/styles/navbar.module.css'
import logo from '../assets/images/logo.png'

function CustomNavbar() {
  return (
    <Navbar collapseOnSelect expand="lg" className={styles.navbarContainer} sticky="top">
         <div className={styles.Nav}>
                <ul>
                    <li className={styles.logo}>
                      <img src ={logo}/>
                    </li>
                    <li>Book Now</li>
                    <li>Services</li>
                    <li>Dashboard</li>
                    <li>About us</li>
                    <li>contact us</li>
                </ul>
            </div>
    </Navbar>
  );
}

export default CustomNavbar