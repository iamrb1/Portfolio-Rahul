import React from 'react'

const About = () => {
  return (
  <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-900 via-gray-950 to-black text-[#1ED760]">
    <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
      <div className="md:mt-20"></div>
      <div className="pb-8 md:mt-80">
        <p className="text-4xl font-bold inline border-b-4 border-[#1ED760]">About</p>
      </div>

    <p className="text-xl text-white">
      Ever since I was a kid, I was always building and constructing, whether it were lego blocks, Minecraft structures, or even making forts out of pillows. The first time I was involved in the field of computer science was with Lego NXT, in which I programmed and created a robot of my bidding at 8 years old. The passion of creating soon translated into programming in which I got to exercise the same skills into making whatever I desired.
    </p>


    <br />

    <p className="text-xl text-white">
      I am a current Junior at Michigan State University, with an expected graduation date of 2025. At MSU, I plan to minor in mathematics as well due to my extensive background in the subject, whether it was Math Counts, Olympiad or other competitions. 
    </p>
  </div>

</div>
)};

export default About