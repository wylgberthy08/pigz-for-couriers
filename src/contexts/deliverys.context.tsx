import React, { useContext, useState } from "react";

export const Deliverys = React.createContext({});

export function TransactionsDeliveryProvider({ children }) {
  const [accepted, setAccepted] = useState(0);
  const [rejected, setRejected] = useState(0);
  const [total, setTotal] = useState(0);

  function acceptDelivery() {
    setAccepted((prev) => prev + 1);
    setTotal((prev) => prev + 1);
  }

  function handlerejectDelivery() {
    setRejected((prev) => prev + 1);
    setTotal((prev) => prev + 1);
  }

  const contextValue = {
    accepted,
    rejected,
    total,
    acceptDelivery,
    handlerejectDelivery,
  };

  return (
    <Deliverys.Provider value={contextValue}>{children}</Deliverys.Provider>
  );
}

export function useDeliverys() {
  const context = useContext(Deliverys);
  return context;
}
