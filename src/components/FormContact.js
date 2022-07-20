import React, { useState, useRef } from "react";

import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

const FormContact = () => {
    const formRef = useRef();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [errorEmail, setErrorEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const emailValidation = () => {
        const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        if(!email || regex.test(email) === false) {
            setErrorEmail("Email is not valid")
            return false;
        } 
        
        return true
    }

   
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("formRef", formRef)
        if(emailValidation()) {
        emailjs.sendForm('service_bobnpom', 'template_8n0u15i', formRef.current, 'ZdCG-CzluuGZWWUev')
        .then((result) => {
            if(result.status === 200) {
                setName("");
                setEmail("");
                setSubject("");
                setMessage("");
                setErrorEmail("")

                toast.success("Success !", {
                    position: toast.POSITION.TOP_RIGHT
                  });
            
            }
        }, (error => {
            console.log(error)
        }));

    }

        
    }


    return(
        <section id="contact" className="text-gray-600 body-font">
            <div className="flex flex-col items-center text-center justify-center">
                <h1 className="text-3xl font-medium title-font text-gray-900 dark:text-white text-white">Contact me</h1>
                <div className="w-12 h-1 bg-rose-500 rounded mt-2 mb-4"></div>
            </div>
            <div className="container sm:w-full md:w-7/12 py-24 mx-auto">
                <form className="px-8 sm:px-8 md:px-3" ref={formRef} onSubmit={handleSubmit}>
                    <div className="flex flex-wrap gap-2 place-content-center">
                        <div className="w-full sm:w-full md:w-49prc">
                            <label className="uppercase text-xs font-bold mb-2">Name</label>
                            <input 
                                className="w-full py-3 px-4 bg-slate-800 text-slate-100 focus:outline-none focus:border focus:border-rose-500" 
                                type="text" 
                                name="name"
                                onChange={e => setName(e.target.value)}
                                value={name}
                                required
                            />
                        </div>
                        <div className="w-full sm:w-full md:w-49prc">
                            <label className="uppercase text-xs font-bold mb-2">Email</label>
                            <input 
                                className="w-full py-3 px-4 bg-slate-800 text-slate-100 focus:outline-none focus:border focus:border-rose-500" 
                                type="text" 
                                name="email"
                                onChange={e => setEmail(e.target.value)}
                                value={email}
                                required
                            />
                            <span className="text-red-600">{errorEmail}</span>
                        </div>
                    </div>
                    <div className="w-full mt-6">
                        <label className="uppercase text-xs font-bold mb-2">Subject</label>
                        <input 
                            className="w-full py-3 px-4 bg-slate-800 text-slate-100 focus:outline-none focus:border focus:border-rose-500" 
                            type="text" 
                            name="subject"
                            onChange={e => setSubject(e.target.value)}
                            value={subject}
                            required
                        />
                    </div>
                    <div className="w-full mt-6">
                        <label className="uppercase text-xs font-bold mb-2">Message</label>
                        <textarea 
                            className="w-full h-32 py-3 px-4 bg-slate-800 text-slate-100 focus:outline-none focus:border focus:border-rose-500" 
                            name="message"
                            onChange={e => setMessage(e.target.value)}
                            value={message}
                            required
                        >
                        </textarea>
                    </div>
                    <input type="submit" className="text-white border-solid border-2 border-rose-500 rounded-md py-2 px-6 hover:bg-white float-right hover:bg-rose-500" value="Envoyer"/>
                    <ToastContainer />
                </form>
            </div>
        </section>
    );
}


export default FormContact;