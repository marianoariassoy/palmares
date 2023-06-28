import { useState, createContext } from "react";

export const Context = createContext(null);

type Props = {
  children: React.ReactNode;
};

export const ContextProvider = ({ children }: Props) => {
  const [homeSection, setHomeSection] = useState(true);

  return <Context.Provider value={{ homeSection, setHomeSection }}>{children}</Context.Provider>;
};
