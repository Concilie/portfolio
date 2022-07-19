import React from "react";
import img2 from "../assets/img2.jpg";
import woman from "../assets/woman.png";

const About = () => {


  return (
    <section id="about" className="text-gray-400 body-font">
    <div className="flex flex-col items-center text-center justify-center">
        <h1 className="text-3xl font-medium title-font text-gray-900 dark:text-white ">About</h1>
        <div className="w-12 h-1 bg-rose-500 rounded mt-2 mb-4"></div>
    </div>
    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
        <img className="object-cover object-center rounded" alt="hero" src={woman} />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left sm:text-left items-center text-center">
        <p className="mb-8 leading-relaxed">
        My name is Winner and I love bringing projects to life and solving problems. Combining these two enabled in my work as a web development engineer is a real pleasure.
      Versatile, dynamic, I have knowledge of various web technologies and a great ability to adapt.<br/>
    Here is a few technologies i've been working with recently : <br/>
        <div className="flex flex-row gap-36 m-4">
        <ul class="list-disc">
          <li>Node js</li>
          <li>PHP</li>
          <li>mongodb</li>
        </ul>

        <ul class="list-disc">
          <li>JS(ES6+)</li>
          <li>React</li>
          <li>Laravel</li>
        </ul>
        </div>
          </p>
        </div>
    </div>
    </section>
  );
}

export default About;
