import React, { useState } from 'react'
import styles from "../../assets/styles/bookingstyles/BookingForm.module.css"
import First from './first';
import Second from './second';
import { Box, Button } from '@mui/material';

export default function BookingForm() {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    institution_type: '',
    admin_name : "" ,
    facilty_name:"",
    services_needed: [],
    setDestination: "",
    destination: "",
    time_Sample:null,
    patient_name:"",
    lhims_number:"",
    sample_type:'',
    selected_test:""
  });
  const ConditionalComponents = () =>{
    switch (page) {
      case 0 :
        return <First  formData={formData} setFormData={setFormData} time_Sample={formData.time_Sample}/>;
      case 1 :
        return <Second  formData={formData} setFormData={setFormData}/>
      default:
        return <First  formData={formData} setFormData={setFormData}/>
    }
  }
  return (
    <Box className={styles.orderwrapper}>
       <h1>Booking a service</h1>
       <h6>Please fill the form below to book your desired service</h6>
       <h4 style={{marginTop:"1.5rem"}}>
        {page===0 && "General Information"}
        {page===1 && "Specific"}
       </h4>
      {ConditionalComponents()}
       <Box className={styles.orderpagination}>
        <Button size="large" sx={{float:"left"}} onClick={() => {
          setPage(page - 1)
          console.log(formData)
          }}>Back</Button>
        <Button size="large" sx={{float:"right", fontSize:"1rem"}}  onClick={() => {
          setPage(page + 1)
          console.log(formData)
          }}>Next</Button>
      </Box>
    </Box>
  )
}
