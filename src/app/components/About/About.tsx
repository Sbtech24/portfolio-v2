import React from "react";

const About = () => {
  return (
    <div>
      <h3 className="font-bold pt-4">About me </h3>
      <p className="text-base my-1 pt-4 dark:text-neutral-300 ">
        Hello &#128075; my name is Bajomo Oluwasemilore. I am a software
        engineer based in Nigeria My current tech stack includes

      </p>
      <div className="inline">
            <span className="ring-1 ring-neutral-200 text-sm p-1 inline-flex bg-neutral-50 align-middle gap-1 mx-1 rounded-sm dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:ring-neutral-700">
            <img src="./react-color.svg" width={20} className="inline" alt="" />
            React
            </span>
          <span className="ring-1 ring-neutral-200 text-sm p-1 inline-flex bg-neutral-50 align-middle gap-1 mx-1 rounded-sm dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:ring-neutral-700">
            <img src="./nextdotjs-color.svg" width={20} className="inline" alt="" />
            Next
          </span>
          <span className="ring-1 ring-neutral-200 text-sm p-1 inline-flex bg-neutral-50 align-middle gap-1 mx-1 rounded-sm dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:ring-neutral-700">
            <img src="./tailwindcss-color.svg" className="inline" width={18} alt="" />
            Tailwind
          </span>
          <span className="ring-1 ring-neutral-200 text-sm p-1 inline-flex bg-neutral-50 align-middle gap-1 mx-1 rounded-sm dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:ring-neutral-700">
            <img src="./javascript-color.svg" className="inline" width={15} alt="" />
            Javascript
          </span>
        </div>

     
    </div>
  );
};

export default About;
