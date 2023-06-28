import { useContext } from "react";
import { Context } from "./context.js";

export const useDataContext = () => {
  const context = useContext(Context);
  if (!context) {
    throw new Error("useDataContext must be used within a Provider");
  }
  return context;
};
