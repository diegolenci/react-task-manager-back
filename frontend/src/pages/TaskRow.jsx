import React from "react";
import { Link } from "react-router-dom";

function TaskRow({ task }) {
  // Mostra solo le righe title, status e createdAt
  return (
    <tr>
      <td>
        <Link to={`/task/${task.id}`}>{task.title}</Link>
      </td>
      <td
        style={{
          backgroundColor:
            task.status === "To do"
              ? "red"
              : task.status === "Doing"
              ? "yellow"
              : task.status === "Done"
              ? "green"
              : "transparent",
        }}
      >
        {task.status}
      </td>
      <td>{new Date(task.createdAt).toLocaleDateString()}</td>
    </tr>
  );
}
// avvolto in React.memo per evitare il re-rendering
export default React.memo(TaskRow);
