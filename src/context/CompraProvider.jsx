import React, { createContext, useEffect, useState } from 'react';
export const ComprasContext = createContext();

export const ComprasProvider = ({ children }) => {
  const [compras, setCompras] = useState([]);
  const [total, setTotal] = useState(0)

  return (
    <ComprasContext.Provider value={{ compras, setCompras, total, setTotal }}>
      {children}
    </ComprasContext.Provider>
  );
};