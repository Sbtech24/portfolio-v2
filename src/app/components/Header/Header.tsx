import React,{useContext} from 'react'
import { SunIcon,MoonIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import { ThemeProviderContext } from '@/app/providers/ThemeProvider'


const Header = () => {

  const {toggleTheme,theme} = useContext(ThemeProviderContext)

  return (
    <header>
        <nav>
            <div className='flex items-center justify-between'>
                <ul className='flex gap-2 py-4 Capitalize font-bold'>
                    <li><Link href="./">Home</Link></li>
                    <li><Link href="#projects">Projects</Link></li>
                    <li><Link href="/writing">Writings</Link></li>
                </ul>
                {theme ==="light" ? <SunIcon onClick={toggleTheme}/>:<MoonIcon onClick={toggleTheme}/>}
            </div>
                
            <div>

            </div>
        </nav>
    </header>
    
  )
}

export default Header