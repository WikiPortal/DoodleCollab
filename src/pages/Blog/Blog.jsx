import React from "react";
import blogData from "./blogData.json";
import { useTheme } from "../../context/ThemeContext";
import BlogCard from "../../components/Blog/BlogCard";
import "./blog.css"

export default function Blog() {
  const { isDarkMode } = useTheme();

  return (
    <section
      className={`blog-section ${isDarkMode ? "dark-mode" : "white-mode"}`}
    >
      <div className={`flex flex-col items-center pb-20 pt-6`}>
        <div
          className={`border border-gray-200 py-2 px-6 text-gray-600 rounded-full text-sm font-semibold`}
        >
          Our Blogs
        </div>
        <h1 className="text-5xl font-semibold max-w-[400px] text-center py-4">
          Reviews From Our Client
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 px-4 sm:px-8 lg:px-16 xl:px-0 gap-8 xl:w-[60%] mt-6">
          {blogData && blogData.map((el) => <BlogCard {...el} />)}
        </div>
      </div>
    </section>
  );
}
