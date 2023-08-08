import React from 'react'
import LocoListen from '../assets/portfolio/LocoListen.jpg'
import Ahoy from '../assets/portfolio/Ahoy.jpg'
import RahulPortfolio from '../assets/portfolio/RahulPortfolio.jpg'
import StipeCoinLogo from '../assets/portfolio/StipeCoinLogo.jpg'

const Portfolio = () => {

    const portfolios = [
      {
        id: 1,
        src: Ahoy,
        demoLink: "https://messenger-three-beta.vercel.app/",
        codeLink: "https://github.com/iamrb1/Ahoy"
      },
      {
        id: 2,
        src: StipeCoinLogo,
        demoLink: "https://github.com/iamrb1/StipeCoin",
        codeLink: "https://github.com/iamrb1/StipeCoin"
      },
      {
        id: 3,
        src: LocoListen,
        demoLink: "https://devpost.com/software/locolisten",
        codeLink: "https://github.com/iamrb1/LocoListen-Spartahack8"
      },
      {
        id: 4,
        src: RahulPortfolio,
        demoLink: "https://main--merry-cascaron-b5bb72.netlify.app/",
        codeLink: "https://github.com/iamrb1/Portfolio-Rahul"
      },
    ]

    const handleDemoClick = (demoLink) => {
      window.open(demoLink, '_blank');
    };
  
    const handleCodeClick = (codeLink) => {
      window.open(codeLink, '_blank');
    };


  return (
    <div name="portfolio" className="bg-gradient-to-b from-black via-gray-950 to-gray-900 w-full text-white md:h-screen">
          
          <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8 md:mt-40 mt-20">
              <p className="text-4xl font-bold border-b-4 border-[#1ED760] p-2 inline text-[#1ED760]">Portfolio</p>
              <p className="py-6 text-white">Here are some of my projects that I've worked on!</p>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
            {
              portfolios.map(({id, src, demoLink, codeLink}) => (
                <div key={id} className="shadow-md shadow-[#1ED760] rounded-lg">
                <img src={src} alt="" className="rounded-md duration-200 hover:scale-105"/>
                <div className="flex items-center justify-center">
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-[#1ED760]" onClick={() => handleDemoClick(demoLink)}>Demo</button>
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-[#1ED760]" onClick={() => handleCodeClick(codeLink)}>Code</button>
                </div>
              </div>
              ))
            }
              

            </div>
          </div>

    </div>
  );
};

export default Portfolio