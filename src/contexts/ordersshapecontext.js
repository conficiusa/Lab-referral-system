import React, { createContext, useContext } from "react";

const ordersShapeContext = createContext();

export const useOrdersShapeContext = () => {
  return useContext(ordersShapeContext);
};

export const DataProvider = ({ children }) => {
  const createData = (orderId, name, orderTime, checked, protein, price) => {
    const formattedOrderTime = formatOrderTime(orderTime);
    return {
      orderId,
      name,
      orderTime: formattedOrderTime,
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

  const formatOrderTime = (orderTime) => {
    const date = new Date(orderTime);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const amOrPm = hours >= 12 ? 'pm' : 'am';
    const formattedHours = hours % 12 || 12; // Convert to 12-hour format

    const formattedTime = `${formattedHours}:${minutes < 10 ? '0' : ''}${minutes} ${amOrPm}`;

    return formattedTime;
  };

  return (
    <ordersShapeContext.Provider value={{ createData }}>
      {children}
    </ordersShapeContext.Provider>
  );
};
