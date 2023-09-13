import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

// Import your JSON data
import medicalTestsData from '../assets/jsons/labtests.json';

export default function Grouped() {
  const options = medicalTestsData.medical_tests.map((option) => {
    const firstLetter = option[0].toUpperCase();
    return {
      firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
      title: option,
    };
  });

  return (
    <Autocomplete
        multiple
        id="tags-standard"
        options={options.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
        groupBy={(option) => option.firstLetter}
        getOptionLabel={(option) => option.title}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="standard"
            label="Please select test needed"
            placeholder="Add a test"
          />
        )}
      />
  );
}
