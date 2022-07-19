import React from "react";
import todoapp from "../assets/todoapp.png";
import classroom from "../assets/classroom2.png";
import usersManag from "../assets/usersManag.png";
import usersjwt from "../assets/usersjwt.png";
import website from "../assets/website.png";
import gdpr from "../assets/gdpr.png";


const Portfolio = () => {


    return (
        <section id="portfolio" className="text-gray-600 body-font">
        <div className="flex flex-col items-center text-center justify-center">
            <h1 className="text-3xl font-medium title-font text-gray-900 dark:text-white ">Portfolio</h1>
            <div className="w-12 h-1 bg-rose-500 rounded mt-2 mb-4"></div>
        </div>
        {/* <div className="container px-5 py-24 mx-auto flex flex-wrap">
            <div className="flex flex-wrap md:-m-2 -m-1">
            <div className="flex flex-wrap w-1/2">
                <div className="md:p-2 p-1 w-1/2">
                <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://dummyimage.com/500x300" />
                </div>
                <div className="md:p-2 p-1 w-1/2">
                <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://dummyimage.com/501x301" />
                </div>
                <div className="md:p-2 p-1 w-full">
                    <img alt="gallery" className="w-full h-full object-cover object-center block" src={ projet1 } />
                    <div className="px-8 py-10 relative bg-slate-900 opacity-0 hover:opacity-100">
                        <span>HELLO TEST</span>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap w-1/2">
                <div className="md:p-2 p-1 w-full">
                <img alt="gallery" className="w-full h-full object-cover object-center block" src={ projet2 } />
                </div>
                <div className="md:p-2 p-1 w-1/2">
                <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://dummyimage.com/502x302" />
                </div>
                <div className="md:p-2 p-1 w-1/2">
                <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://dummyimage.com/503x303" />
                </div>
            </div>
            </div>
        </div> */}


        <div className="container px-3 py-24 mx-auto">
            <div className="gap-10 flex flex-wrap place-content-center">
                <div className="h-108 w-75 bg-rose-500 rounded-lg text-center w-full">
                    <div className="relative group">
                    <div className="flex flex-col p-8 h-full w-full">
                    <div className="text-white font-bold text-2xl">
                        Todo app
                    </div>
                    <div className="m-4">
                        <img alt="todoapp" className="w-full" src={todoapp}/>
                        
                    </div>
                    <div className="flex flex-row gap-2 w-full text-xs font-semibold justify-center">
                        <span className="rounded-full bg-white py-px px-2 ">Laravel</span>
                        <span className="rounded-full bg-white py-px px-2">Boostrap</span>
                        <span className="rounded-full bg-white py-px px-2">Mongodb</span>
                    </div>
                    </div>
                    
                    <div className="flex items-center bg-slate-900 p-6 absolute rounded-br-lg rounded-tr-xl top-20 left-0 w-60 h-48 invisible group-hover:visible motion-reduce:animate-bounce">
                       <p className="text-left text-gray-400">
                      TODO app is basically a list of the tasks that you have to do, or things that you want to do. The purpose is to learn the basics of Laravel
                      
                       </p>
                    </div>
                    </div>

                </div>
                <div className="h-108 w-75 bg-rose-500 rounded-lg text-center w-full">
                    <div className="relative group">
                    <div className="flex flex-col p-8 h-full w-full">
                    <div className="text-white font-bold text-2xl">
                        Site vitrine
                    </div>
                    <div className="m-4">
                        <img alt="todoapp" className="w-full" src={website}/>
                    </div>
                    <div className="flex flex-row gap-2 w-full text-xs font-semibold justify-center">
                        <span className="rounded-full bg-white py-px px-2 ">php</span>
                        <span className="rounded-full bg-white py-px px-2">html/css</span>
                    </div>
                    </div>

                    <div className="flex items-center bg-slate-900 p-6 absolute rounded-br-lg rounded-tr-xl top-20 left-0 w-60 h-48 invisible group-hover:visible motion-reduce:animate-bounce">
                       <p className="text-left text-gray-400 justify-center">
                       This project presents the products or services of an organization online
                       </p>
                    </div>
                    </div>

                </div>
                <div className="h-108 w-75 bg-rose-500 rounded-lg text-center w-full">
                    <div className="relative group">
                    <div className="flex flex-col p-8 h-full w-full">
                    <div className="text-white font-bold text-2xl">
                        RGPDpourTous
                    </div>
                    <div className="m-4">
                        <img alt="todoapp" className="w-full" src={gdpr}/>
                    </div>
                    <div className="flex flex-wrap gap-2 w-full text-xs font-semibold justify-center">
                        <span className="rounded-full bg-white py-px px-2 ">Node js / Express js</span>
                        <span className="rounded-full bg-white py-px px-2">php</span>
                        <span className="rounded-full bg-white py-px px-2">ejs</span>
                        <span className="rounded-full bg-white py-px px-2">html / css / js</span>
                        <span className="rounded-full bg-white py-px px-2">Mongodb</span>
                    </div>
                    </div>

                    <div className="flex items-center bg-slate-900 p-6 absolute rounded-br-lg rounded-tr-xl top-20 left-0 w-60 h-48 invisible group-hover:visible motion-reduce:animate-bounce">
                       <p className="text-left text-gray-400">
                       This project was developed to enable organizations to comply with the GDPR.
                       </p>
                    </div>
                    </div>

                </div>
                <div className="h-108 w-75 bg-rose-500 rounded-lg text-center w-full">
                    <div className="relative group">
                    <div className="flex flex-col p-8 h-full w-full">
                    <div className="text-white font-bold text-2xl">
                        Mansah
                    </div>
                    <div className="m-4">
                        <img alt="todoapp" className="w-full" src={classroom}/>
                    </div>
                    <div className="flex flex-wrap gap-2 w-full text-xs font-semibold justify-center">
                        <span className="rounded-full bg-white py-px px-2 ">Node js / Express js / Socket.io</span>
                        <span className="rounded-full bg-white py-px px-2">React js</span>
                        <span className="rounded-full bg-white py-px px-2">Mongodb</span>
                    </div>
                    </div>

                    <div className="flex items-center bg-slate-900 p-6 absolute rounded-br-lg rounded-tr-xl top-20 left-0 w-60 h-48 invisible group-hover:visible motion-reduce:animate-bounce">
                       <p className="text-left text-gray-400">
                       A personal project under development for knowledge sharing. Students to take private lessons and teachers to share their knowledge
                       </p>
                    </div>
                    </div>

                </div>
                <div className="h-108 w-75 bg-rose-500 rounded-lg text-center w-full">
                    <div className="relative group">
                    <div className="flex flex-col p-8 h-full w-full">
                    <div className="text-white font-bold text-2xl">
                        JWT
                    </div>
                    <div className="m-4">
                        <img alt="todoapp" className="w-full" src={usersjwt}/>
                    </div>
                    <div className="flex flex-wrap gap-2 w-full text-xs font-semibold justify-center">
                        <span className="rounded-full bg-white py-px px-2 ">Node js / Express js</span>
                        <span className="rounded-full bg-white py-px px-2">React js</span>
                        <span className="rounded-full bg-white py-px px-2">Mongodb</span>
                    </div>
                    </div>

                    <div className="flex items-center bg-slate-900 p-6 absolute rounded-br-lg rounded-tr-xl top-20 left-0 w-60 h-48 invisible group-hover:visible motion-reduce:animate-bounce">
                       <p className="text-left text-gray-400">
                       This project is an API developpement using JSON Web Token authentification with Node js 
                       </p>
                    </div>
                    </div>

                </div>

                <div className="h-108 w-75 bg-rose-500 rounded-lg text-center w-full">
                    <div className="relative group">
                    <div className="flex flex-col p-8 h-full w-full">
                    <div className="text-white font-bold text-2xl">
                        API/User
                    </div>
                    <div className="m-4">
                        <img alt="todoapp" className="w-full" src={usersManag}/>
                    </div>
                    <div className="flex flex-wrap gap-2 w-full text-xs font-semibold justify-center">
                        <span className="rounded-full bg-white py-px px-2 ">Node js / Express js</span>
                        <span className="rounded-full bg-white py-px px-2">Mongodb</span>
                    </div>
                    </div>

                    <div className="flex items-center bg-slate-900 p-6 absolute rounded-br-lg rounded-tr-xl top-20 left-0 w-60 h-48 invisible group-hover:visible motion-reduce:animate-bounce">
                       <p className="text-left text-gray-400">
                       This project is a sample API authentification for user registration and login with JWT.
                       </p>
                    </div>
                    </div>

                </div>
            </div>
        </div>
        </section>
    );
}

export default Portfolio;