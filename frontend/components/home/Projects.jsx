import React from "react";



const Projects = () => {
    return(
    <>
     <div id="projects" className="bg-gray-900">
        <div className="flex flex-col items-center justify-center pt-10   ">
            <h1 className="text-5xl text-orange-400">MY PROJECTS</h1>
            <div className="flex flex-wrap p-5 gap-10 justify-center">
              <div className="flex flex-col items-center justify-center gap-2 bg-blue-600 rounded-lg w-72 h-[520px] mb-4 p-5 hover:-translate-y-0.5 transition-all duration-300">
                 <a href="https://resumeforge-ai-resume-builder-six.vercel.app/" 
                 target="blank"
                 rel="noopener noreferrer"
                 className="flex flex-col items-center gap-4 inline-block transition-transform duration-150 active:scale-95 ">
                 <img className="w-80 h-68 object-cover  rounded-4xl" src="/cv.jpg" alt="project1-img" />
                 </a>
                <h1 className="text-2xl font-bold mt-4">AI RESUME BUILDER</h1>
                <h3 className="text-xl font-bold text-white">
                  AI-powered MERN resume builder with authentication, AI-generated content, resume management, and pdf download.
                </h3>
              </div>

              <div className="flex flex-col items-center  gap-1 bg-yellow-400 w-72 h-[520px] p-4 rounded-lg hover:-translate-y-0.5 transition-all duration-300">
                <img className="w-80 h-75 rounded-4xl object-cover  " src="/portfolio.webp" alt="portfolio-img" />
                <h1 className="text-2xl font-bold">PORTFOLIO WEBSITE</h1>
                <h3 className="text-xl font-bold text-white">Responsive personal portfolio built with React and Tailwind CSS, showcasing my skills, projectss, and technical expertise. </h3>
              </div>

              <div className="flex flex-col items-center gap-1 bg-pink-600 w-72 h-[520px] p-4 rounded-lg hover:-translate-y-0.5 transition-all duration-300">
                <img className="w-80 h-75 object-cover rounded" src="/dice-2-icon.webp" alt="dicegame-img" />
                <h1 className="text-2xl font-bold mt-2">DICE GAME</h1>
                <h3 className="text-lg font-bold text-white pb-5">Interactive React-based dice game featuring random dice generation,and engaging gameplay with a responsive user interface.</h3>
              </div>
            </div>

        </div>
     </div>
    </>
    )
}

export default Projects;