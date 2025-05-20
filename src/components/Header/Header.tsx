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
               <h1 className='font-semibold text-lg'>Hey &#128075;, i'm Semilore </h1>
                {theme ==="light" ? <SunIcon onClick={toggleTheme}/>:<MoonIcon onClick={toggleTheme}/>}
            </div>
                
            <div>

            </div>
        </nav>
    </header>
    
  )
}

export default Header