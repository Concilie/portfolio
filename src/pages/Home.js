import React from "react";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
import Skills from "../components/Skills";
import FormContact from "../components/FormContact";
import CodeIcon from '@mui/icons-material/Code';
import CodeOffIcon from '@mui/icons-material/CodeOff';
import DataObjectIcon from '@mui/icons-material/DataObject';
import TerminalIcon from '@mui/icons-material/Terminal';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import { Link } from "react-scroll";



const Accueil = () => {


  return (
    <div className="home">
      <section className="text-gray-600 dark:text-gray-400 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-5xl font-medium text-rose-500">Hi, I am Winner DEDJI <SentimentVerySatisfiedIcon /></h1>
          <h1 className="title-font sm:text-6xl mb-4 font-medium">I'm a full stack developer</h1>
          <p className="mb-8 leading-relaxed">With extensive knowledge and years of experience. I specialise on creating interactive experiences and fonctional interface using React js, Node js, PHP, Mongodb.</p>
          
          <div className="justify-center">
            <button className="text-white border-solid border-2 border-sky-500 dark:border-rose-500 rounded-none py-2 px-6"><Link to="contact" spy={true} smooth={true}>Contact me</Link></button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <div className=" w-full">
            <CodeIcon />
            <DataObjectIcon className="block float-right" />
          </div>
        
        <div className="flex flex-row items-center place-content-center">
          <svg width="400" height="450" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#FF0066" d="M24.7,-42.6C37.5,-35.3,57.4,-39.9,69.4,-34.8C81.5,-29.7,85.8,-14.9,80.9,-2.9C75.9,9.1,61.6,18.2,51.2,26.2C40.8,34.2,34.2,41.1,26.4,48.6C18.5,56.1,9.2,64.3,1.4,61.8C-6.4,59.3,-12.7,46.2,-17.8,37.1C-23,28,-26.8,22.8,-39.6,17.3C-52.3,11.8,-73.9,5.9,-76.4,-1.4C-78.9,-8.8,-62.2,-17.6,-53.8,-30.6C-45.5,-43.6,-45.3,-60.9,-37.7,-71.1C-30.1,-81.4,-15,-84.7,-4.6,-76.8C5.9,-68.9,11.8,-49.8,24.7,-42.6Z" transform="translate(100 100)" />
          </svg>
        </div>
        <div className=" w-full">
          <TerminalIcon />
          <CodeOffIcon className="block float-right" />
        </div>
        
       
        </div>
      </div>
    </section>
    <About />
    <Skills />
    <Portfolio />
    <FormContact />
    </div>
  );
}

export default Accueil;
