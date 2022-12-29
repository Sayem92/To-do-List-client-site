import React, { useRef } from 'react';
import { AiFillFacebook, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import emailjs from '@emailjs/browser';
import { toast } from 'react-hot-toast';

const Contact = () => {
    const form = useRef();
   
    const sendEmail = (e) => {
        e.preventDefault();

        if (!e.target[0].value || !e.target[1].value || !e.target[2].value) {
            return toast.error("please enter a valid name, email address and description for this message.")
        }

        emailjs.sendForm(process.env.REACT_APP_SERVICE_EMAIL_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY)
            .then((result) => {
                // console.log(result.text);
                toast.success("send message");
                form.current.reset();
            },
                (error) => {
                    console.log(error.text);
                });
    };


    return (
        <section className="dark:bg-gray-900 pt-16">
            <h1 className="text-3xl text-center text-green-500 font-bold capitalize lg:text-4xl py-10">Contact Me
            </h1>
            <div className="container px-6 py-12 mx-auto">
                <div className="lg:flex lg:items-center lg:-mx-6">
                    <div className="lg:w-1/2 lg:mx-6">
                        <h1 className="text-3xl font-semibold capitalize dark:text-white lg:text-4xl">
                            Contact me for <br /> more info
                        </h1>

                        <div className="mt-6 space-y-8 md:mt-8">
                            <p className="flex items-start -mx-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-blue-500 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>

                                <span className="mx-2 truncate md:w-72 dark:text-gray-200">
                                    Moulvibazar, Bangladesh
                                </span>
                            </p>

                            <p className="flex items-start -mx-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-blue-500 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>

                                <span className="mx-2 truncate md:w-72 dark:text-gray-200">01748-433092</span>
                            </p>

                            <p className="flex items-start -mx-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-blue-500 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>

                                <span className="mx-2  truncate md:w-72 dark:text-gray-200">sayemmiha123@gmail.com</span>
                            </p>
                        </div>

                        <div className="mt-6 md:w-80 md:mt-8">
                            <h3 className="dark:text-gray-200">Follow me</h3>

                            <div className="flex mt-4 -mx-1.5 ">

                                <a href="https://web.facebook.com/sayemahmed.sum"> <AiFillFacebook className='text-3xl dark:text-gray-200 mr-3'></AiFillFacebook></a>

                                <a href="https://www.linkedin.com/in/sayem-miha/"> <AiFillLinkedin className='text-3xl dark:text-gray-200 mr-3'></AiFillLinkedin></a>

                                <a href="https://github.com/Sayem92"> <AiFillGithub className='text-3xl dark:text-gray-200'></AiFillGithub></a>

                            </div>
                        </div>
                    </div>

                    {/* form data  */}

                    <div className="mt-8 lg:w-1/2 lg:mx-6">
                        <div
                            className="w-full px-8 py-10 mx-auto overflow-hidden  rounded-lg shadow-2xl dark:bg-gray-900 lg:max-w-xl shadow-gray-400 dark:shadow-black/100 dark:border">
                            <h1 className="text-lg font-medium dark:text-gray-200">Contact me if you have any suggestions</h1>

                            <form ref={form} onSubmit={sendEmail} className="mt-6">
                                <div className="flex-1">
                                    <label className="block mb-2 text-sm dark:text-gray-200 ">Full Name</label>
                                    <input type="text" name="user_name" placeholder="Your Name" className="block w-full px-5 py-3 mt-2
                                     dark:text-gray-200
                                      placeholder-gray-900 dark:placeholder-gray-200
                                       bg-gray-200 
                                       border border-gray-200 rounded-md dark:bg-gray-900  dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                </div>

                                <div className="flex-1 mt-6">
                                    <label className="block mb-2 text-sm dark:text-gray-200">Email address</label>
                                    <input type="email" name="user_email" placeholder="Your Email" className="block w-full px-5 py-3 mt-2
                                     dark:text-gray-200
                                      placeholder-gray-900 dark:placeholder-gray-200
                                       bg-gray-200 
                                       border border-gray-200 rounded-md dark:bg-gray-900  dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                </div>

                                <div className="w-full mt-6">
                                    <label className="block mb-2 text-sm dark:text-gray-200">Description</label>
                                    <textarea name="message" className="block w-full h-32 px-5 py-3 mt-2 dark:text-gray-200
                                     placeholder-gray-900 dark:placeholder-gray-200 border
                                      border-gray-200 rounded-md 
                                      dark:bg-gray-900
                                       bg-gray-200  dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Message"></textarea>
                                </div>

                                <button type='submit' className="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-green-500 rounded-md hover:bg-green-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;