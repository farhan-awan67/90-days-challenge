import React from "react";
import { blogs } from "../util/data.js";
import { Link } from "react-router-dom";

const Card = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {blogs.map((blog) => (
        <Link
          to={`/blog/${blog.id}`}
          key={blog.id}
          className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition cursor-pointer"
        >
          <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
          <p className="text-gray-600">{blog.description}</p>
        </Link>
      ))}
    </div>
  );
};

export default Card;
