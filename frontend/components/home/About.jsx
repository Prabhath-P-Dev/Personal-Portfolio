import React from "react";

const About = () => {
    return(
        <>
         <div id="about" className="flex  bg-gray-900 border-0">
            <div className=" flex flex-col md:flex-row justify-between items-center">
                <div>
                    <img src="character5.webp" alt="character" className=" w-60 md:w-96 md:w-[500px] h-auto object-contain" />
                </div>
                <div className="px-4 flex flex-col justify-center items-center md:items-start">
                    <h1 className=" text-3xl md:text-5xl font-bold mb-2  text-blue-400">
                         ABOUT ME
                    </h1>
                    <h3 className="flex text-xl font-bold mt-2 text-white  ">
                    I'm a self-taught Full Stack developer passionate about building modern, <br /> responsive, and user-friendly web applications.<br></br> I enjoy turning ideas into real-world solutions. <br /> I continuously learn through hands-on projects and enjoy solving real-world problems with code. <br /> I'm eager to contribute, grow, and build impactful software as a full-stack developer.
                    </h3>
                </div>
            </div>
         </div>
        </>
    )
}
export default About;