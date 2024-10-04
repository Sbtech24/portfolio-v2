import React from 'react'
import Image from 'next/image'
const Projects = () => {
  return (
    <div>
      <div>
        {/* <Image width={} height={} alt='project-img'/> */}
      </div>

      <div className='max-w-lg mx-auto p-5'>
        <Image src={`/dictionary-web-app.jpg`}className='w-full' width={100} height={100} alt='project image '/>
        <h4 className='font-bold'>Project Name</h4>
        <p>Lorem , ipsa architecto excepturi tempora dolore rem a! Pariatur.
        </p>
        <div className='flex justify-end gap-3'>
            <Image src={`/github.svg`} width={20} height={20} alt="github"/>
            <Image src={`/external-link.svg`} width={20} height={20} alt="linkedin"/>
          </div>
      </div>
      
    </div>
  )
}

export default Projects