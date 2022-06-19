import React from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';

const Navbar = () => {

    return (
    <div className="text-gray-600 dark:text-white body-font">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 dark:text-white mb-4 md:mb-0">
        
        <span className="ml-3 text-xl italic">WD</span>
        </a>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center font-bold text-gray-600 dark:text-white">
        <a className="mr-5 hover:text-gray-900 dark:hover:text-rose-500">Home</a>
        <a className="mr-5 hover:text-gray-900 dark:hover:text-rose-500">About</a>
        <a className="mr-5 hover:text-gray-900 dark:hover:text-rose-500">Skills</a>
        <a className="mr-5 hover:text-gray-900 dark:hover:text-rose-500">Portfolio</a>
        <a className="mr-5 hover:text-gray-900 dark:hover:text-rose-500">Contact</a>
        </nav>
        <div className="text-gray-600">
            <span className="hover:text-gray-900 dark:hover:text-rose-500"><InstagramIcon /></span>
            <span className="hover:text-gray-900 dark:hover:text-rose-500"><LinkedInIcon /></span>
            <span className="hover:text-gray-900 dark:hover:text-rose-500"><GitHubIcon /></span>
        </div>
    </div>
    </div>
    );
}

export default Navbar;