import React, { useState } from 'react'
import styles from "../../assets/styles/bookingstyles/BookingForm.module.css"
import First from './first';
import Second from './second';
import { Box, Button } from '@mui/material';

export default function BookingForm() {
  const [page, setPage] = useState(0);

  const ConditionalComponents = () =>{
    switch (page) {
      case 0 :
        return <First />;
      case 1 :
        return <Second />
      default:
        return <First />
    }
  }
  return (
    <Box className={styles.orderwrapper}>
       <h1>Booking a service</h1>
       <h6>Please fill the form below to book your desired service</h6>
       <h4 style={{marginTop:"1.5rem"}}>
        {page===0 && "General Information"}
        {page===1 && "Specific Information"}
       </h4>
      {ConditionalComponents()}
       <Box className={styles.orderpagination}>
        {page !==0 && <Button size="large" sx={{float:"left"}} onClick={() => {
          setPage(page - 1)
          }}>Back</Button>}
        <Button size="large" sx={{float:"right", fontSize:"1rem"}}  onClick={() => {
          setPage(page + 1)
          }}>Next</Button>
      </Box>
    </Box>
  )
}
