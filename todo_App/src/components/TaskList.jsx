import React from "react";
import TaskItem from "./TaskItem";
import { useTodo } from "../context/todoContext";

const TaskList = () => {
  const { todos, filterStatus } = useTodo();
  if (todos.length === 0) {
    return (
      <p className="text-center">
        No {filterStatus === "all" ? "todo" : filterStatus} yet
      </p>
    );
  }
  return (
    <ul className="space-y-3">
      {todos &&
        todos.map((todo) => (
          <TaskItem
            key={todo.id}
            id={todo.id}
            todo={todo.todo}
            duedate={todo.dueDate}
            completed={todo.completed}
          />
        ))}
    </ul>
  );
};

export default TaskList;
