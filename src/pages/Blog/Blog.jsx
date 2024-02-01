import React from 'react';
import blogData from "./blogData.json"
import { useTheme } from "../../context/ThemeContext";
import BlogCard from '../../components/Blog/BlogCard';

export default function Blog() {

    const { isDarkMode } = useTheme();

    return (
        <div className={`flex flex-col items-center mt-[90px] pb-20 pt-6`} style={isDarkMode? {backgroundColor: "#1a1a1a",
            color: "#ffffff"}: {backgroundImage: 'linear-gradient(rgb(255, 255, 255), rgb(241, 234, 250) 48%, rgb(255, 255, 255))'}}>
            <div className={`border border-gray-200 py-2 px-6 text-gray-600 rounded-full text-sm font-semibold ${!isDarkMode ? "bg-white" :"bg-black"}`}>
                Our Blogs
            </div>
            <h1 className='text-5xl font-semibold max-w-[400px] text-center py-4'>Reviews From Our Client</h1>
            <div className='grid grid-cols-3 gap-8 w-[60%] mt-6'>
            {blogData && blogData.map(el => <BlogCard {...el} />)}
            </div>
        </div>
    );

}    