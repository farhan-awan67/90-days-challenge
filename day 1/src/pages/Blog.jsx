import React from "react";
import { blogs } from "../util/data";
import { Link, useParams } from "react-router-dom";
import NotFound from "./NotFound";

const Blog = () => {
  const { id } = useParams();
  const blog = blogs.find((blog) => blog.id.toString() === id);
  
  return (
    <>
      {blog ? (
        <div className="max-w-3xl mx-auto px-4 py-10">
          {/* go back */}
          <Link
            to="/"
            className="text-blue-600 hover:underline inline-block mb-4"
          >
            &larr; Back to Home
          </Link>
          {/* Title */}
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            {blog?.title}
          </h1>

          {/* Description / Content */}
          <div className="prose prose-lg max-w-none text-gray-700">
            {blog?.description}
          </div>
        </div>
      ) : (
        <NotFound />
      )}
    </>
  );
};

export default Blog;
