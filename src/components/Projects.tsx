import Image from "next/image";
import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";
import { dictionary, miniUnsplash,tag,edTech} from "@/assets";


const projects = [
  {
    id: 1,
    title: "Tag",
    description: "Next js,Tailwind,gsap,motion,typescript",
    image: tag,
    link: "https://usetag.transweeft.com/",
  },
   {
    id: 2,
    title: "Mini-unsplash-app",
    description:
      "WIP. A mini app that consumes the Unsplash API to show images. Built with Next, TypeScript, and Tailwind CSS",
    image: miniUnsplash,
    link: "https://mini-unsplash-app.vercel.app/",
  },
  {
    id: 3,
    title: "Dictionary Web app",
    description: "A Dictionary web app built with React + Vite",
    image: dictionary,
    link: "https://dictionary-web-app-liart.vercel.app/",
  },
  {
    id: 4,
    title: "Youtube viewer tool",
    description: "A quick tool I built for a frontend engineer test - React,React hook Form, Shadcn",
    image: edTech,
    link: "https://edtech-platform-nine.vercel.app/",
  },
 
];

export default function ProjectsSection() {
  return (
    <section className="py-16 bg-black text-white px-8">
      <h2 className="text-3xl font-bold text-center mb-12">My Projects</h2>

      <div className="space-y-12">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`flex flex-col md:flex-row ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            } gap-8 items-center`}
          >
            <div className="md:w-1/2">
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                className="rounded-lg border border-gray-200 shadow-sm"
                priority
              />
            </div>
            <div className="md:w-1/2 space-y-4">
              <h3 className="text-2xl font-semibold">
                <span className="text-gray-400 mr-2 text-lg">
                  {String(project.id).padStart(2, "0")}
                </span>
                {project.title}
              </h3>
              <p className="text-gray-500">{project.description}</p>
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm text-blue-500 hover:underline"
              >
                View Project <FiExternalLink />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Checkout More Button */}
      <div className="mt-16 text-center">
        <Link
          href="https://github.com/Sbtech24"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-black text-base font-medium px-6 py-3 rounded-md  hover:transition-colors"
        >
          Check out more projects on GitHub
        </Link>
      </div>
    </section>
  );
}
