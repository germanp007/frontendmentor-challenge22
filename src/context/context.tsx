import React, { ReactNode, createContext, useState } from "react";

interface MyContextType {
  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
}

interface MyContextProviderProps {
  children: ReactNode;
}

const MyContext = createContext<MyContextType | undefined>(undefined);

const MyContextProvider: React.FC<MyContextProviderProps> = ({ children }) => {
  const [value, setValue] = useState<number>(0);

  const contextValue: MyContextType = {
    value,
    setValue,
  };

  return (
    <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
  );
};

export default MyContextProvider;
