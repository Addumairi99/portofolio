import React from "react";
import avatar from "../assets/avatar.jpg";

function About() {
  return (
    <div name="about" className="w-full h-screen bg-gray-900 text-white ">
      <div className="max-w-[1240px] mx-auto px-2 py-16 text-center  ">
        <div className="text-center  mt-4 ">
          <p className="text-4xl font-bold inline border-b-4 border-teal-500">
            About Me
          </p>
        </div>
      </div>
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-12 md:px-20  ">
        <div className="col-span-2  ">
          <h2 className="text-2xl font-bold">Who I am</h2>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            facilis reiciendis eius eaque impedit mollitia cumque quis quo.
            Excepturi qui quis laudantium fugiat, ratione amet veniam a debitis
            id labore! Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Suscipit quae repudiandae cum minima magni dicta delectus,
            voluptatum libero. Corrupti facilis culpa natus ea quia rerum at
            exercitationem provident, sapiente nam.
          </p>
          <a href="CV Addumairi.pdf" download="CV Addumairi Azhar Maksum">
            <button className="mt-2 rounded-xl bg-teal-600 w-32 h-10 hover:bg-teal-800">
              Download CV
            </button>
          </a>
        </div>
        <div className="w-full h-auto shadow-xl  rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in-out duration-300">
          <img className="rounded-xl " src={avatar} alt="/" />
        </div>
      </div>
    </div>
  );
}

export default About;
