import React, { useState, createContext, useContext } from "react";

const OrdersContext = createContext();

export const useOrdersContext = () => {
  return useContext(OrdersContext);
};

const ordersShapeContext = createContext();

export const useOrdersShapeContext = () => {
  return useContext(ordersShapeContext);
};

const createData = (orderId, name, orderTime, checked, protein, price) => {
  return {
    orderId,
    name,
    orderTime,
    checked,
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
  };
};

export const OrdersProvider = ({ children }) => {
  const [orders, setOrders] = useState({
    pending: [
      createData('Frozen yoghurt', 159, 6.0, false, 4.0, 3.99),
      createData('Ice cream sandwich', 237, 9.0, false, 4.3, 4.99),
      createData('Eclair', 262, 16.0, false, 6.0, 3.79),
    ],
    completed: [
      createData('Cupcake', 305, 3.7, false, 4.3, 2.5),
      createData('Gingerbread', 356, 16.0, false, 3.9, 1.5),
    ],
    canceled: [],
  });

  // Function to delete an order by orderId
  const deleteOrder = (orderId) => {
    const updatedOrders = { ...orders };

    for (const category in updatedOrders) {
      updatedOrders[category] = updatedOrders[category].filter(
        (order) => order.orderId !== orderId
      );
    }

    setOrders(updatedOrders);
  };
const markOrderAsCompleted = (orderId) => {
  setOrders((prevOrders) => {
    const updatedOrders = {
      ...prevOrders,
      pending: prevOrders.pending.filter((order) => order.orderId !== orderId),
      completed: [
        ...prevOrders.completed,
        prevOrders.pending.find((order) => order.orderId === orderId),
      ],
    };
    return updatedOrders;
  });
};
const cancelOrders = (orderId) => {
  setOrders((prevOrders) => {
    const updatedOrders = {
      ...prevOrders,
      pending: prevOrders.pending.filter((order) => order.orderId !== orderId),
      canceled: [
        ...prevOrders.canceled,
        prevOrders.pending.find((order) => order.orderId === orderId),
      ],
    };
    return updatedOrders;
  });
};


  return (
    <OrdersContext.Provider value={{ orders, setOrders, deleteOrder,markOrderAsCompleted,cancelOrders }}>
      <ordersShapeContext.Provider value={createData}>
        {children}
      </ordersShapeContext.Provider>
    </OrdersContext.Provider>
  );
};
