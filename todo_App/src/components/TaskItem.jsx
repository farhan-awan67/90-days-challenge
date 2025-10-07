import React, { useState } from "react";
import { useTodo } from "../context/todoContext";

const TaskItem = ({ todo, duedate, completed, id }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo);
  const [newDate, setNewDate] = useState(duedate || "");
  const { toggleTodoCompleted, deleteTodo, updateTodo } = useTodo();

  return (
    <li className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-gray-50 border rounded p-3">
      <div className="flex items-start gap-3 w-full">
        {isEditing ? (
          <>
            <input
              value={newText}
              onChange={(e) => setNewText(e.target.value)}
              className="border rounded px-2 py-1 w-full"
            />
            <input
              type="date"
              value={newDate}
              onChange={(e) => setNewDate(e.target.value)}
              className="border rounded px-2 py-1 mr-3"
            />
          </>
        ) : (
          <>
            <input
              type="checkbox"
              className="mt-1"
              onChange={() => toggleTodoCompleted(id)}
              checked={completed}
            />
            <div className="flex flex-col">
              <span
                className={`${completed ? "line-through text-gray-400" : ""}`}
              >
                {todo}
              </span>
              <span className="text-sm text-gray-500">
                Due: {duedate || "N/A"}
              </span>
            </div>
          </>
        )}

        {/* <div className="flex flex-col w-full">
          <p className={`font-medium ${completed ? "line-through" : ""}`}>
            {todo}
          </p>
          <p className="text-sm text-gray-500">Due: {duedate}</p>
        </div> */}
      </div>

      <div className="flex gap-2 mt-2 sm:mt-0">
        {isEditing ? (
          <button
            onClick={() => (
              updateTodo(newText, newDate, id), setIsEditing(!isEditing)
            )}
            className="text-green-600 hover:text-green-800 text-sm cursor-pointer"
          >
            Save
          </button>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="text-blue-600 hover:text-blue-800 text-sm cursor-pointer"
          >
            Edit
          </button>
        )}
        {isEditing ? (
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="text-red-600 hover:text-red-800 text-sm cursor-pointer"
          >
            Cancel
          </button>
        ) : (
          <button
            onClick={() => deleteTodo(id)}
            className="text-red-600 hover:text-red-800 text-sm cursor-pointer"
          >
            Delete
          </button>
        )}
      </div>
    </li>
  );
};

export default TaskItem;
