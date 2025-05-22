import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import useTasks from "../hooks/useTasks";

export default function TaskDetail() {
    
    const { id } = useParams();
    const { tasks } = useContext(GlobalContext);
    const { removeTask } = useTasks();
    const navigate = useNavigate();

    // Cerca la task sia per _id che per id, confrontando come stringa
    const task = tasks.find(
        (task) =>
            String(task._id) === String(id) ||
            String(task.id) === String(id)
    );
    if (!task) {
        return <div>Task non trovato</div>;
    }

    function handleDelete() {
        removeTask(task._id)
            .then(() => {
                alert("Task eliminata con successo!");
                navigate("/");
            })
            .catch(err => {
                alert("Errore: " + err.message);
            });
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