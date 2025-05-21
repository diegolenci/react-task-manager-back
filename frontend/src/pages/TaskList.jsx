import { useContext } from "react"
import { GlobalContext } from "../context/GlobalContext"
import TaskRow from "./TaskRow";

export default function TaskList() {

    // Recupera il contesto globale e accede alla lista dei task
    const { tasks } = useContext(GlobalContext);
    console.log(tasks);

    return (
        <>
            <h1>Task List</h1>
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Stato</th>
                        <th>Data di Creazione</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map(task => (
                        <TaskRow key={task.id} task={task} />
                    ))}
                </tbody>
            </table>
        </>
    )
}