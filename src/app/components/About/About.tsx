import React from "react";

const About = () => {
  return (
    <div>
      <h3 className="font-bold pt-4">About me </h3>
      <p className="text-base text-neutral-300 my-1 pt-4">
        Hello &#128075; my name is Bajomo Oluwasemilore. I am a software
        engineer base in Nigeria My current tech stack includes

      </p>
      <div className="inline">
            <span className="bg-neutral-800 p-1 inline-flex align-middle gap-1 mx-1 rounded-sm">
            <img src="./react-color.svg" width={20} className="inline" alt="" />
            React
            </span>
          <span className="bg-neutral-800 p-1 inline-flex align-middle gap-1 mx-1 rounded-sm">
            <img src="./nextdotjs-color.svg" width={20} className="inline" alt="" />
            Next
          </span>
          <span className="bg-neutral-800 p-1 inline-flex align-middle gap-1 mx-1 rounded-sm">
            <img src="./tailwindcss-color.svg" className="inline" width={20} alt="" />
            Tailwind
          </span>
          <span className="bg-neutral-800 p-1 inline-flex align-middle gap-1 mx-1 rounded-sm">
            <img src="./javascript-color.svg" className="inline" width={20} alt="" />
            Javascript
          </span>
        </div>

      <p className="text-base text-neutral-300 my-1 pt-4">
      I am currently job hunting and I am open to entry level/Junior Frontend
        developer roles.
      </p>
    </div>
  );
};

export default About;
