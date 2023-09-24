import React from 'react';
import styles from '../../assets/styles/bookingstyles/order.module.css';
import CollapsibleTable from '../../mui-components/table';
import { useOrdersContext } from '../../contexts/orderscontext';

export default function OrderDetails() {
  const { orders } = useOrdersContext();

  const pendingOrders = () => {
    if (orders.pending.length > 0) {
      return <CollapsibleTable orderType={orders.pending} />;
    } else {
      return <h6>You have no pending orders</h6>;
    }
  };

  const completedOrders = () => {
    if (orders.completed.length > 0) {
      return <CollapsibleTable orderType={orders.completed} />;
    } else {
      return <h6>You have no Completed orders</h6>;
    }
  };

  const canceledOrders = () => {
    if (orders.canceled.length > 0) {
      return <CollapsibleTable orderType={orders.canceled} />;
    } else {
      return <h6>You have no Cancelled orders</h6>;
    }
  };

  return (
    <div className={styles.OrderDetailswrapper}>
      <h3>Pending Orders</h3>
      {pendingOrders()}
      <h3>Completed Orders</h3>
      {completedOrders()}
      <h3>Cancelled Orders</h3>
      {canceledOrders()}
    </div>
  );
}
