"use client";

import { useContext, useState } from "react";
import { SunIcon, MoonIcon, DownloadIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { ThemeProviderContext } from "@/app/providers/ThemeProvider";
import { ListIcon, XIcon } from "@phosphor-icons/react/ssr";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { toggleTheme, theme } = useContext(ThemeProviderContext);

  return (
    <header>
      {/* Mobile nav */}
      <nav className="sm:hidden">
        <div className="flex items-center justify-between">
          <div className="flex gap-3 items-center">
            {theme === "light" ? (
              <SunIcon onClick={toggleTheme} />
            ) : (
              <MoonIcon onClick={toggleTheme} />
            )}
          </div>
          <button onClick={() => setMenuOpen(true)}>
            <ListIcon />
          </button>
        </div>

        {menuOpen && (
          <div className="fixed inset-0 z-50 bg-white dark:bg-black text-black dark:text-white flex flex-col items-start p-6 gap-6 transition-all">
            <div className="flex justify-between w-full items-center">
              <span className="text-lg font-bold">Menu</span>
              <button onClick={() => setMenuOpen(false)}>
                <XIcon size={28} />
              </button>
            </div>

            <nav className="flex flex-col gap-4 mt-4 text-lg w-full">
              <Link href="#about" onClick={() => setMenuOpen(false)}>
                About Me
              </Link>
              <Link href="#skills" onClick={() => setMenuOpen(false)}>
                Skills
              </Link>
              <Link href="#projects" onClick={() => setMenuOpen(false)}>
                Projects
              </Link>
              <Link href="#contact" onClick={() => setMenuOpen(false)}>
                Contact
              </Link>
              <a
                href="/Bajomo Oluwasemilore-CV.pdf"
                download
                className="mt-4 bg-black text-white px-4 py-2 rounded-md flex items-center gap-2 hover:opacity-80 dark:bg-white dark:text-black"
              >
                Resume <DownloadIcon />
              </a>
            </nav>
          </div>
        )}
      </nav>

      {/* Desktop Nav */}
      <nav className="hidden sm:block">
        <div className="flex items-center justify-between">
          <div className="flex gap-3 items-center cursor-pointer">
            {theme === "light" ? (
              <SunIcon onClick={toggleTheme} />
            ) : (
              <MoonIcon onClick={toggleTheme} />
            )}
          </div>

          <div>
            <ul className="flex gap-5 items-center cursor-pointer">
              <li><a href="#about">About me</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              {/* <li> <a href="#contact">Conta</a>Contact me</li> */}
            </ul>
          </div>

          <div>
            <div>
              <a
                href="https://drive.google.com/file/d/1Y2AAh2SSIblefnUwVqZGMqz9hCTnhH3z/view?usp=sharing"
                target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-md hover:opacity-80 dark:bg-white dark:text-black"
              >
                Resume <DownloadIcon />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
