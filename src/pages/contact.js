import { ChatBubbleSharp, LocationOnSharp, MailSharp, PhoneSharp } from '@mui/icons-material'
import styles from '../assets/styles/contact.module.css'
import React from 'react'
import { Button } from '@mui/material'


function Contact() {
  return (
    <div className={styles.contactWrapper}>
      <div className={styles.contactContainer}>
        <div className={styles.contactTop}>
          <h2>Get in touch with us</h2>
          <div className={styles.topcontent}>
              <div className={styles.contactform}>
                <h6>Send us a message </h6>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ut saepe sint!</p>
                <form>
                  <div className={styles.first}>
                    <div class={styles.userbox}>
                      <input type="text" id="name" required />
                      <label for="name">Name</label>
                    </div>
                    <div class={styles.userbox}>
                      <input type="email" id="email"  required />
                      <label for="email">email</label>
                    </div>
                  </div>
                  <div className={styles.second}>
                    <div class={styles.userbox}>
                      <input type="text" id="phone"  required />
                      <label for="name">Phone Number</label>
                    </div>
                  </div> 
                  <div className={styles.third}>
                    <div class={styles.userbox}>
                      <textarea rows="3" required/>
                      <label for="message">Message</label>
                    </div>
                  </div> 
                  <div className={styles.submit}>
                    <button type="submit">SUBMIT</button>
                  </div>
                </form>
              </div>
              <div className={styles.divider}>
              </div>
              <div className={styles.contactways}>
                <div className={styles.item}>
                  <h5>Call Us</h5>
                  <p>ipsum dolor sit amet consectetur adipisicing elit. Adipisci ut !</p>
                  <a href="tel:+233249906015"><Button sx={{marginTop:"-2rem"}} startIcon={<PhoneSharp sx={{color:"#ce2121"}}/>}>+233 24 990 6015</Button></a>
                </div>
                <div className={styles.item}>
                  <h5>Visit Us</h5>
                  <p>ipsum dolor sit amet consectetur adipisicing elit. Adipisci ut !</p>
                 <Button sx={{marginTop:"-2rem"}}startIcon={<LocationOnSharp sx={{color:"#ce2121"}}/>} >Visit us in Tamale, Opposite SDA Hospital</Button>
                </div>
                <div className={styles.item}>
                  <h5>Call Us</h5>
                  <p>ipsum dolor sit amet consectetur adipisicing elit. Adipisci ut !</p>
                  <a href="mailto:addawebadua@gmail.com"><Button sx={{marginTop:"-2rem"}} startIcon={<MailSharp sx={{color:"#ce2121"}}/>}>Email us at addawebadua@gmail.com</Button></a>
                </div>
                <div className={styles.item}>
                  <h5>live Chat</h5>
                  <p>ipsum dolor sit amet consectetur adipisicing elit. Adipisci ut !</p>
                  <a href="/"><Button sx={{marginTop:"-2rem"}} startIcon={<ChatBubbleSharp sx={{color:"#ce2121"}}/>}>Start Chat</Button></a>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact