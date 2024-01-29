import React from 'react'
import {useTheme} from "../../context/ThemeContext"

export default function BlogCard({ id, heading, content, link, profile }) {

  const { isDarkMode } = useTheme();

  return (
    <div className={`border border-gray-50 rounded-3xl p-6 shadow-sm ${isDarkMode ? "text-white bg-black" :"text-[#677084] bg-white"}`}>
      <h1 className='text-xl font-medium'>{heading}</h1>
      <p>{content}</p>
      <div className='flex gap-4 items-center mt-12'>
        <div className='w-12 h-12 rounded-full bg-[#eeeeee] overflow-hidden'>
        <img src={profile?.img || ""} alt="img" className='w-full h-auto'/>
        </div>
        <div>
          <p className={`font-semibold ${isDarkMode ? "text-white": "text-gray-600"}`}>{profile?.name || ""}</p>
          <p className='text-xs'>{profile?.job || ""}</p>
        </div>
      </div>
    </div>
  )
}
