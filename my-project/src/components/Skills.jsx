import React from 'react'
import css from "../assets/css.png";
import html from "../assets/html.png";
import github from "../assets/github.png";
import node from "../assets/node.png";
import nextjs from "../assets/nextjs.png";
import react from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import javascript from "../assets/javascript.png";
/*import angularvue from "../assets/angularvue.png";*/

const Skills = () => {

    const techs = [
    {
    id: 1,
    src: html,
    title: 'HTML',
     style: 'shadow-orange-500'
     },

     {
        id:2,
        src: css,
        title: 'CSS',
         style: 'shadow-blue-500'
         },

         {
            id:3,
            src: javascript,
            title: 'javaScript',
             style: 'shadow-yellow-500'
             },
             {
                id:4,
                src: react,
                title: 'Reactjs',
                 style: 'shadow-purple-500'
                 },
                 {
                    id:5,
                    src: node,
                    title: 'Nodejs',
                     style: 'shadow-red-500'
                     },
                     {
                        id:6,
                        src: nextjs,
                        title: 'Nextjs',
                         style: 'shadow-pink-500'
                         },
                         {
                            id:7,
                            src: tailwind,
                            title: 'Tailwindcss',
                             style: 'shadow-yellow-500'
                             }, 
                             {
                                id:8,
                                src: github,
                                title: 'GitHub',
                                 style: 'shadow-green-500'
                                 }
     
        ]
    
 return (
    <div name= "skills" 
className='bg-gradient-to-b from-gray-500  to-gray-800
     w-full h-screen'> 
 <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full' > 
 <div>
<h1 className='text-white font-bold  text-4xl '>Skills</h1>
        <p className='text-2xl ml-4 py-8'>These are the technologies I have worked with.</p>
        </div>
    <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8
    text-center py-8 px-12 sm:px-0 cursor-pointer '>
   {techs.map (({id,src,title,style}) => (
<div 
key={id}
className= {`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
>
    <img src= {src} alt= " " className='w-20 mx-auto'/>
    <p className='mt-4'>{title}</p>
    </div>
    ))}
    </div>
   </div>
    </div>
 );
};

export default Skills;
