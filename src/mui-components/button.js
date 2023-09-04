import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import styles from '../assets/styles/mui.module.css'
import  DoubleArrowSharp from '@mui/icons-material/DoubleArrowSharp';


export default function Buttons({count, text}) {
  return (
    <Box className={styles.serviceBtnBox}>
       <Button variant="contained" 
            endIcon={<DoubleArrowSharp className='arrow'
              sx={{ mr: 1,
              ml: 2,
              transition: "transform 0.3s ease-in-out",
            }}/>} size="large"
             sx={{   
              "&:hover .arrow":{
                transform:"translateX(5px)",
              },
              height:"3.5rem",
              width :"12rem",
              }}
              disabled={count<1}
              className={styles.serviceBtn}
             >
                {text}
        </Button>
    </Box>
      
  );
}