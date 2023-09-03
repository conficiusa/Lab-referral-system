import styles from '../assets/styles/landing.module.css'
import landingpic from '../assets/images/landingpic.svg'
import { LoginSharp } from '@mui/icons-material'

export default function Landing(){
    return(
        <header className={styles.landingContainer}>
            <main className={styles.landingShowcase}> 
                <div className={styles.landingLeft}>
                        <div className={styles.landingBigtitle}>
                            <h1>Labs Closer than Ever!!</h1>
                            <h2 className={styles.landingExplore}>Start Exploring now.</h2>
                        </div>
                        <p className={styles.landingText}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, veniam aperiam error facilis quaerat praesentium totam optio necessitatibus excepturi.</p>
                        <div className={styles.landingCta}>
                            <button className={styles.landingBtn}>Get Started <LoginSharp className={styles.span}/></button>
                        </div>
                    </div>
        
                <div className={styles.landingRight}>
                    <div className={styles.landingHero}>
                        <img src={landingpic} className={styles.landingPic} alt="illustration of a lab scientist"/>
                    </div>
                </div>
            </main>
        </header>
    )
}