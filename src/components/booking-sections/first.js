import React from 'react';
import styles from "../../assets/styles/bookingstyles/BookingForm.module.css";
import { Box, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import MultipleSelectChip from '../../mui-components/chip';
import ControlledRadioButtonsGroup from '../../mui-components/radio';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { useFormContext } from '../../contexts/FormContext';

const names = [
  "Sample Transportation",
  'Laboratory Testing',
  'Phlebotomy',
];
export default function First() {
const {formData, setFormData} = useFormContext();


  const handleDateTimeChange = (selectedDateTime) => {
    setFormData({ ...formData, set_schedule: selectedDateTime });
  };
  return (
    <Box className={styles.orderwrapper}>
      <div className={styles.formwrapper}>
          <Box className={styles.orderleft}>
          <Box className={styles.item}>
            <InputLabel id="institution_type">Type of institution</InputLabel>
            <Select
              labelId="institution_type"
              id="institution_type_select"
              value={formData.institution_type}
              onChange={(e) => { setFormData({ ...formData, institution_type: e.target.value }) }}
              sx={{ width: "100%" }}
              name='institution_Type'
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="Individual">Individual</MenuItem>
              <MenuItem value="Hospital">Hospital</MenuItem>
              <MenuItem value="Private Laboratory">Private Laboratory</MenuItem>
            </Select>
          </Box>
          <Box  className={styles.item}  sx={{ width: "100%",  }}>
            <TextField 
            id="filled-basic" 
            label="Name of individual/Admin" 
            variant="filled" value={formData.admin_name}  
            sx={{ width: "100%" }} 
            onChange={(e)=>{setFormData({...formData,admin_name:e.target.value })}}
            />
          </Box>
          <Box  className={styles.item}  sx={{ width: "100%",  }}>
            <TextField 
            id="filled-basic"
            label="Name of Hospital or Laboratoy" 
            variant="filled"  value={formData.facilty_name} 
            sx={{ width: "100%" }} 
            onChange={(e)=>{setFormData({...formData,facilty_name:e.target.value })}}
            />
          </Box>
          <Box className={styles.item} sx={{ width: "100%",  }}>
            <MultipleSelectChip 
            names={names} 
            formData={formData}
            setFormData={setFormData}
            />
          </Box>               
        </Box>
        <Box className={styles.orderright}>
          <Box className={styles.item}>
            <ControlledRadioButtonsGroup 
            onChange={(e) => { setFormData({ ...formData, setDestination: e.target.value }) }} 
            yesNo={formData.setDestination}/>
          </Box>
          <Box  className={styles.item}  sx={{ width: "100%",  }}>
            <TextField 
            id="filledbasic" 
            label="Select Destination" 
            variant="filled"  sx={{ width: "100%" }} 
            required 
            disabled={formData.setDestination==="no"}  
            value={formData.destination}
            onChange={(e)=>{setFormData({...formData,destination:e.target.value })}}
            />
          </Box>
          <Box className={styles.item} sx={{ width: "100%",  }}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={['DateTimePicker']}>
                <DateTimePicker
                    label="Date and Time of sample collection"
                    format="DD/MM/YYYY hh:mm a"
                    onChange={handleDateTimeChange}
                    value={formData.set_schedule}
                />
              </DemoContainer>
            </LocalizationProvider>
          </Box> 
        </Box>
        </div>      
    </Box>
  );
}
