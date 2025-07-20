import Header from "../components/Header/Header";
import Image from "next/image";
import { man, about } from "@/assets";
import SocialLinks from "@/components/SocialLinks";
import SkillsSection from "@/components/Skills";
import ProjectsSection from "@/components/Projects";

export default function Home() {
  return (
    <div className="p-8 flex flex-col gap-6 max-w-6xl mx-auto">
      <header>
        <Header />
      </header>
      <main className="flex flex-col gap-4">
        {/* Hero section */}
        <section>
          <div className="flex flex-col gap-3 sm:flex-row-reverse sm:justify-center">
            <div className="sm:w-1/2">
              <Image src={man} alt="Man" className="mx-auto" />
            </div>

            <div className="flex flex-col gap-4 self-center">
              <div>
                <h1 className="text-xl font-light sm:text-3xl">
                  Hello I’am{" "}
                  <span className="font-extrabold">Bajomo Semilore </span>{" "}
                  <br />
                  <span className="font-extrabold">
                    Software <span>developer</span> <br />
                  </span>{" "}
                  Based in Lagos,
                  <span className="font-extrabold"> Nigeria.</span>
                </h1>
              </div>
              <div>
                <SocialLinks />
              </div>
            </div>
          </div>
        </section>

        {/* My skills  */}
        <section>
          <SkillsSection />
        </section>

        {/*About section*/}
        <section>
          <div className="sm:flex justify-between gap-8">
            <div >
              <Image src={about} alt="image-of-a dude" />
            </div>

            <article className="sm:w-1/2">
              <h2>About Me</h2>

              <div className="space-y-4 text-[18px] text-zinc-500">
                <p>
                  I'm a frontend-focused software engineer with a growing
                  passion for full-stack development. I enjoy building fast,
                  accessible, and visually polished web applications using
                  modern tools like React, Next.js, TypeScript, and Tailwind
                  CSS.
                </p>
                <p>
                  I'm currently expanding my backend skills with Node.js and
                  TypeScript, and exploring technologies like ExpressJS,NestJS
                  and PostgreSQL. I love the challenge of building reliable
                  systems and seamless user experiences that combine logic and
                  design.
                </p>
                <p>
                  Long term, I’m working toward building scalable products,
                  contributing to impactful product based teams.
                </p>
              </div>
            </article>
          </div>
        </section>

        {/* Project section */}
        <section>
          <ProjectsSection/>
        </section>

        {/* Contact section */}
        <section></section>
      </main>

      {/* Footer section */}
      <footer className="bg-black text-white p-4 w-full text-xs rounded-md sm:text-sm">
        <div className="flex justify-between gap-4 w-full">
          <div className="self-center">
                <SocialLinks />

          </div>
       

          <div className="flex gap-2 flex-col">
            <small>@ 2024-2025</small>
            <small>Made with ❤️ from Lagos, Nigeria</small>
          </div>
        </div>
      </footer>
    </div>
  );
}
