import React from 'react';
import Data from './data';
import { useContext, useState } from 'react';
const AppContext = React.createContext();
export const Context = ({ children }) => {
  const [data, setData] = useState(Data);
  const addToCart = (id) => {
    const newData = data.map((item) => {
      if (item.id == id) {
        return { ...item, inCart: true };
      }
      return item;
    });
    setData(newData);
  };
  return (
    <AppContext.Provider value={{ data, addToCart }}>
      {children}
    </AppContext.Provider>
  );
};
const useGlobalContext = () => {
  return useContext(AppContext);
};
export default useGlobalContext;
