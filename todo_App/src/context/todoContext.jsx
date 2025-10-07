import { createContext, useContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [filterStatus, setFilterStatus] = useState("all"); // "all" | "completed" | "pending"
  const [isInitialized, setIsInitialized] = useState(false); // 👈 tracks if localStorage has

  // Load todos from localStorage ONCE on first render
  useEffect(() => {
    const localTodos = JSON.parse(localStorage.getItem("todos"));
    if (localTodos) {
      setTodos(localTodos);
    }
    setIsInitialized(true); // ✅ Mark as initialized
  }, []);

  //  Save todos to localStorage — but ONLY after first load
  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  }, [todos, isInitialized]);

  // add todo
  const addTodo = (text, dueDate) => {
    setTodos((prev) => {
      return [
        ...prev,
        { id: uuidv4(), todo: text.trim(), dueDate, completed: false },
      ];
    });
  };

  // complete todo
  const toggleTodoCompleted = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // updateTodo
  const updateTodo = (newText, newDueDate, id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id
          ? { ...todo, todo: newText.trim(), dueDate: newDueDate }
          : todo
      )
    );
  };

  // delete todo
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  // filter todos

  const filteredTodos = todos.filter((todo) => {
    if (filterStatus === "completed") return todo.completed;
    if (filterStatus === "pending") return !todo.completed;
    return true; // all
  });

  const value = {
    todos: filteredTodos,
    setTodos,
    addTodo,
    toggleTodoCompleted,
    deleteTodo,
    updateTodo,
    // completedTodos,
    setFilterStatus,
    filterStatus,
  };
  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

export const useTodo = () => {
  return useContext(TodoContext);
};
