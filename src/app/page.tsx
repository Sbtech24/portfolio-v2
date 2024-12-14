"use client";
import Image from "next/image";
import Link from "next/link";
import Projects from "./components/Projects/Projects";
import Icons from "./components/Icons/Icons";
import { useTheme } from "./providers/ThemeProvider";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";

export default function Home() {
  const { setTheme } = useTheme();

  return (
    <div className="p-5 sm:max-w-xl mx-auto">
      <header>
        <Header />
      </header>
      <main>
        <About />

        <section className="my-5" id="specializations">
          <h3 className="font-bold ">Specializations</h3>
          <p className="text-gray-500 text-base">Technologies I'm familiar with</p>
          <div>
            <Icons />
          </div>

          <section >
           <Projects/>
          </section>
        </section>

      </main>

      <Footer/>
    </div>
  );
}
