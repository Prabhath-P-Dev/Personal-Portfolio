import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiGithub,
  SiMongoose,
  SiGit,
  SiVercel,
  SiRender,
} from "react-icons/si";

const Skills = ()=>{
    

    return(
       <div id="skills" className="bg-gray-900">
        <div className="pt-4 ">
            <div className="flex flex-col items-center p-2">
                <h1 className="text-3xl md:text-5xl font-bold text-green-400">Skills</h1>
                 <div className="flex flex-col">
                  
                  {/*frontend skills*/}
                  <div className="flex flex-col items-center p-5" >
                    <h1 className="text-xl text-white font-bold">Frontend</h1>
                    <div className=" flex flex-wrap justify-center items-center gap-10 text-4xl sm:text-5xl mt-4">
                      <FaHtml5 className="text-orange-600 size-24" />
                      <FaCss3Alt className="text-blue-600 size-24" />
                      <FaJs className="text-yellow-400 size-24" />
                      <FaReact className="text-cyan-400 size-24" />
                      <SiTailwindcss className="text-sky-400 size-24" /> 
                    </div>
                  </div>
                  
                  {/*backend skills*/}
                  <div className="flex flex-col  items-center p-5" >
                    <h1 className="text-xl text-white font-bold">Backend</h1>
                    <div className=" flex flex-wrap justify-center items-center text-4xl gap-8 sm:text-5xl mt-4" >
                       <SiExpress className="text-gray-400 size-24" />
                       <FaNodeJs className="text-green-600 size-24" /> 
                    </div>
                  </div>

                  {/*database*/}
                  <div className="flex flex-col items-center p-5" >
                    <h1 className="text-xl text-white font-bold">Database</h1>
                    <div className=" flex flex-wrap justify-center items-center  gap-8 text-4xl sm:text-5xl mt-4" >
                       <SiMongodb className="text-green-500 size-24" />
                       <SiMongoose className="text-red-600 size-24" />
                    </div>
                  </div>
                  {/*tools*/}
                  <div className="flex flex-col items-center p-5" >
                    <h1 className="text-xl text-white font-bold">Tools</h1>
                    <div className=" flex flex-wrap justify-center gap-10 text-4xl sm:text-5xl mt-4" >
                       <SiGit className="text-orange-600 size-24" />
                       <SiGithub className="text-white  size-24" />
                       <SiVercel className="text-white  size-24" />
                       <SiRender className=" text-emerald-500 size-24"/>
                    </div>
                  </div>
                  
                 </div>
                
                
                </div>
            </div>
        </div>
       
    )
}

export default Skills;










