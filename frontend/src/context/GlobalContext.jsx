import { createContext } from "react";
import useTasks from "../hooks/useTasks";

export const GlobalContext = createContext();

export function GlobalProvider({children}) {
  // Utilizza il custom hook useTasks per ottenere i dati dei task
  const taskData = useTasks();

  return (
    // Fornisce il contesto globale ai componenti figli
    <GlobalContext.Provider value={{ ...taskData }}>
      {children}
    </GlobalContext.Provider>
  );
}