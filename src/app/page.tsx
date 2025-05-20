"use client";

import Projects from "../components/Projects/Projects";
import Icons from "../components/Icons/Icons";

import Header from "../components/Header/Header";
import About from "../components/About/About";
import Footer from "../components/Footer/Footer";

export default function Home() {

  return (
    <div className="p-5 flex flex-col gap-3 sm:max-w-xl mx-auto">
      <header>
        <Header />
      </header>
      <main>
        <About />

        <section className="my-5" id="specializations">
          <h3 className="font-semibold text-lg">Specializations</h3>
          <p className="text-gray-500 text-sm">Technologies I'm familiar with</p>
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
