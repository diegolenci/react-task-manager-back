import { createContext, useState, useEffect } from "react";
const { VITE_API_URL} = import.meta.env;

export const GlobalContext = createContext();

export function GlobalProvider({children}) {
  // Stato per la lista dei task
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Recupera l'URL dal file .env
    fetch(`${VITE_API_URL}/tasks`)
      .then(res => res.json())
      .then(data => setTasks(data))
      .catch(err => console.error("Errore nel caricamento dei task:", err));
  }, []);

  return (
    // Fornisce il contesto globale ai componenti figli
    <GlobalContext.Provider value={{ tasks, setTasks }}>
      {children}
    </GlobalContext.Provider>
  );
}