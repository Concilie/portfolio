import React from "react";
import { Link } from "react-scroll";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';

const Navbar = () => {

    return (
    <div className="text-gray-400 dark:text-white body-font">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <span className="rounded-full bg-rose-500 w-16 h-16 flex items-center">
            <span className="m-auto text-xl font-semibold">WD</span>
        </span>
       
        <ul className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center font-bold text-gray-600 text-white">
            <li className="mr-5 hover:text-gray-900 dark:hover:text-rose-500"><Link activeClass="active" to="home" spy={true} smooth={true}>Home</Link></li>
            <li className="mr-5 hover:text-gray-900 dark:hover:text-rose-500"><Link to="about" spy={true} smooth={true}>About</Link></li>
            <li className="mr-5 hover:text-gray-900 dark:hover:text-rose-500"><Link to="skills" spy={true} smooth={true}>Skills</Link></li>
            <li className="mr-5 hover:text-gray-900 dark:hover:text-rose-500"><Link to="portfolio" spy={true} smooth={true}>Portfolio</Link></li>
            <li className="mr-5 hover:text-gray-900 dark:hover:text-rose-500"><Link to="contact" spy={true} smooth={true}>Contact</Link></li>
        </ul>
        <div className="text-gray-400">
            <a href="https://www.instagram.com/winnfreida/" className="hover:text-gray-900 dark:hover:text-rose-500"><InstagramIcon /></a>
            <a href="https://www.linkedin.com/in/winner-dedji-301576a4" className="hover:text-gray-900 dark:hover:text-rose-500"><LinkedInIcon /></a>
            <a className="hover:text-gray-900 dark:hover:text-rose-500" href="https://github.com/Concilie"><GitHubIcon /></a>
        </div>
    </div>
    </div>
    );
}

export default Navbar;