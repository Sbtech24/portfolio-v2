"use client"

import React,{useContext} from 'react'
import { SunIcon,MoonIcon, DownloadIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import { ThemeProviderContext } from '@/app/providers/ThemeProvider'
import {ListIcon} from "@phosphor-icons/react/ssr";

const Header = () => {

  const {toggleTheme,theme} = useContext(ThemeProviderContext)

  return (
    <header>
      {/* Mobile nav */}
        <nav className='sm:hidden'>
            <div className='flex items-center justify-between'>
              <div className='flex gap-3 items-center'>
                {theme ==="light" ? <SunIcon onClick={toggleTheme}/>:<MoonIcon onClick={toggleTheme}/>}
                <h1>Lorey</h1>
              </div>
           <ListIcon/>

            </div>
                
            <div>

            </div>
        </nav>

      {/* Desktop Nav */}
      <nav className='hidden sm:block'>
            <div className='flex items-center justify-between'>
              <div className='flex gap-3 items-center cursor-pointer'>
                {theme ==="light" ? <SunIcon onClick={toggleTheme}/>:<MoonIcon onClick={toggleTheme}/>}
                <h1>Lorey</h1>
              </div>
         
              <div>
                <ul className='flex gap-5 items-center cursor-pointer'>
                  <li>About me</li>
                  <li>Skills</li>
                  <li>Projects</li>
                  <li>Contact me</li>
                </ul>
              </div>

              <div>
                <button className='flex items-center gap-3 bg-black text-white p-2 rounded-md hover:opacity-80'>Resume <DownloadIcon/> </button>
              </div>

            </div>
                
         
        </nav>
    </header>
    
  )
}

export default Header