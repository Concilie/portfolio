import React from "react";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
import Skills from "../components/Skills";
import DownloadIcon from '@mui/icons-material/Download';
import img1 from "../assets/img1.jpg";
import img0 from "../assets/img0.png";
import im from "../assets/10168.jpg"


const Accueil = () => {


  return (
    <div className="home">
      <section className="text-gray-600 dark:text-gray-400 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h3 className="dark:text-rose-500">Hi my name is,</h3>
          <h1 className="title-font sm:text-4xl text-3xl font-medium text-gray-900 dark:text-white">Winner DEDJI</h1>
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium">I'm a full stack developer</h1>
          <p className="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
          <div className="justify-center">
            <button className="text-white border-solid border-2 border-sky-500 dark:border-rose-500 rounded-none py-2 px-6">Download CV
            <DownloadIcon />
            </button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img className="object-cover object-center rounded" alt="hero" src={im} />
        </div>
      </div>
    </section>
    <About />
    <Skills />
    <Portfolio />
    </div>
  );
}

export default Accueil;
