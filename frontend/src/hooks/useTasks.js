import { useState, useEffect } from "react";
const { VITE_API_URL} = import.meta.env;


export default function useTasks() {
// Stato per la lista dei task
const [tasks, setTasks] = useState([]);

useEffect(() => {
    // Recupera l'URL dal file .env
    fetch(`${VITE_API_URL}/tasks`)
      .then(res => res.json())
      .then(data => setTasks(data))
      .catch(err => console.error("Errore nel caricamento dei task:", err));
  }, []);

  function addTask() {
    // Da implementare
  }

  function removeTask() {
    // Da implementare
  }

  function updateTask() {
    // Da implementare
  }
    
  return {tasks, addTask, removeTask, updateTask};
}