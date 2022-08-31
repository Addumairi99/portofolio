import React from "react";

import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

function Home() {
  return (
    <div name="home" className="w-full h-screen text-center bg-gray-900 ">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-50">
            LET&#39;S BUILD SOMETHING TOGETHER
          </p>
          <h1 className="py-4 text-gray-50 text-4xl font-bold">
            Hi, I'm{" "}
            <span className="text-teal-600"> Addumairi Azhar Maksum</span>
          </h1>
          <h1 className="py-2 text-gray-50  text-4xl font-bold">
            A Full Stack Web Developer
          </h1>
          <p className="py-4 text-gray-400 text-lg sm:max-w-[70%] m-auto">
            I focus on building responsive front-end and back-end web
            applications while learning new technologies and frameworks for
            developing web applications.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <a
              href="https://www.linkedin.com/in/addumairi-azhar-maksum-206bb2157/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 bg-white">
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href="https://github.com/Addumairi99"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 bg-white">
                <FaGithub />
              </div>
            </a>
            <a
              href="mailto:azharaddumairi@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 bg-white">
                <AiOutlineMail />
              </div>
            </a>
            <a
              href="https://wa.me/6282215444845"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 bg-white">
                <BsFillPersonLinesFill />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
