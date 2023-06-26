import React from 'react'
import HeroImage from '../assets/heroImage.png'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'
import {Link} from 'react-scroll'
import {useTypewriter, Cursor} from 'react-simple-typewriter'

const Home = () => {

  const [text] = useTypewriter({
    words: [' student.', ' developer.', ' learner.'],
    loop: {},
    typeSpeed: 60,
  });

  return (
    <div name="home" className="h-screen w-full bg-gradient-to-b from-black via-gray-950 to-gray-900">

      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-[#1ED760]"> 
            I'm a Computer Science
            <span>
              {text}
            </span>
            <Cursor/>
          </h2>
          <p className="text-white py-4 max-w-md">
            I am a current junior with a love for programming. Currently, I have been working with JS, React, Python, C++ and SQL. My interests lay in data science, web development, machine learning, and embedded software! 
          </p>
          <div>
            <Link to="portfolio" smooth duration={500} className= "group text-white w-fit px-4 py-2 my-2 flex items-center rounded-full bg-gradient-to-r from-[#1ED760] via-green-500 to-emerald-500 cursor-pointer">
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1"/>
              </span>
            </Link>
          </div>
        </div>

        <div>
          
          <img src={HeroImage} alt="my profile" className="rounded-2xl mx-auto w-2/3 md:w-full" />
        
        </div>
      </div>
    </div>
  );
};

export default Home