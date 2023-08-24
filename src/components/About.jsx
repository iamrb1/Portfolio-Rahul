import React from 'react'

const About = () => {
  return (
  <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-900 via-gray-950 to-black text-[#1ED760]">
    
    <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
      <div className="mt-40 md:mt-0"></div>
      <div className="pb-8">
        <p className="text-4xl font-bold inline border-b-4 border-[#1ED760]"> About </p>
      </div>

    <p className="text-xl text-white">
    Since I was a kid, I've been all about building and creating. I enjoyed building Lego, crafting epic structures in Minecraft, and even engineering pillow forts that could rival castles.

    My first real dive into the world of computer science happened when I was just 8 years old, thanks to Lego NXT. I got to tinker, program, and voila! I had my own little robot doing my bidding. That spark of creation stuck with me and soon found its way into programming, transferring those building skills into a digital realm where I could whip up whatever I dreamed up.
    </p>


    <br />

    <p className="text-xl text-white">
      I will be graduating from Michigan State University by 2025. I've got my sights set on a minor in mathematics, driven by my deep-rooted connection with the subject. My journey with mathematics has been enriched by my active participation in Math Counts, Olympiad, and various other competitions.
    </p>
    <div className='mt-20'></div>
  </div>

</div>
)};

export default About