import React from 'react'
import Landing from '../pages/landing'
import Services from '../pages/services'
import Contact from '../pages/contact'
import CustomNavbar from '../components/navbar'
import SwipeableTemporaryDrawer from '../mui-components/drawer'
import Footer from '../pages/footer'

function Lab() {
  const iOS =
  typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent);
  return (
    <div>
        <Landing />
        <SwipeableTemporaryDrawer disableBackdropTransition={!iOS} disableDiscovery={iOS} />
        <CustomNavbar/>
        <Services/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Lab