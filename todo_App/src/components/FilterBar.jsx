import React from "react";
import { useTodo } from "../context/todoContext";

const FilterBar = () => {
  const { setFilterStatus, filterStatus } = useTodo();
  return (
    <div className="flex justify-center gap-3">
      <button
        onClick={() => setFilterStatus("all")}
        className={`px-4 py-1 rounded cursor-pointer ${
          filterStatus === "all"
            ? "bg-blue-600 text-white"
            : "bg-gray-200 text-black"
        }  `}
      >
        All
      </button>
      <button
        onClick={() => setFilterStatus("completed")}
        className={`px-4 py-1 rounded cursor-pointer ${
          filterStatus === "completed"
            ? "bg-blue-600 text-white"
            : "bg-gray-200 text-black"
        }`}
      >
        Completed
      </button>
      <button
        onClick={() => setFilterStatus("pending")}
        className={`px-4 py-1 rounded cursor-pointer ${
          filterStatus === "pending"
            ? "bg-blue-600 text-white"
            : "bg-gray-200 text-black"
        }`}
      >
        Pending
      </button>
    </div>
  );
};

export default FilterBar;
