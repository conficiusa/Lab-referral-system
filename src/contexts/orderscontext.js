import { useState, createContext, useContext } from "react";

const OrdersContext = createContext();

export const useOrdersContext = () => {
  return useContext(OrdersContext);
}

const ordersShapeContext = createContext();

export const useOrdersShapeContext = () => {
  return useContext(ordersShapeContext);
}

const createData = (orderId, name, orderTime, carbs, protein, price) => {
  return {
    orderId,
    name,
    orderTime,
    carbs,
    protein,
    price,
    history: [
      {
        date: '2020-01-05',
        customerId: '11091700',
        amount: 3,
      },
      {
        date: '2020-01-02',
        customerId: 'Anonymous',
        amount: 1,
      },
    ],
  }
}

export const OrdersProvider = ({ children }) => {
  const [orders, setOrders] = useState({
    pending: [
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 3.99),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 4.99),
        createData('Eclair', 262, 16.0, 24, 6.0, 3.79),
    ],
    completed: [
        createData('Cupcake', 305, 3.7, 67, 4.3, 2.5),
        createData('Gingerbread', 356, 16.0, 49, 3.9, 1.5),
    ],
    canceled: [],
  });

  return (
    <OrdersContext.Provider value={{ orders, setOrders }}>
      <ordersShapeContext.Provider value={createData}>
        {children}
      </ordersShapeContext.Provider>
    </OrdersContext.Provider>
  );
}
