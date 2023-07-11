import React  from 'react';
import './App.css';
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {AiFillGithub,AiFillLinkedin} from 'react-icons/ai';
import {BiLogoGmail} from 'react-icons/bi';
import Image from './assets/dev-ed-wave.png'
import html from './assets/html.png'
import css from './assets/css.png';
import javascript from './assets/javascript.png';
import tailwindcss from './assets/tailwindcss.png';
import react from './assets/react.png';

import { useState } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className= {darkMode ? "dark" : " "}>
    <div className='bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900'>
      <section className='min-h-screen'>
        <nav className='py-10 mb-12 flex justify-between dark:text-white'>
          <h1 className='text-4xl font-burtons'> Portfolio</h1>
          <ul className='flex items-center'>
            <li>
              <BsFillMoonStarsFill className='cursor-pointer text-2xl'
              onClick={() => setDarkMode(!darkMode)}/>
              </li>
            <li>
              <a href='#' className='bg-gradient-to-r from-cyan-500 to-teal-500
               text-white px-4 py-2 rounded-md ml-8'>Resume</a>
            </li>
          </ul>
        </nav>
        <div className='bg-gradient-to-b from-teal-500 
        rounded-full w-80 h-80 mx-auto overflow-hidden
        md:h-100 md:w-100 object-cover'>
          <img src={Image}/>
        </div>

        <div className='text-center p-10'>
          <h2 className='text-5xl py-2 text-teal-600 font-medium
          md:text-6xl dark:text-teal-400'>Harsh Kumar Srivastava</h2>
          <h3 className='text-2xl py-2 dark:text-white md:text-3xl'>Developer</h3>
          <p className='text-md py-5 leading-8 text-gray-800 
          md:text-xl  mx-auto dark:text-gray-200'>
          A Student and  a frontend developer with a passion for creating 
          visually appealing and user-friendly websites. I specialize in HTML, CSS, and JavaScript, 
          and I enjoy bringing designs to life through code. I'm constantly learning and exploring 
          new technologies to stay up-to-date with the latest industry trends.
             </p>
        </div>
        <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400'>
          <AiFillGithub />
          <AiFillLinkedin />
          <BiLogoGmail />
        </div>
      </section>

      <section>
        <div>
          <h3 className='text-3xl py-1 dark:text-white'>Skills </h3>
        </div>

        <div className='lg:flex gap-10'>
          <div className='text-center flex flex-col items-center shadow-lg p-10 rounded-xl my-10 dark:bg-white'>
            <img src={html} width={200} height={200}/>
            <h3 className='text-lg font-medium pt-8 pb-2'>HTML</h3>
            {/* <p>Creating elegant designs suited for your needs following core
                design theory. </p>
            <h4 className='py-4 text-teal-600'>Design tool used</h4>
            <p className='text-gray-800 py-1'>Photoshop</p>
            <p className='text-gray-800 py-1'>Photoshop</p> */}
          </div>


          <div className='text-center flex flex-col items-center shadow-lg p-10 rounded-xl my-10 dark:bg-white'>
            <img src={css} width={200} height={200}/>
            <h3 className='text-lg font-medium pt-8 pb-2'> CSS</h3>
            {/* <p>Creating elegant designs suited for your needs following core
                design theory.</p>
            <h4 className='py-4 text-teal-600'>Design tool used</h4>
            <p className='text-gray-800 py-1'>Photoshop</p>
            <p className='text-gray-800 py-1'>Photoshop</p> */}
          </div>

          <div className='text-center flex flex-col items-center shadow-lg p-10 rounded-xl my-10 dark:bg-white'>
            <img src={javascript} width={200} height={200}/>
            <h3 className='text-lg font-medium pt-8 pb-2'>JavaScript</h3>
            {/* <p>Creating elegant designs suited for your needs following core
                design theory. </p>
            <h4 className='py-4 text-teal-600'>Design tool used</h4>
            <p className='text-gray-800 py-1'>Photoshop</p>
            <p className='text-gray-800 py-1'>Photoshop</p> */}
          </div>

          <div className='text-center flex flex-col items-center shadow-lg p-10 rounded-xl my-10 dark:bg-white '>
            <img src={react} width={200} height={200} />
            <h3 className='text-lg font-medium pt-8 pb-2'>React Js</h3>
            {/* <p>Creating elegant designs suited for your needs following core
                design theory. </p>
            <h4 className='py-4 text-teal-600'>Design tool used</h4>
            <p className='text-gray-800 py-1'>Photoshop</p>
            <p className='text-gray-800 py-1'>Photoshop</p> */}
          </div>
          <div className='text-center flex flex-col items-center shadow-lg p-10 rounded-xl my-10 dark:bg-white '>
            <img src={tailwindcss} width={200} height={200} />
            <h3 className='text-lg font-medium pt-8 pb-2'>Tailwind CSS</h3>
            {/* <p>Creating elegant designs suited for your needs following core
                design theory. </p>
            <h4 className='py-4 text-teal-600'>Design tool used</h4>
            <p className='text-gray-800 py-1'>Photoshop</p>
            <p className='text-gray-800 py-1'>Photoshop</p> */}
          </div>
        </div>
      </section>




















      {/* <section>
        <div>
          <h3 className='text-3xl py-1 dark:text-white'>Portfolio</h3>
          <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-200'>
            do eiusmod tempor incididunt ut labore et dolore magna 
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat. 
             Duis aute irure dolor in reprehenderit in voluptate velit 
             esse cillum dolore eu fugiat nulla p
          </p>
        </div>

        <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
          <div className='basis-1/3 flex-1 '>
            <img src={web1} className='rounded-lg object-cover ' 
            width={'100%'} height={'100%'} />
          </div>
          <div className='basis-1/3 flex-1'>
            <img src={web2} className='rounded-lg object-cover ' 
            width={'100%'} height={'100%'} />
          </div>
          <div className='basis-1/3 flex-1'>
            <img src={web3} className='rounded-lg object-cover ' 
            width={'100%'} height={'100%'} />
          </div>
          <div className='basis-1/3 flex-1'>
            <img src={web4} className='rounded-lg object-cover ' 
            width={'100%'} height={'100%'} />
          </div>
          <div className='basis-1/3 flex-1'>
            <img src={web5} className='rounded-lg object-cover ' 
            width={'100%'} height={'100%'} />
          </div>
          <div className='basis-1/3 flex-1'>
            <img src={web6} className='rounded-lg object-cover ' 
            width={'100%'} height={'100%'} />
          </div>
        </div>
      </section> */}
    </div>
    </div>
  );
}

export default App;
