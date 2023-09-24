import React from 'react'
import MiniDrawer from '../mui-components/miniside'
import { DashboardProvider } from '../contexts/dashboardcontext'

export default function Booking() {
  return (
    <div>
      <DashboardProvider>
        <MiniDrawer/>
      </DashboardProvider>
    </div>
  )
}
