import React, {createContext, ReactNode, useContext, useState} from 'react';

type BackgroundContext = {
  temaEscuro: boolean;
  handleToggle: () => void;
};

type BackgroundProvider = {
  children: ReactNode;
};

export const BackgroundContext = createContext({} as BackgroundContext);

export const BackgroundProvide = ({children}: BackgroundProvider) => {
  const [dark, setDark] = useState(false);

  const handleToggle = () => setDark(prev => !prev);

  return (
    <BackgroundContext.Provider value={{temaEscuro: dark, handleToggle}}>
      {children}
    </BackgroundContext.Provider>
  );
};
export function useBackgroundContext() {
  return useContext(BackgroundContext);
}
