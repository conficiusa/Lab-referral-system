import React, { createContext, useContext, useState } from 'react';

const OrderIdContext = createContext();

export function useOrderIdContext() {
  return useContext(OrderIdContext);
}

export function OrderIdProvider({ children }) {
  const [generatedOrders, setGeneratedOrders] = useState([]);
  const [currentOrderId, setCurrentOrderId] = useState('');

  const generateUniqueOrderId = () => {
    const currentDate = new Date();
    const day = String(currentDate.getDate()).padStart(2, '0');
    const randomAlphabet = generateRandomString(3);
    const randomDigits = Math.floor(Math.random() * 9000) + 1000;
    const orderId = `${randomAlphabet}${randomDigits}${day}`;
    return orderId;
  };

  const generateRandomString = (length) => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(randomIndex);
    }
    return result;
  };

  const generateOrderId = () => {
    const orderId = generateUniqueOrderId();
    if (!generatedOrders.includes(orderId)) {
      setGeneratedOrders([...generatedOrders, orderId]);
      setCurrentOrderId(orderId);
    } else {
      // Regenerate if the generated ID already exists
      generateOrderId();
    }
  };

  return (
    <OrderIdContext.Provider
      value={{
        generatedOrders,
        currentOrderId,
        generateOrderId,
      }}
    >
      {children}
    </OrderIdContext.Provider>
  );
}
