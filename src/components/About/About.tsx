import React from "react";

const About = () => {
  return (
    <div>
      
      <p className="text-[15px] my-1 pt-4 dark:text-neutral-300 ">
       I am a software
        engineer based in Lagos Nigeria. I specialize in building modern web applications, with a tech stack that includes — but isn't limited to


      </p>
      <div className="flex gap-2 flex-wrap ">
            <span className="ring-1 ring-neutral-200 text-sm p-1 inline-flex bg-neutral-50 align-middle gap-1 rounded-sm dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:ring-neutral-700">
            <img src="./react-color.svg" width={20} className="inline" alt="" />
            React
            </span>
          <span className="ring-1 ring-neutral-200 text-sm p-1 inline-flex bg-neutral-50 align-middle gap-1  rounded-sm dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:ring-neutral-700">
            <img src="./nextdotjs-color.svg" width={20} className="inline" alt="" />
            Next
          </span>
          <span className="ring-1 ring-neutral-200 text-sm p-1 inline-flex bg-neutral-50 align-middle gap-1  rounded-sm dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:ring-neutral-700">
            <img src="./tailwindcss-color.svg" className="inline" width={18} alt="" />
            Tailwind
          </span>
          <span className="ring-1 ring-neutral-200 text-sm p-1 inline-flex bg-neutral-50 align-middle gap-1  rounded-sm dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:ring-neutral-700">
            <img src="./javascript-color.svg" className="inline" width={15} alt="" />
            Javascript
          </span>
          {/* <span className="ring-1 ring-neutral-200 text-sm p-1 inline-flex bg-neutral-50 align-middle gap-1 mx-1 rounded-sm dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:ring-neutral-700">
            <img src="./nodejs.svg" className="inline" width={15} alt="" />
            Node Js
          </span>
          <span className="ring-1 ring-neutral-200 text-sm p-1 inline-flex bg-neutral-50 align-middle gap-1 mx-1 rounded-sm dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:ring-neutral-700">
            <img src="./express.svg" className="inline" width={15} alt="" />
            Express
          </span> */}
        </div>

     
    </div>
  );
};

export default About;
