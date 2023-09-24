import React from 'react'
import styles from '../../assets/styles/bookingstyles/dashboard.module.css'
import ScrollableTabsButtonAuto from '../../mui-components/tabs'
import Overview from './Overview'
import { useDashboardContext } from '../../contexts/dashboardcontext'
import OrderDetails from './ordersdetails'
import { OrdersProvider } from '../../contexts/orderscontext'

export default function Dashboard() {
  const {dashboardState} = useDashboardContext();

  const ConditionalDashboardstate = () =>{
    switch (dashboardState) {
      case 0 :
        return <Overview />
      case 1 :
        return <OrderDetails/>
      default:
        return <Overview/>
    }
  }
  return (
    <div className={styles.dashboardwrapper}>
      <OrdersProvider>
        <ScrollableTabsButtonAuto/>
        <div className={styles.tabcontents}>
            {ConditionalDashboardstate()}
        </div>
      </OrdersProvider>
    </div>
  )
}
