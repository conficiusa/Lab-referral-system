import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useDashboardContext } from '../contexts/dashboardcontext';

export default function ScrollableTabsButtonAuto() {
  const [value, setValue] = React.useState(0);
  const {dashboardState, setDashboardState} = useDashboardContext()
  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const tabcontent=[
    {heading:"Overview", dashstate:0},
    {heading:"Orders", dashstate:1},
    {heading:"Financials", dashstate:2},
    {heading:"History", dashstate:3}
  ]
  return (
    <Box sx={{ maxWidth: { xs: "100%", sm: "90%", md:"50%" }, bgcolor: 'background.paper', borderBottom: 1, borderColor: 'divider' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="dashboard navigation"
      >
        {tabcontent.map((tab)=>(
          <Tab key={tab.dashstate} label={tab.heading} sx={{fontWeight:600,backgroundColor: dashboardState === tab.dashstate ? "#f0f0f0" : "transparent"}} onClick={()=>setDashboardState(tab.dashstate)}/>
        ))}
      </Tabs>
    </Box>
  );
}