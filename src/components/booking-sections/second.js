import styles from '../../assets/styles/bookingstyles/BookingForm.module.css';
import { Box, FormControl, TextField} from '@mui/material';
import BasicDateTimePicker from '../../mui-components/datetime';
import Grouped from '../../mui-components/labtest';

export default function Second() {
    
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
                <BasicDateTimePicker/>
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
