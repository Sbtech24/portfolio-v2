"use client";

import { useContext, useState,useEffect } from "react";
import { SunIcon, MoonIcon, DownloadIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { ThemeProviderContext } from "@/app/providers/ThemeProvider";
import { ListIcon, XIcon } from "@phosphor-icons/react/ssr";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { toggleTheme, theme } = useContext(ThemeProviderContext);

    useEffect(() => {
    if (typeof window !== "undefined") {
      document.documentElement.style.scrollBehavior = "smooth";
    }
  }, []);

  const navLinks = [
    { href: "#about", label: "About me" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
  ];

  return (
    <header className="py-4 px-4 sm:px-8">
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

        {/* Animated mobile menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              key="mobileMenu"
              initial={{ y: "-100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "-100%", opacity: 0 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              className="fixed inset-0 z-50 bg-white dark:bg-black text-black dark:text-white flex flex-col items-start p-6 gap-6"
            >
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
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Desktop Nav */}
      <nav className="hidden sm:block">
        <div className="flex items-center justify-between">
          {/* Theme toggle */}
          <div className="flex gap-3 items-center cursor-pointer">
            {theme === "light" ? (
              <SunIcon onClick={toggleTheme} />
            ) : (
              <MoonIcon onClick={toggleTheme} />
            )}
          </div>

          {/* Nav Links with squiggly underline */}
          <ul className="flex gap-8 items-center">
            {navLinks.map((link) => (
              <li key={link.href} className="relative">
                <a
                  href={link.href}
                  className="text-base font-medium inline-block nav-link px-1 py-1"
                >
                  {link.label}

                  {/* SVG squiggly underline */}
                  <svg
                    className="absolute left-0 bottom-0 w-full h-3 pointer-events-none"
                    viewBox="0 0 100 10"
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden
                  >
                    <path
                      d="M0 6 Q25 0 50 6 T100 6"
                      stroke="#f97316"
                      strokeWidth="2.8"
                      strokeLinecap="round"
                      fill="none"
                      style={{
                        strokeDasharray: 220,
                        strokeDashoffset: 220,
                        transition:
                          "stroke-dashoffset 360ms cubic-bezier(.2,.9,.2,1), opacity 220ms ease",
                        opacity: 0,
                      }}
                      className="squiggle-path"
                    />
                  </svg>
                </a>
              </li>
            ))}
          </ul>

          {/* Resume button */}
          <div>
            <a
              href="https://drive.google.com/file/d/138SukGev974gzbnvnCVfIgYtCQkvqCKC/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-md hover:opacity-80 dark:bg-white dark:text-black"
            >
              Resume <DownloadIcon />
            </a>
          </div>
        </div>
      </nav>

      {/* Scoped CSS for hover underline animation */}
      <style jsx>{`
        .nav-link {
          position: relative;
          padding-bottom: 6px;
        }

        .nav-link svg {
          position: absolute;
          left: 0;
          bottom: 0;
          height: 12px;
          overflow: visible;
        }

        .nav-link:hover .squiggle-path {
          stroke-dashoffset: 0 !important;
          opacity: 1 !important;
        }

        a:focus-visible .squiggle-path {
          stroke-dashoffset: 0 !important;
          opacity: 1 !important;
        }
      `}</style>
    </header>
  );
};

export default Header;
