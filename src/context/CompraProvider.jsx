import React, { createContext, useEffect, useState } from 'react';
export const ComprasContext = createContext();

export const ComprasProvider = ({ children }) => {
  const [compras, setCompras] = useState([]);
  const [total, setTotal] = useState(0)
  
  function verificarCompraEnLocalStorage() {
    const comprasLocalStorage = localStorage.getItem('compras');
    if (comprasLocalStorage) {
      const compras = JSON.parse(comprasLocalStorage);
      setCompras(compras);
    } else {
      // No hay una compra en el localStorage
      // Puedes realizar alguna acción adicional si lo deseas
    }
  }

  useEffect(() => {
    verificarCompraEnLocalStorage();
  }, []);

  return (
    <ComprasContext.Provider value={{ compras, setCompras, total, setTotal }}>
      {children}
    </ComprasContext.Provider>
  );
};