import React from 'react';
import heroimage from '../assets/heroimage.png';
import {MdOutlineKeyboardArrowRight} from "react-icons/md";
import {Link} from "react-scroll";
const Home = () => {
  return (
    <div
    name="home" 
    className='h-screen w-full bg-gradient-to-b
    from-red-100 via-red-300 to-red-400'>
   
   <div className ="max-w-screen-lg mx auto flex flex-col items-center 
   justify-center px-6 ml-10 h-full md:flex-row">
    <div className='flex flex-col
       justify-center h-full'>
       <h2 className='text-4xl sm:text-7xl font-bold text-black'> I am a frontend developer.</h2>
   <p className="textgray500 py-6 ml-10 max-w-md">
    I have experience in building and designing websites as a freelancer.
    Currently, I love to design apps and games as well. I am always 
    keen to handle the graphics and 
    user interface design for games and websites.
   </p>
  
    <div> 
        <Link to="portfolio" smooth duration={500}
         className='group text-white font-bold w-fit px-6 py-3 my-2 flex items-center rounded-md
         bg-gradient-to-r from-gray-500 to-gray-900 cursor-pointer'> 
            portfolio
    <span className='group-hover:rotate-90 duration-300'>
        <MdOutlineKeyboardArrowRight size={25} 
        className="ml-1"/></span>
    </Link>
    </div>
    </div>
    <div className=' py-6 mt-10 pl-10 ml-10  '> <img src={heroimage} alt="my picture"
    className='rounded-2xl mx-auto w-1/3 ml-10 h-45 mr-1 md:w-full' /></div>
    </div>
    </div>
 
  )
}

export default Home;
