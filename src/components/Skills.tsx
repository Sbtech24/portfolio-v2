"use client";

import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaNodeJs,
  FaSass,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiStorybook,
  SiNestjs,
  SiSocketdotio,
} from "react-icons/si";

const skills = [
  { name: "JavaScript", icon: SiJavascript },
  { name: "TypeScript", icon: SiTypescript },
  { name: "React", icon: FaReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "HTML", icon: FaHtml5 },
  { name: "CSS", icon: FaCss3Alt },
  { name: "Sass/SCSS", icon: FaSass },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "NestJs", icon: SiNestjs },
  { name: "Git", icon: FaGitAlt },
  { name: "Node.js", icon: FaNodeJs },
  { name: "Storybook", icon: SiStorybook },
];

export default function SkillsSection() {
  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold mb-6 text-center">My Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 place-items-center">
        {skills.map(({ name, icon: Icon }) => (
          <div
            key={name}
            className="w-28 h-28 bg-background border border-black hover:bg-black hover:border-white hover:text-white flex flex-col items-center justify-center rounded-md shadow-sm"
          >
            <Icon size={30} />
            <p className="mt-2 text-sm font-medium text-center">{name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
