import { useParams } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

export default function TaskDetail() {
    
    const { id } = useParams();
    const { tasks } = useContext(GlobalContext);

    const task = tasks.find((task) => task.id === parseInt(id));
    if (!task) {
        return <div>Task non trovato</div>;
    }

    function handleDelete() {
        console.log("Elimino task", task.id);
    }

    return (
        <div>
            <h1>Dettagli del Task</h1>
            <div><strong>Nome:</strong> {task.title}</div>
            <div><strong>Descrizione:</strong> {task.description}</div>
            <div><strong>Stato:</strong> {task.status}</div>
            <div><strong>Data di creazione:</strong> {new Date(task.createdAt).toLocaleDateString()}</div>
            <button onClick={handleDelete}>Elimina Task</button>
        </div>
    );
}