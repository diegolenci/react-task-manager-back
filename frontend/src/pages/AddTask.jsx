import { useState, useRef } from "react";

export default function Addtask() {
    const [title, setTitle] = useState("");
    const descriptionRef = useRef();
    const statusRef = useRef();
    const [error, setError] = useState("");
    
    const symbols = "!@#$%^&*()-_=+[]{}|;:'\\\",.<>?/`~";

    //gestisce l'invio del form
    // controlla se il campo titolo è vuoto o contiene simboli speciali
    function handleSubmit(e) {
        e.preventDefault();
        if (!title.trim()) {
            setError("Il campo Nome del task non può essere vuoto.");
            return;
        }
        if ([...title].some(char => symbols.includes(char))) {
            setError("Il campo Nome del task non può contenere simboli speciali.");
            return;
        }
        setError("");
        // Se il titolo è valido, crea un oggetto task da aggiungere
        const task = {
            title,
            description: descriptionRef.current?.value || "",
            status: statusRef.current?.value || "To do",
        };
        console.log(task);
    }

    return (
        <>
            <h1>Aggiungi task</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Nome del task:
                        <input
                            type="text"
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                        />
                    </label>
                </div>
                {error && (
                    <div style={{ color: "red" }}>{error}</div>
                )}
                <div>
                    <label>
                        Descrizione:
                        <textarea ref={descriptionRef} />
                    </label>
                </div>
                <div>
                    <label>
                        Stato:
                        <select ref={statusRef} defaultValue="To do">
                            <option value="To do">To do</option>
                            <option value="Doing">Doing</option>
                            <option value="Done">Done</option>
                        </select>
                    </label>
                </div>
                <button type="submit">Aggiungi Task</button>
            </form>
        </>
    );
}