import React, { useState } from "react";

export default function TodoCard({ children, index, handleDeleteTodo, handleEditTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newTodo, setNewTodo] = useState(children); // Store new text

  function saveEdit() {
    if (newTodo.trim()) { // Prevent empty todos
      handleEditTodo(index, newTodo.trim()); // Update todo
      setIsEditing(false); // Exit edit mode
    }
  }

  return (
    <li className="todoItem">
      {isEditing ? (
        <div className="editContainer">
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            className="editInput"
            autoFocus
          />
          <button className="saveBtn" onClick={saveEdit}>Save</button>
        </div>
      ) : (
        <span>{children}</span>
      )}

      <div className="actionContainer">
        {!isEditing && ( // Hide buttons when editing
          <>
            <button onClick={() => setIsEditing(true)}>
              <i className="fa-solid fa-pen-to-square"></i>
            </button>
            <button onClick={() => handleDeleteTodo(index)}>
              <i className="fa-regular fa-trash-can"></i>
            </button>
          </>
        )}
      </div>
    </li>
  );
}
