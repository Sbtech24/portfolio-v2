import React from 'react'
import Link from 'next/link'
const Footer = () => {
  return (
    <>
        <footer className='py-3'>
            <nav>
                <ul className='flex justify-evenly text-base'>
                    <li><Link href="https://github.com/Sbtech24">Github</Link></li>
                    <li><Link href="https://www.linkedin.com/in/oluwasemilore-bajomo-3a7087247/">Linkedin</Link></li>
                    <li><Link href="https://twitter.com/BajomoSemilore">Twitter</Link></li>
                </ul>
            </nav>
        </footer>
    </>
  )
}

export default Footer