import React from "react";
import reactjs from "../assets/reactjs.png";
import nodejs from "../assets/nodejs.png";
import git from "../assets/git.png";
import js from "../assets/js.png";
import css from "../assets/css3.png";
import php from "../assets/php.png";
import mongodb from "../assets/mongodb.png";
import tailwind from "../assets/tailwind.png"

const Skills = () => {


  return (
    <section className="text-gray-600 body-font">
        <div className="flex flex-col items-center text-center justify-center">
            <h1 className="text-3xl font-medium title-font text-gray-900 dark:text-white ">Skills</h1>
            <div className="w-12 h-1 bg-rose-500 rounded mt-2 mb-4"></div>
    </div>
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      <div className="lg:w-1/4 sm:w-1/3 p-4">
        <div className="flex relative">
          <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src={nodejs} />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Shooting Stars</h1>
            <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/4 sm:w-1/3 p-4">
        <div className="flex relative">
          <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src={reactjs} />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">The Catalyzer</h1>
            <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/4 sm:w-1/3 p-4">
        <div className="flex relative">
          <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src={js} />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">The 400 Blows</h1>
            <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/4 sm:w-1/3 p-4">
        <div className="flex relative">
          <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src={css} />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Neptune</h1>
            <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/4 sm:w-1/3 p-4">
        <div className="flex relative">
          <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src={git} />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Holden Caulfield</h1>
            <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/4 sm:w-1/3 p-4">
        <div className="flex relative">
          <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src={php} />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Alper Kamu</h1>
            <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/4 sm:w-1/3 p-4">
        <div className="flex relative">
          <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src={mongodb} />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Alper Kamu</h1>
            <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/4 sm:w-1/3 p-4">
        <div className="flex relative">
          <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src={tailwind} />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Alper Kamu</h1>
            <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  );
}

export default Skills;
