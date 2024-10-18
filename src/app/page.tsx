import Image from "next/image";
import Link from "next/link";
import Projects from "./components/Projects/Projects";
import Icons from "./components/Icons/Icons";

export default function Home() {
  return (
   <div className="w-sm p-5 mx-auto">
    <header>
      <div className="nav">
        <nav className="flex justify-between">
        <Image src={`/half.svg`} width={25} height={25} alt="toggle-mode "/>
         <div className="hidden sm:flex gap-2">
          <Link href="#about me" className="hover:text-gray-500">About me</Link>
          <Link href="#specializations" className="hover:text-gray-500">Specialization</Link>
          <Link href="#Projects" className="hover:text-gray-500">Projects</Link>
          <Link href="#Contacts" className="hover:text-gray-500">Contacts</Link>
          
         </div>
        <Image src={`/hamburger.svg`} width={25} height={25} alt="Hamburger" className="sm:hidden"/>

        </nav>
      </div>
      <div>
        <nav className="flex justify-between">
        {/* <Image src={`/hamburger.svg`} width={25} height={25} alt="Hamburger" className="sm:hidden"/> */}
        </nav>
      </div>
    </header>
    <main>
      <div className="flex flex-col p-4 justify-center min-w-full">
        <div className="flex flex-col justify-center w-full mx-auto">
          <Image src={`/demo-profile.jpg`} className="circle mx-auto" width={100} height={100} alt="profile pic"/>
          <div className="mx-auto text-center">
            <h1><span className="text-gray-500">Hi,my name is</span><span className="block font-bold">Oluwasemilore Bajomo</span></h1>
            <div className="flex gap-2 justify-center">
             <Link href="https://github.com/Sbtech24"><Image src={`/github.svg`} width={20} height={20} alt="github"/> </Link>
             <Link  href="https://www.linkedin.com/in/oluwasemilore-bajomo-3a7087247/"><Image src={`/linkedin.svg`} width={20} height={20} alt="linkedin"/></Link>
            </div>
          </div>
        </div>
        <Image src={`/side-element.svg`} className="max-w-56 mx-auto" width={100} height={100} alt="side element"/>
      </div>

      <section className="bg-gray-200 min-w-full p-2" id="about me">
        <h2 className="font-bold text-xl">About me</h2>
        <p className="text-gray-500"> Hello &#128075;, you can call me lorey for short, I am a software engineer currently speecializing in building frontend and 
          and user facing web applications and websites .I Recently graduated with a Bachelors degree in comuputer science from Redeemer's university.
          My current tech stack includes Next Js,ReactJs, Javascript,Typecript, Tailwind Css,Scss and wordpress(sometimes).I interested in software architecture and Human interface design. I am Open to 
          Entry Level Fulltime, Contract and Freelance Roles. I am also open to learning new technologies.You can reach out to me 
        </p>
        <a href="#Contacts" className="text-red-500">here</a>
      </section>

      <section className="my-5" id="specializations">
        <h2 className="font-bold text-xl">Specializations</h2>
        <p className="my-2 text-gray-500">Technologies I'm familiar with</p>
        <div>
          <Icons/>
        </div>

        <section className="my-5" id="Projects">
          <h2 className="font-bold text-xl">Projects</h2>
          <p className="text-gray-500 p-2">Here are the projects I developed,prototyped or participated in </p>
          <div>
            <Projects/>
          </div>
        </section>
      </section>
    </main>

    <footer className="flex flex-col justify-center w-full my-3 py-1">
      <div className="flex flex-col w-full p-3" id="Contacts">
        <div className="flex gap-1 items-left mx-auto justify-left  p-3">
          <Image src={`mail.svg`} width={20} height={20} alt="mail"/>
          <a href="bajomosemilore@gmail.com" className="block hover:text-gray-500">bajomosemilore@gmail.com</a>
      </div>
      <div className="flex gap-1 items-center mx-auto justify-left text-left p-3">
          <Image src={`/github.svg`} width={20} height={20} alt="github"/>
          <a href="https://github.com/Sbtech24" className="block hover:text-gray-500">github.com/Sbtech24</a>
        </div>
        <div className="flex gap-1 items-center mx-auto p-3 justify-left">
          <Image src={`/linkedin.svg`} width={20} height={20} alt="github"/>
          <a href="https://www.linkedin.com/in/oluwasemilore-bajomo-3a7087247/" className="block hover:text-gray-500">Bajomo Oluwasemilore</a>
        </div>

      </div>
     

      <div className="flex justify-end mt-3 ">
      <Image src={`/rocket.svg`} width={40} height={40} alt="rocket" className="hover:cursor-pointer"/>

      </div>
    </footer>
   </div>
  );
}
