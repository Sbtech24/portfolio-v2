import Image from "next/image";
import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";
import { JobTrackr, miniUnsplash,tag} from "@/assets";


const projects = [
  {
    id: 1,
    title: "Mini-unsplash-app",
    description:
      "A mini app that consumes the Unsplash API to show images. Built with Next, TypeScript, and Tailwind CSS",
    image: miniUnsplash,
    link: "https://mini-unsplash-app.vercel.app/",
  },
 
   {
    id: 2,
    title: "JobTrackr",
    description:
      "A Job tracking web application that helps people track and manage their job applications in a more efficient way - Currently under contruction 🚧. Next js ,tailwind css, typescript, Recharts"
      ,
    image: JobTrackr,
    link: "https://github.com/Sbtech24/jobTrackr",
  },
  {
    id: 3,
    title: "Tag",
    description: "Built the landing page for useTag using - Next js,Tailwind,gsap,motion,typescript",
    image: tag,
    link: "https://usetag.transweeft.com/",
  },
];

export default function ProjectsSection() {
  return (
    <section className="py-16 bg-black text-white px-8 rounded-md">
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
