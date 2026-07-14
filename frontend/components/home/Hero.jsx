import React, { useState } from "react";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {

  const [isOpen, setIsOpen] = useState(false)
  

  return (
    <>
     <div className="bg-gray-900 h-[600px] md:h-auto  p-2 mb-35 md:mb-5">
      <nav className=" z-100 bg-gray-900 flex items-center justify-between w-full py-4 px-6 md:px-16 lg:px-24 xl:px-40 text-sm relative">
                    <h1 className="w-50 text-5xl text-white font-extrabold my-1.5 ">Prabhath</h1>
                    
                    <div className="hidden md:flex items-center gap-8 transition duration-500 text-white text-xl">
                        <a href="#" className="hover:text-green-600 transition font-bold">Home</a>
                        <a href="#about" className="hover:text-green-600 transition font-bold ">About</a>
                        <a href="#skills" className="hover:text-green-600 transition font-bold">Skills</a>
                        <a href="#projects" className="hover:text-green-600 transition font-bold">Projects</a>
                        <a href="#cta" className="hover:text-green-600 transition font-bold">Contact</a>
                    </div>
                     <button onClick={() => setIsOpen(prev=>!prev)} className="md:hidden active:scale-90 transition mr-0 text-white ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" className="lucide lucide-menu" >
                            <path d="M4 5h16M4 12h16M4 19h16" />
                        </svg>
                    </button>
                </nav>
                {isOpen && (
                  <div className="md:hidden flex p-2 flex-col items-end justify-end gap-3 transition  duration-500 text-slate-800 text-xl bg-green-400 text-white">
                        <a href="#" className="hover:text-green-600 transition font-bold">Home</a>
                        <a href="#about" className="hover:text-green-600 transition font-bold ">About</a>
                        <a href="#skills" className="hover:text-green-600 transition font-bold">Skills</a>
                        <a href="#projects" className="hover:text-green-600 transition font-bold">Projects</a>
                        <a href="#cta" className="hover:text-green-600 transition font-bold">Contact</a>
                    </div>
                )}
                <div className="px-10 pt-10 pb-2 gap-2 flex flex-col-reverse md:flex-row justify-between items-center">
                  <div className="px-4 text-center md:text-left ">
                    <h1 className="text-2xl font-bold md:text-7xl text-white ">Hii,it's me <br />
                   <span className="text-red-600 text-2xl">Prabhath</span> 
                  </h1>
                  <h2 className="py-2 font-bold text-lg md:text-2xl text-white">Full Stack Developer</h2>
                  <div className="h-5">
                  <TypeAnimation
                    sequence={[
                      "Bringing ideas to life through clean code and thoughtful design.",
                      1000,
                      " Transforming code into engaging web experiences.",
                      1000,
                    ]}
                    speed={30}
                    deletionSpeed={60}
                    repeat={Infinity}
                    cursor={false}
                    className="text-green-600 text-lg font-bold h-20 md:text-2xl"/>
                    </div>
                   
                  
                 </div>
                  <img className="w-75 md:w-[500px] h-[300px] md:h-[600px] object-contain" src="/character4.webp" alt="character" />
                </div>

     </div>
    </>
  )
}
export default Hero;