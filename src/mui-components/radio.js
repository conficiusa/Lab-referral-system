import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function ControlledRadioButtonsGroup({value, onChange}) {
 
  return (
    <FormControl>
      <FormLabel id="demo-controlled-radio-buttons-group">Do you have a specific destination</FormLabel>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={value}
        onChange={onChange}
        row
      >
        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
        <FormControlLabel value="no" control={<Radio />} label="No" />
      </RadioGroup>
    </FormControl>
  );
}