import React from "react";
import reactjs from "../assets/react.png";
import nodejs from "../assets/nodejs.png";
import javascript from "../assets/javascript.png";
import mongodb from "../assets/mongodb.png";
import mysql from "../assets/mysql.png"
import tailwindcssSvg from "../assets/tailwindcss.svg"
import php from "../assets/PHP-logo.svg.png"
import laravel from "../assets/laravel.png"

const Skills = () => {


  return (
    <section id="skills" className="text-gray-600 body-font">
      <div className="flex flex-col items-center text-center justify-center">
          <h1 className="text-3xl font-medium title-font text-gray-900 dark:text-white ">Skills</h1>
          <div className="w-12 h-1 bg-rose-500 rounded mt-2 mb-4"></div>
    </div>
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      <div className="lg:w-1/4 sm:w-1/3 w-1/3 p-4">
        <div className="h-full w-full">
          <img alt="gallery" className="w-full" src={nodejs} />
        </div>
      </div>
      <div className="lg:w-1/4 sm:w-1/3 w-1/3 p-4">
        <div className="h-full w-full">
          <img alt="gallery" className="w-full" src={reactjs} />
        </div>
      </div>
      <div className="lg:w-1/4 sm:w-1/3 w-1/3 p-4">
        <div className="h-full w-full">
          <img alt="gallery" className="w-full pt-12 pb-12" src={php} />
        </div>
      </div>
      <div className="lg:w-1/4 sm:w-1/3 w-1/3 p-4">
        <div className="h-full w-full">
          <img alt="gallery" className="w-full" src={javascript} />
        </div>
      </div>
      <div className="lg:w-1/4 sm:w-1/3 w-1/3 p-4">
        <div className="h-full w-full">
          <img alt="gallery" className="w-full" src={laravel} />
        </div>
      </div>
      <div className="lg:w-1/4 sm:w-1/3 w-1/3 p-4">
        <div className="h-full w-full">
          <img alt="gallery" className="w-full pt-12 pb-12 md:w-56 lg:w-80" src={tailwindcssSvg} />
        </div>
      </div>
      <div className="lg:w-1/4 sm:w-1/3 w-1/3 p-4">
        <div className="h-full w-full">
          <img alt="gallery" className="w-full" src={mongodb} />
        </div>
      </div>
      <div className="lg:w-1/4 sm:w-1/3 w-1/3 p-4">
        <div className="h-full">
          <img alt="gallery" className="w-full" src={mysql} />
        </div>
      </div>      
    </div>
  </div>
</section>
  );
}

export default Skills;
