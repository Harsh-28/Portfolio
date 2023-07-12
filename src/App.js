import React from "react";
import "./App.css";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { BiLogoGmail } from "react-icons/bi";

import Image from "./assets/dev-ed-wave.png";
import html from "./assets/html.png";
import css from "./assets/css.png";
import javascript from "./assets/javascript.png";
import tailwindcss from "./assets/tailwindcss.png";
import firebase from "./assets/firebase.png";
import react from "./assets/react.png";
import chat from "./assets/chat.png";
import portfoilo from "./assets/portfolio.png";
import blog from "./assets/blog.png";
import gethired from "./assets/gethired.png";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
function App() {
  const [darkMode, setDarkMode] = useState(true);

  const [FormData, setFormData] = useState({
    name: "",
    email: "",
    phoneNo: "",
    subject: "",
    msg: "",
  });
  const form = useRef();
  const changeHandler = (event) => {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  };

  const submithandler = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_php5m6p",
        "template_9ioyu0a",
        form.current,
        "ibZVxFX1MS1kt3C6p"
      )
      .then((result) => {
        console.log(result.text);
        toast.success("Email sent successfully!'");
      })
      .catch((error) => {
        console.log(error.text);
        toast.error("Failed to send email");
      });
  };

  return (
    <div className={darkMode ? "dark" : " "}>
      <div className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900 dark:h-100%">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="text-4xl font-burtons"> Portfolio</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  className="cursor-pointer text-2xl"
                  onClick={() => setDarkMode(!darkMode)}
                />
              </li>
              <li>
                <a
                  href="#"
                  className="bg-gradient-to-r from-cyan-500 to-teal-500
               text-white px-4 py-2 rounded-md ml-8"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div
            className="bg-gradient-to-b from-teal-500
        rounded-full w-80 h-80 mx-auto 
        md:h-96 md:w-96"
          >
            <img src={Image} alt="man-png" />
          </div>

          <div className="text-center p-10">
            <h2
              className="text-5xl py-2 text-teal-600 font-medium
          md:text-6xl dark:text-teal-400"
            >
              Harsh Kumar Srivastava
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Developer
            </h3>
            <p
              className="text-md py-5 leading-8 text-gray-800 
          md:text-xl  mx-auto dark:text-gray-200"
            >
              A Student and a frontend developer with a passion for creating
              visually appealing and user-friendly websites. I specialize in
              HTML, CSS, and JavaScript, and I enjoy bringing designs to life
              through code. I'm constantly learning and exploring new
              technologies to stay up-to-date with the latest industry trends.
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
            <AiFillGithub />
            <AiFillLinkedin />
            <BiLogoGmail />
          </div>
        </section>

        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white">Skills </h3>
          </div>

          <div className="lg:grid lg:grid-cols-3  gap-10 justify-center md:grid-cols-2 md:grid md:gap-4">
            <div className="text-center flex flex-col items-center shadow-lg p-2 rounded-xl my-8 dark:bg-white">
              <img src={html} width={200} height={200} />
              <h3 className="text-lg font-medium pt-8 pb-2">HTML</h3>
            </div>

            <div className="text-center flex flex-col items-center shadow-lg p-2 rounded-xl my-8 dark:bg-white">
              <img src={css} width={200} height={200} />
              <h3 className="text-lg font-medium pt-8 pb-2"> CSS</h3>
            </div>

            <div className="text-center flex flex-col items-center shadow-lg p-2 rounded-xl my-8 dark:bg-white">
              <img src={javascript} width={200} height={200} />
              <h3 className="text-lg font-medium pt-8 pb-2">JavaScript</h3>
            </div>
          
          <div className="text-center flex flex-col items-center shadow-lg p-2 rounded-xl my-8 dark:bg-white ">
              <img src={react} width={200} height={200} />
              <h3 className="text-lg font-medium pt-8 pb-2">React Js</h3>
            </div>
            <div className="text-center flex flex-col items-center shadow-lg p-2 rounded-xl my-8 dark:bg-white ">
              <img src={tailwindcss} width={200} height={200} />
              <h3 className="text-lg font-medium pt-8 pb-2">Tailwind CSS</h3>
            </div>
            <div className="text-center flex flex-col items-center shadow-lg p-2 rounded-xl my-8 dark:bg-white ">
              <img src={firebase} width={200} height={200} />
              <h3 className="text-lg font-medium pt-8 pb-2">FireBase</h3>
            </div>

          </div>
        </section>

        <section>
          <div>
              <h3 className="text-3xl py-1 dark:text-white">Projects</h3>
          </div>
          <div className='lg:flex lg:gap-10 justify-center md:grid-cols-2 md:grid md:gap-4 py-8'>
            <div className='basis-1/3 flex-1 rounded-lg bg-gradient-to-l p-[5px] from-cyan-500 to-teal-600'>
              <img src={portfoilo} className='rounded-lg object-cover' 
              width={'100%'} height={'100%'} />
              <p className="text-lg text-center dark:text-white font-burtons mt-[2px] ">Portfolio website</p>
            </div>

            <div className='basis-1/3 flex-1 rounded-lg bg-gradient-to-r p-[5px] from-cyan-500 to-teal-600 '>
              <img src={blog} className='rounded-lg object-cover ' 
              width={'100%'} height={'100%'} />
              <p className="text-lg text-center dark:text-white font-burtons mt-[2px]">Blogging website</p>
            </div>

            <div className='basis-1/3 flex-1 rounded-lg bg-gradient-to-l p-[5px] from-cyan-500 to-teal-600'>
              <img src={gethired} className='rounded-lg object-cover ' 
              width={'100%'} height={'100%'} />
              <p className="text-lg text-center dark:text-white font-burtons mt-[2px]">Placement prediction website</p>
            </div>
          </div>
        </section>

        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white">Contact </h3>
          </div>

          <div className="flex justify-center items-center flex-col lg:flex-row">
            <img src={chat} alt="chat" className="w-2/6 h-1/5 " />
            <div className=" w-full shadow-lg py-8 px-6 rounded-xl my-8 dark:bg-white">
              <h3
                className="text-4xl py-2 text-teal-600 font-medium
          md:text-6xl dark:text-teal-400 text-center"
              >
                Get In Touch
              </h3>

              <form
                onSubmit={submithandler}
                ref={form}
                className="max-w-md mx-auto mt-8"
              >
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-l mb-2"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={FormData.name}
                    onChange={changeHandler}
                    required
                    className="w-full border border-gray-400 p-2 rounded-md"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-l mb-2"
                    htmlFor="phoneNumber"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNo"
                    value={FormData.phoneNo}
                    onChange={changeHandler}
                    required
                    className="w-full border border-gray-400 p-2 rounded-md"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-l mb-2"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={FormData.email}
                    onChange={changeHandler}
                    required
                    className="w-full border border-gray-400 p-2 rounded-md"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-l mb-2"
                    htmlFor="subject"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={FormData.subject}
                    onChange={changeHandler}
                    required
                    className="w-full border border-gray-400 p-2 rounded-md"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-l mb-2"
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="msg"
                    value={FormData.msg}
                    onChange={changeHandler}
                    required
                    rows="4"
                    className="w-full border border-gray-400 p-2 rounded-md"
                  />
                </div>
                <div className="flex items-center flex-col">
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-cyan-500 to-teal-500
            text-white px-4 py-2 rounded-md ml-8"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
