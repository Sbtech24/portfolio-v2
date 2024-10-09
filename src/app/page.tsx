import Image from "next/image";
import Link from "next/link";
import Projects from "./components/Projects/Projects";
import Icons from "./components/Icons/Icons";

export default function Home() {
  return (
   <div className="w-sm p-5 mx-auto">
    <header>
      <div className="nav">
        <nav>
         <img src="" alt="" />
         <div className="hidden">
          <Link href="#about me">about me</Link>
          <Link href="#specializations">Specialization</Link>
          <Link href="#Projects">Projects</Link>
          <Link href="#Contacts">Contacts</Link>
         </div>
        </nav>
      </div>
      <div>
        <nav className="flex justify-between">
        <Image src={`/half.svg`} width={25} height={25} alt="toggle-mode "/>
        <Image src={`/hamburger.svg`} width={25} height={25} alt="Hamburger"/>
        </nav>
      </div>
    </header>
    <main>
      <div className="flex flex-col p-4 justify-center min-w-full">
        <div className="flex flex-col justify-center w-full mx-auto">
          <Image src={`/demo-profile.jpg`} className="circle mx-auto" width={100} height={100} alt="profile pic"/>
          <div className="mx-auto text-center">
            <h1>Hi,my name is <span className="block font-bold">Oluwasemilore Bajomo</span></h1>
            <div className="flex gap-2 justify-center">
             <Link href="https://github.com/Sbtech24"><Image src={`/github.svg`} width={20} height={20} alt="github"/> </Link>
             <Link  href="https://www.linkedin.com/in/oluwasemilore-bajomo-3a7087247/"><Image src={`/linkedin.svg`} width={20} height={20} alt="linkedin"/></Link>
            </div>
          </div>
        </div>
        <Image src={`/side-element.svg`} className="max-w-56 mx-auto" width={100} height={100} alt="side element"/>
      </div>

      <section className="bg-gray-200 min-w-full p-2">
        <h2 className="font-bold text-xl">About me</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti repellendus eum modi distinctio illo amet pariatur quas ab harum provident vero unde, nobis quam sed natus repudiandae ad eveniet sunt.
        Eos perferendis, in quod ipsum iste repellat iusto veritatis similique eligendi at alias inventore error quisquam temporibus distinctio molestias provident beatae. Tempora iure autem quasi quo inventore, voluptas dignissimos? Harum?</p>
      </section>

      <section className="my-3 ">
        <h2 className="font-bold text-xl">Specializations</h2>
        <p className="my-2">Technologies I'm familiar with</p>
        <div>
          <Icons/>
        </div>

        <section className="my-3">
          <h2 className="font-bold text-xl">Projects</h2>
          <p>here are the projects I developed,prototyped or participated in </p>
          <div>
            <Projects/>
          </div>
        </section>
      </section>
    </main>

    <footer className="flex flex-col justify-center w-full">
      <div className="flex gap-1 items-center">
        <Image src={`mail.svg`} width={20} height={20} alt="mail"/>
        <a href="bajomosemilore@gmail.com" className="block">bajomosemilore@gmail.com</a>
     </div>
     <div className="flex gap-1 items-center">
        <Image src={`/github.svg`} width={20} height={20} alt="github"/>
        <a href="https://github.com/Sbtech24" className="block">github.com/Sbtech24</a>
      </div>
      <div className="flex gap-1 items-center">
        <Image src={`/linkedin.svg`} width={20} height={20} alt="github"/>
        <a href="https://www.linkedin.com/in/oluwasemilore-bajomo-3a7087247/" className="block">Bajomo Oluwasemilore</a>
      </div>
    </footer>
   </div>
  );
}
