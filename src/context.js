import React from 'react';
import Data from './data';
import { useContext } from 'react';
const AppContext = React.createContext();
export const Context = ({ children }) => {
  return (
    <AppContext.Provider value={{ data: Data }}>{children}</AppContext.Provider>
  );
};
const useGlobalContext = () => {
  return useContext(AppContext);
};
export default useGlobalContext;
