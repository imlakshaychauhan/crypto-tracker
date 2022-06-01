import React, { createContext, useContext, useState, useEffect } from "react";

const crypto = createContext();

const CryptoContext = ({ children }) => {
  const [currency, setCurrency] = useState("INR");
  const [symbol, setSymbol] = useState("₹");
  useEffect(() => {
    if (currency === "INR") setSymbol("₹");
    else if (currency === "USD") setSymbol("$");
  }, [currency]);

  return <crypto.Provider value={{currency, symbol, setCurrency, setSymbol}} >{children}</crypto.Provider>;
};

export default CryptoContext;

export const CryptoState = () => {
  return useContext(crypto);
};
