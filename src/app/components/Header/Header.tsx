import React from 'react'
import { SunIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
const Header = () => {
  return (
    <header>
        <nav>
            <div className='flex items-center justify-between'>
                <ul className='flex gap-2 py-4 Capitalize font-bold'>
                    <li><Link href="./">Home</Link></li>
                    <li><Link href="#projects">Projects</Link></li>
                    <li><Link href="/writing">Writings</Link></li>
                </ul>
                <SunIcon/>
            </div>
                
            <div>

            </div>
        </nav>
    </header>
    
  )
}

export default Header