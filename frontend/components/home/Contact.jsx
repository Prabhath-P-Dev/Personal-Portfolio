import React, { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { MdEmail } from "react-icons/md";
import api from "../../configs/api";
import {LoaderCircle} from "lucide-react"




const Contact = () => {

    const [formData, setFormData] = useState({
        name:"",
        email:"",
        message:""
    })

    const [isLoading, setIsLoading] = useState(false)

    const handleChange = (e) =>{
        setFormData({...formData, [e.target.name]: e.target.value })
      console.log(formData)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        try{
          const response = await api.post("/api/contact", formData);
          alert("message send successfully")
          setIsLoading(false)
        }catch(error){
            console.log(error)
            alert("failed to send message")
        }
        setIsLoading(false)
        setFormData({
         name:"",
         email:"",
         message:""
        })
    }
    return (
        <>

            

            <section className="bg-gray-900 px-4 py-24 ">
                <div id="cta" className="w-full mx-auto flex flex-col md:flex-row max-md:items-center justify-center gap-12 md:gap-16">
                    {/* Left Side */}
                    <div className="flex flex-col mt-10">
                        <p className="text-sm max-md:text-center font-medium text-green-600 uppercase mb-2">Get In Touch</p>
                        <div className="flex flex-col items-center justify-center md:items-start">
                        <h1 className="text-5xl/14 max-md:text-center font-bold text-white max-w-2xs mb-0">Let's build something</h1>
                        <TypeAnimation
                          sequence={[
                            "real.",
                            2000,
                            "unique.",
                            2000,
                            "big.",
                            2000,
                            ]}
                            speed={30}
                            repeat={Infinity}
                            cursor={false}
                            className="text-red-600 mt-0 text-5xl/14 font-bold h-16"
                        
                        />
                        </div>
                        <p className="text-base/5.5 text-zinc-500 max-md:text-center max-w-2xs">Let's turn your ideas into meaningful products that solve real problems and create real impact.</p>
                        <div className="flex items-center max-md:justify-center gap-4 mt-7 cursor-pointer text-white">
                        <a href="#" className="hover:-translate-y-0.5 transition-all duration-300">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17 2H7a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5V7a5 5 0 0 0-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M16 11.37a4 4 0 1 1-7.914 1.173A4 4 0 0 1 16 11.37m1.5-4.87h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>
                        <a href="https://www.linkedin.com/in/prabhath2004/" className="hover:-translate-y-0.5 transition-all duration-300">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6M6 9H2v12h4zM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>
                            
                        <MdEmail className="text-2xl hover:-translate-y-0.5 transition-all duration-300" />
                                                
                        <a href="https://github.com/Prabhath-P-Dev" className="hover:-translate-y-0.5 transition-all duration-300">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65S8.93 17.38 9 18v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M9 18c-4.51 2-5-2-7-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>
                     </div>
                    </div>

                    {/* Right Side - Form */}
                    <div className="w-full max-w-sm border border-neutral-600 rounded-2xl p-8">
                        <h2 className="text-base font-medium text-white mb-5.5">Send Message</h2>
                        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                            <div className="flex flex-col gap-2.5">
                                <label className="text-xs text-zinc-400">Name</label>
                                <input type="text" placeholder="Enter your name" name="name" value={formData.name} onChange={(e)=>handleChange(e)} className=" bg-white border border-neutral-600 rounded-lg px-4 py-3 text-sm text-black placeholder-zinc-600 outline-none focus:border-neutral-600 transition-colors" />
                            </div>
                            <div className="flex flex-col gap-2.5">
                                <label className="text-xs text-zinc-400">Email</label>
                                <input type="email" placeholder="Enter your email" name="email" value={formData.email} onChange={(e)=>handleChange(e)} className=" bg-white border border-neutral-600 rounded-lg px-4 py-3 text-sm text-black placeholder-zinc-600 outline-none focus:border-neutral-600 transition-colors" />
                            </div>
                            <div className="flex flex-col gap-2.5">
                                <label className="text-xs text-zinc-400">Message</label>
                                <textarea placeholder="Your message.." rows="4" name="message" value={formData.message} onChange={(e)=>handleChange(e)} className="bg-white border border-neutral-600 rounded-lg px-4 py-3 text-sm text-black placeholder-zinc-600 outline-none focus:border-neutral-600 transition-colors resize-none"></textarea>
                            </div>
                            <button disabled={isLoading} type="submit" className="bg-green-600 hover:bg-green-700 text-white text-base py-3 rounded-lg transition-colors cursor-pointer mt-1 flex gap-4 justify-center items-center">
                                {isLoading && (
                                  <LoaderCircle className="animate-spin size-4" />
                                )}
                                {isLoading ? "sending" : "send message"}
                                </button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact;