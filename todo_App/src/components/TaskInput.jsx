import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useTodo } from "../context/todoContext";

export default function TaskInput({ onAdd }) {
  const { addTodo } = useTodo();
  const [text, setText] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(text, dueDate);
    setText("");
    setDueDate("");
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
      <input
        type="text"
        placeholder="Task name"
        className="flex-1 px-4 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <input
        type="date"
        className="px-4 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition cursor-pointer"
      >
        Add
      </button>
    </form>
  );
}
