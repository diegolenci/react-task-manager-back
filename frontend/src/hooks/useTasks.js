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

  async function addTask(newTask) {
    try {
      const res = await fetch(`${VITE_API_URL}/tasks`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(newTask)
      });
      const data = await res.json();
      if (data.success) {
        setTasks(prevTasks => [...prevTasks, data.task]);
        return data.task;
      } else {
        throw new Error(data.message);
      }
    } catch (err) {
      console.error("Errore nella richiesta di creazione task:", err);
      throw err;
    }
  }

  async function removeTask(taskId) {
    try {
      const res = await fetch(`${VITE_API_URL}/tasks/${taskId}`, {
        method: "DELETE"
      });
      const data = await res.json();
      if (data.success) {
        setTasks(prevTasks =>
          prevTasks.filter(
            task =>
              String(task._id) !== String(taskId) &&
              String(task.id) !== String(taskId)
          )
        );
        return true;
      } else {
        throw new Error(data.message);
      }
    } catch (err) {
      console.error("Errore nella richiesta di eliminazione task:", err);
      throw err;
    }
  }

  async function updateTask(updatedTask) {
    try {
      const res = await fetch(`${VITE_API_URL}/tasks/${updatedTask._id || updatedTask.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedTask)
      });
      const data = await res.json();
      if (data.success) {
        setTasks(prevTasks =>
          prevTasks.map(task =>
            (task._id === data.task._id || task.id === data.task.id)
              ? data.task
              : task
          )
        );
        return data.task;
      } else {
        throw new Error(data.message);
      }
    } catch (err) {
      console.error("Errore nella richiesta di aggiornamento task:", err);
      throw err;
    }
  }
    
  return {tasks, addTask, removeTask, updateTask};
}