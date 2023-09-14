import styles from '../../assets/styles/bookingstyles/BookingForm.module.css';
import { Box, FormControl, TextField} from '@mui/material';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import Grouped from '../../mui-components/labtest';


export default function Second({time_Sample,formData,setFormData}) {
  
  const handleDateTimeChange = (selectedDateTime) => {
    setFormData({ ...formData, time_Sample: selectedDateTime });
  };
  return (
    <FormControl className={styles.orderform} variant="standard" sx={{ marginTop: "1rem", minWidth: 120 }}>
        <div className={styles.formwrapper}>
          <Box className={styles.orderleft}>
            <Box  className={styles.item}  sx={{ width: "100%",  }}>
              <TextField id="filled-basic" label="Name of Patient" variant="filled"  sx={{ width: "100%" }}/>
            </Box>
            <Box  className={styles.item}  sx={{ width: "100%",  }}>
              <TextField id="filled-basic" label="Patients LHIMS number" variant="filled"  sx={{ width: "100%" }}/>
            </Box>
            <Box  className={styles.item}  sx={{ width: "100%",  }}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={['DateTimePicker']}>
                <DateTimePicker
                    label="Date and Time of sample collection"
                    format="DD/MM/YYYY hh:mm a"
                    onChange={handleDateTimeChange}
                    value={time_Sample}
                />
              </DemoContainer>
            </LocalizationProvider>
            </Box>
            <Box  className={styles.item}  sx={{ width: "100%",  }}>
              <TextField id="filled-basic" label="Type of sample" variant="filled"  sx={{ width: "100%" }}/>
            </Box>
          </Box>
          <Box className={styles.orderright}>
            <Grouped/>
          </Box>
        </div>
      </FormControl>

)    
}
