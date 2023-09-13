import React from 'react';
import styles from "../../assets/styles/bookingstyles/BookingForm.module.css";
import { Box, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import MultipleSelectChip from '../../mui-components/chip';
import ControlledRadioButtonsGroup from '../../mui-components/radio';
import BasicDateTimePicker from '../../mui-components/datetime';

const names = [
  "Sample Transportation",
  'Laboratory Testing',
  'Phlebotomy',
];
export default function First({ formData, setFormData,time_Sample }) {
  return (
    <Box className={styles.orderwrapper}>
      <FormControl className={styles.orderform} variant="standard" sx={{ marginTop: "1rem", minWidth: 120 }}>
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
            <BasicDateTimePicker 
            formData={formData}
            setFormData={setFormData}
            time_Sample={time_Sample}
            label="Date and Time of sample collection"
            />
          </Box> 
        </Box>
        </div>
      </FormControl>
      
    </Box>
  );
}
