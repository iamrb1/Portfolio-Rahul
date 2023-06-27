import React from 'react'

const Contact = () => {
  return (
      <div name='contact' className="w-full h-screen bg-gradient-to-b from-black via-gray-950 to-gray-900 p-4 text-white">
        <meta http-equiv="ScreenOrientation" content="autoRotate:disabled"></meta>
          <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
            <div className="landscape:hidden mt-20"></div>
            <div className="mt-20"></div>
            <div className="landscape:hidden  md:mt-20"></div>
            <div className="pb-8">
              <p className="text-4xl font-bold inline border-b-4 border-[#1ED760] text-[#1ED760]">Contact</p>
              <p className="py-6 text-white">Submit the form below to get in touch with me</p>
            </div>

            <div className="flex justify-center items-center">
              <form action="https://getform.io/f/cb77754d-16c6-41fd-bc3c-e181ca29d548" method="POST" className="flex flex-col w-full md:w-1/2">
                <input 
                type="text" 
                name="name" 
                placeholder="Enter your name" className="placeholder-[#1ED760] p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                />
                <input 
                type="text" 
                name="email" 
                placeholder="Enter your email" className="placeholder-[#1ED760] my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                />
                <textarea 
                name="message" 
                placeholder="Enter your message"
                rows="10" 
                className="placeholder-[#1ED760] p-2 bg-transparent border-2 rounded-md focus:outline-none">
                </textarea>

                <button className="text-white bg-gradient-to-b from-[#1ED760] to-emerald-500 px-4 py-2 my-8 mx-auto flex items-center rounded-full hover:scale-110 duration-300">Submit</button>
              </form>
            </div>
          </div>
    </div>
  );
};

export default Contact