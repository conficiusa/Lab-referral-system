import React, { useState, createContext, useContext } from "react";
import { useFormContext } from "./FormContext";
import { useOrdersShapeContext } from "./ordersshapecontext";

const OrdersContext = createContext();

export const useOrdersContext = () => {
  return useContext(OrdersContext);
};

export const OrdersProvider = ({ children }) => {
  const { formData, setFormData } = useFormContext();
  const { createData } = useOrdersShapeContext(); // Get createData from ordersShapeContext

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

  const addOrder = () => {
    let uniqueOrderId = 0
    const newOrder = createData(
      uniqueOrderId++,
      formData.admin_name,
      new Date(),
      false,
      30,
      40
    );

    setOrders((prevOrders) => ({
      ...prevOrders,
      pending: [...prevOrders.pending, newOrder],
    }));

    setFormData({
      institution_type: '',
      admin_name: '',
      facilty_name: '',
      set_schedule: null,
      services_needed: [],
      setDestination: '',
      destination: '',
      time_Sample: null,
      patient_name: '',
      lhims_number: '',
      sample_type: '',
      selected_test: '',
    });
  };

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
    <OrdersContext.Provider
      value={{
        orders,
        setOrders,
        deleteOrder,
        markOrderAsCompleted,
        cancelOrders,
        addOrder,
      }}
    >
      {children}
    </OrdersContext.Provider>
  );
};
