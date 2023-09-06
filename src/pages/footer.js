import React from 'react'
import styles from "../assets/styles/footer.module.css"
import BasicAccordion from '../mui-components/accordion'
import { FacebookRounded, Instagram, LinkedIn, Twitter } from '@mui/icons-material'

export default function Footer() {
  return (
    <div className={styles.footerwrapper}>
        <footer>
            <div className={styles.footertop}>
                <div className={styles.faqheading}>
                    <h6>FAQ</h6>
                    <h3>Frequently <br/> asked <br/> questions</h3>
                </div>
                <div className={styles.faqasks}>
                    <h6>Lorem ipsum dolor sit amet, consectetur</h6>
                    <p style={{fontWeight:"400"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                         malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </p>
                    <BasicAccordion/>
                </div>
            </div>
            <div className={styles.footerdown}>
                <div className={styles.footercontent}>
                    <div className={styles.up}>
                        <p>Join Confi's Labs Today, <br/>Medical Laboratories Closer Than Ever</p>
                    </div>
                    <div className={styles.bottom}>
                        <div className={styles.item}>
                            <h5>Company</h5>
                            <p>About us</p>
                            <p>Our Services</p>
                            <p>Privacy policy</p>
                            <p>Cookies policy</p>
                        </div>
                        <div className={styles.item}>
                            <h5>Get Help</h5>
                            <p>FAQ</p>
                            <p>tracking</p>
                            <p>Customer service</p>
                        </div>
                        <div className={styles.item}>
                            <h5>Company</h5>
                            <p>About us</p>
                        </div>
                        <div className={styles.item}>
                            <h5>Follow us</h5>
                            <div className={styles.socials}>
                                <FacebookRounded sx={{
                                    color:"rgb(197, 200, 252)", marginLeft:"2rem",
                                }}/>
                                <Instagram sx={{
                                    color:"rgb(197, 200, 252)", marginLeft:"2rem",
                                }}/>
                                <Twitter sx={{
                                    color:"rgb(197, 200, 252)", marginLeft:"2rem",
                                }}/>
                                <LinkedIn sx={{
                                    color:"rgb(197, 200, 252)", marginLeft:"2rem",
                                }}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
  )
}
