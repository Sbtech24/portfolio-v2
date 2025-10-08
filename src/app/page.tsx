"use client";

import { motion } from "framer-motion";
import Header from "../components/Header/Header";
import Image from "next/image";
import { man, about } from "@/assets";
import SocialLinks from "@/components/SocialLinks";
import SkillsSection from "@/components/Skills";
import ProjectsSection from "@/components/Projects";

export default function Home() {
  return (
    <div className="p-8 flex flex-col gap-6 max-w-6xl mx-auto">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Header />
      </motion.header>

      <main className="flex flex-col gap-16">
     
        <section className="flex flex-col gap-3 sm:flex-row-reverse sm:justify-center">
          <motion.div
            className="sm:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Image src={man} alt="Man" className="mx-auto" />
          </motion.div>

          <motion.div
            className="flex flex-col gap-4 self-center text-center sm:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <h1 className="text-xl font-light sm:text-3xl">
              Hello I’m{" "}
              <span className="font-extrabold">Bajomo Semilore</span> <br />
              <span className="font-extrabold">
                Software <span>Developer</span>
              </span>{" "}
              <br />
              Based in Lagos,{" "}
              <span className="font-extrabold">Nigeria.</span>
            </h1>

            <motion.div whileHover={{ scale: 1.05 }}>
              <SocialLinks />
            </motion.div>
          </motion.div>
        </section>

    
        <motion.section
          id="skills"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <SkillsSection />
        </motion.section>

     
        <section id="about" className="sm:flex justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <Image src={about} alt="About me" />
          </motion.div>

          <motion.article
            className="sm:w-1/2 mt-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold mb-2">About Me</h2>
            <div className="space-y-4 mt-2 text-[18px] text-zinc-500">
              <p>
                I'm a frontend-focused software engineer with a growing
                passion for full-stack development. I enjoy building fast,
                accessible, and visually polished web applications using modern
                tools like React, Next.js, TypeScript, and Tailwind CSS.
              </p>
              <p>
                I'm currently expanding my backend skills with Node.js and
                TypeScript, and exploring technologies like ExpressJS, NestJS
                and PostgreSQL. I love the challenge of building reliable
                systems and seamless user experiences that combine logic and
                design.
              </p>
              <p>
                Long term, I’m working toward building scalable products and
                contributing to impactful, product-based teams.
              </p>
            </div>
          </motion.article>
        </section>

        {/* 🚀 Projects Section */}
        <motion.section
          id="projects"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <ProjectsSection />
        </motion.section>
      </main>

      {/* ⚫ Footer */}
      <motion.footer
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-black text-white p-4 w-full text-xs rounded-md sm:text-sm"
      >
        <div className="flex flex-col justify-center sm:flex-row sm:justify-between gap-5 w-full">
          <motion.div whileHover={{ scale: 1.05 }}>
            <SocialLinks />
          </motion.div>

          <div className="flex gap-2 flex-col justify-center">
            <small>@ 2024-2025</small>
            <small>Made with ❤️ from Lagos, Nigeria</small>
          </div>
        </div>
      </motion.footer>
    </div>
  );
}
