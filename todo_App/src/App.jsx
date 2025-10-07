import React from "react";
import TaskInput from "./components/TaskInput";
import FilterBar from "./components/FilterBar";
import TaskList from "./components/TaskList";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-8">
      <div className="max-w-2xl mx-auto bg-white shadow-md rounded-md p-6">
        <h1 className="text-2xl font-bold mb-6 text-center">
          📝 Advanced To-Do App
        </h1>

        {/* Input */}
        <div className="mb-4">
          <TaskInput />
        </div>

        {/* Filters */}
        <div className="mb-4">
          <FilterBar />
        </div>

        {/* Tasks */}
        <TaskList />
      </div>
    </div>
  );
};

export default App;
