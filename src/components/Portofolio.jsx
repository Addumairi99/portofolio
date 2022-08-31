import React from "react";
import pharmastore from "../assets/pharmastore.png";
import weatherapp from "../assets/weather-app.png";
import todoapp from "../assets/todo-app.png";

function Portofolio() {
  const portofolioList = [
    {
      id: 1,
      title: "pharmastore",
      desc: "Final project bootcamp purwadhika",
      img: pharmastore,
      linkcode: "https://github.com/Addumairi99/jcwd-vl005-02-fe",
      linkdemo: "https://jcwdvl00502.purwadhikabootcamp.com/",
    },
    {
      id: 2,
      title: "Weather-App",
      desc: "Get weather from free Weather API",
      img: weatherapp,
      linkcode: "https://github.com/Addumairi99/weather-app",
      linkdemo: "https://weather-app-addumairi.netlify.app/",
    },
    {
      id: 3,
      title: "Todo-App",
      desc: "CRUD using react js",
      img: todoapp,
      linkcode: "https://github.com/Addumairi99/todo-app",
      linkdemo: "https://todo-app-addumairi.netlify.app/",
    },
  ];

  const renderPortofolioList = () => {
    return portofolioList.map((val) => {
      return (
        <div key={val.id}>
          {/* items */}
          <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-500 rounded-xl p-4 group hover:bg-gradient-to-r from-teal-400 to-teal-800 ">
            <img
              className="rounded-xl group-hover:opacity-10"
              src={val.img}
              alt=""
            />
            <div className=" hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <h3 className="text-xl font-bold">{val.title}</h3>
              <p className="mb-4"> {val.desc} </p>
              <div className="flex justify-between">
                <a href={val.linkcode} target="_blank" rel="noreferrer">
                  <button className=" bg-white  text-teal-700 w-24 h-9 mr-2 rounded-xl hover:bg-teal-600 hover:text-white">
                    Code
                  </button>
                </a>
                <a href={val.linkdemo} target="_blank" rel="noreferrer">
                  <button className="bg-white text-teal-700 h-9 w-24 rounded-xl hover:bg-teal-600 hover:text-white">
                    Demo
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* items end */}
        </div>
      );
    });
  };

  return (
    <div name="portofolio" className="w-full bg-gray-900 text-white ">
      <div className="max-w-[1240px] mx-auto px-2 py-16 text-center  ">
        <div className="text-center mb-10 mt-4 ">
          <p className="text-4xl font-bold inline border-b-4 border-teal-500">
            Portofolio
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap 8 mt-9">
          {renderPortofolioList()}
        </div>
      </div>
    </div>
  );
}

export default Portofolio;
