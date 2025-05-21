import React from "react";

function TaskRow({ task }) {
  // Mostra solo le righe title, status e createdAt
  return (
    <tr>
      <td>{task.title}</td>
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
