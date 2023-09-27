import React from 'react'
import styles from '../../assets/styles/bookingstyles/overview.module.css'
import { AnalyticsSharp, ShoppingCartSharp } from '@mui/icons-material'
import userprofile from '../../assets/images/profile-1.jpg'
import profile1 from '../../assets/images/profile-3.jpg'
import CollapsibleTable from '../../mui-components/table'
import { Button } from '@mui/material'
import { useDashboardContext } from '../../contexts/dashboardcontext'
import { useOrdersContext } from '../../contexts/orderscontext';

export default function Overview() {
    const {setDashboardState} = useDashboardContext()
    const {orders} = useOrdersContext()
    const pendingOrders = () => {
        if (orders.pending.length > 0) {
          return <CollapsibleTable orderType={orders.pending} status="pending"/>;
        } else {
          return <h6>You have no pending orders</h6>;
        }
      };
    
  return (
    <div className={styles.overviewWrapper}>
        <div className={styles.main}>
            <div className={styles.date}>
                <input type="date" name="date" id="date"/>
            </div>

            <div className={styles.insights}>
                <div className={styles.sales}>
                    <AnalyticsSharp className={styles.span}/>
                    <div className={styles.middle}>
                        <div className={styles.left}>
                            <h3>Total Sales</h3>
                            <h1 className={styles.h1}>$25,000</h1>
                        </div>
                        <div className={styles.progress}>
                            <svg>
                                <circle cx="38" cy="38" r="36"></circle>
                            </svg>
                            <div className={styles.number}>
                                <p className={styles.p}>81%</p>
                            </div>
                        </div>
                    </div>
                    <small className={styles.textmuted}>Last 24 Hours</small>
                </div>
                <div className={styles.expenses}>
                    <AnalyticsSharp className={styles.span}/>
                    <div className={styles.middle}>
                        <div className={styles.left}>
                            <h3 className={styles.h3}>Total Sales</h3>
                            <h1 className={styles.h1}>$25,000</h1>
                        </div>
                        <div className={styles.progress}>
                            <svg>
                                <circle cx="38" cy="38" r="36"></circle>
                            </svg>
                            <div className={styles.number}>
                                <p className={styles.p}>81%</p>
                            </div>
                        </div>
                    </div>
                    <small className={styles.textmuted}>Last 24 Hours</small>
                </div>
                <div className={styles.income}>
                    <AnalyticsSharp className={styles.span}/>
                    <div className={styles.middle}>
                        <div className={styles.left}>
                            <h3 className={styles.h3}>Total Sales</h3>
                            <h1 className={styles.h1}>$25,000</h1>
                        </div>
                        <div className={styles.progress}>
                            <svg className={styles.svg}>
                                <circle cx="38" cy="38" r="36"></circle>
                            </svg>
                            <div className={styles.number}>
                                <p className={styles.p}>81%</p>
                            </div>
                        </div>
                    </div>
                    <small className={styles.textmuted}>Last 24 Hours</small>
                </div>
            </div>
            <div className={styles.recentorders}>
                <h2 className={styles.h2}>Pending Orders</h2>
                    {pendingOrders()}
                <Button className={styles.a} onClick={()=>setDashboardState(1)}>Show All</Button>
            </div>
        </div>
        <div className={styles.right}>
            <div className={styles.top}>
                <div className={styles.profile}>
                    <div className={styles.info}>
                        <p style={{marginBottom:"-10px"}} className={styles.p}>Hey, <b>Conficius</b></p>
                        <small className={styles.textmuted}>Admin</small>
                    </div>
                    <div className={styles.profilephoto}>
                        <img src={userprofile} alt="profile"/>
                    </div>
                </div>
            </div>
            <div className={styles.recentupdates}>
                <h2 className={styles.h2}>Recent Updates</h2>
                    <div className={styles.updates}>
                        <div className={styles.update}>
                            <div className={styles.profilephoto}>
                                <img src={profile1} alt="profile"/>
                            </div>
                            <div className={styles.message}>
                                <p className={styles.p}><b>Hammy</b> received his order of Liver Function Test</p>
                                <small className={styles.textmuted}>6 minutes Ago</small>
                            </div>
                        </div>
                        <div className={styles.update}>
                            <div className={styles.profilephoto}>
                                <img src={profile1} alt="profile"/>
                            </div>
                            <div className={styles.message}>
                                <p className={styles.p}><b>Hammy</b> received his order of Liver Function Test</p>
                                <small className={styles.textmuted}>6 minutes Ago</small>
                            </div>
                        </div>
                        <div className={styles.update}>
                            <div className={styles.profilephoto}>
                                <img src={profile1} alt="profile"/>
                            </div>
                            <div className={styles.message}>
                                <p className={styles.p}><b>Hammy</b> received his order of Liver Function Test</p>
                                <small className={styles.textmuted}>6 minutes Ago</small>
                            </div>
                        </div>
                    </div>
            </div>
            <div className={styles.salesanalytics}>
                <h2 className={styles.h2}>Sales Analytics</h2>
                    <div className={`${styles.item} ${styles.orange}`}>
                        <div className={styles.icon}>
                            <ShoppingCartSharp className={styles.span}/>
                        </div>
                        <div className={styles.right}>
                            <div className={styles.info}>
                                <h3 className={styles.h3}>ONLINE ORDERS</h3>
                                <small className={styles.textmuted}>last 24 Hours</small>
                            </div>
                            <h5 className={styles.success}>+39%</h5>
                            <h3 className={styles.h3}>3849</h3>
                        </div>
                 </div>
                    <div className={`${styles.item} ${styles.orange}`}>
                        <div className={styles.icon}>
                            <ShoppingCartSharp className={styles.span}/>
                        </div>
                        <div className={styles.right}>
                            <div className={styles.info}>
                                <h3 className={styles.h3}>ONLINE ORDERS</h3>
                                <small className={styles.textmuted}>last 24 Hours</small>
                            </div>
                            <h5 className={styles.success}>+39%</h5>
                            <h3 className={styles.h3}>3849</h3>
                        </div>
                 </div>
                    <div className={`${styles.item} ${styles.orange}`}>
                        <div className={styles.icon}>
                            <ShoppingCartSharp className={styles.span}/>
                        </div>
                        <div className={styles.right}>
                            <div className={styles.info}>
                                <h3 className={styles.h3}>ONLINE ORDERS</h3>
                                <small className={styles.textmuted}>last 24 Hours</small>
                            </div>
                            <h5 className={styles.success}>+39%</h5>
                            <h3 className={styles.h3}>3849</h3>
                        </div>
                 </div>
            </div>
        </div>
    </div>
  )
}
