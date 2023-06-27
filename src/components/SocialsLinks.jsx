import React from 'react'
import {FaGithub, FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'

const SocialsLinks = () => {

    const links = [
        {
          id: 1,
          child: (
            <>
              LinkedIn <FaLinkedin size={30}/>
            </>
          ),
          href: 'https://linkedin.com',
          style: 'rounded-tr-md',
        },
        {
          id: 2,
          child: (
            <>
              GitHub <FaGithub size={30}/>
            </>
          ),
          href: 'https://github.com',
          
        },
        {
          id: 3,
          child: (
            <>
              Mail <HiOutlineMail size={30}/>
            </>
          ),
          href: 'mailto:iamrb202@gmail.com',
        },
        {
          id: 4,
          child: (
            <>
              Resume <BsFillPersonLinesFill size={30}/>
            </>
          ),
          href: '/resume.pdf',
          style: 'rounded-br-md',
          download: true,
        },  
    ];

  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <meta http-equiv="ScreenOrientation" content="autoRotate:disabled"></meta>
      <ul>

        {links.map(({id, child, href, style, download}) => (
          // eslint-disable-next-line
          <li key={id} className={"flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-black" + " " + style}>

          <a href={href} className="flex justify-between items-center w-full text-white" download={download} target='_blank' rel="noreferrer"> 
            {child}
          </a>
        </li>
        ))}

        
      </ul>
    </div>
  );
};

export default SocialsLinks