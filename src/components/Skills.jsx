import React from "react";
import html from "../assets/htmlogo.png";
import css from "../assets/logocss.png";
import js from "../assets/logojs.png";
import reactlogo from "../assets/reactlogo.png";
import nodelogo from "../assets/logonodejs.png";
import mysqllogo from "../assets/logomysql.png";

function Skills() {
  const listSkill = [
    { id: 1, skill: "HTML", img: html },
    { id: 2, skill: "CSS", img: css },
    { id: 3, skill: "Javascript", img: js },
    { id: 4, skill: "React Js", img: reactlogo },
    { id: 5, skill: "Nodejs", img: nodelogo },
    { id: 6, skill: "MySQL", img: mysqllogo },
  ];

  const renderSkills = () => {
    return listSkill.map((val) => {
      return (
        <div key={val.id}>
          <div
            
            className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in-out duration-300 bg-white"
          >
            <div className="grid grid-cols-2 gap-0 justify-center items-center ">
              <div className="m-auto ">
                <img width="40px" height="40px" src={val.img} alt="" />
              </div>
              <div className="text-teal-600 font-bold">
                <h3> {val.skill} </h3>
              </div>
            </div>
          </div>
        </div>
      );
    });
  };
  return (
    <div name="skills" className="w-full lg:h-screen p-2 bg-gray-900 text-white ">
      <div className="max-w-[12404x] mx-auto flex flex-col justify-center h-full">
        <div className="text-center mb-10 ">
          <p className="text-4xl font-bold inline border-b-4 border-teal-500">
            Skills
          </p>
        </div>
        <div className=" mx-auto grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* skill items */}
          {renderSkills()}
        </div>
      </div>
    </div>
  );
}

export default Skills;
