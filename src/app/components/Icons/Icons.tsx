import React from 'react'
import { IconBrandJavascript,IconBrandTypescript,IconBrandReact,IconBrandMongodb,
    IconBrandNextjs,IconBrandTailwind,IconBrandSass,IconBrandCss3,IconBrandNodejs,IconBrandWordpress,IconBrandReactNative,
    IconBrandFirebase,IconHtml,IconBrandBootstrap
  } from '@tabler/icons-react';

const Icons = () => {
  return (
    <div className='flex flex-wrap gap-2'>
    <IconBrandJavascript size={45}stroke={1} />
    <IconBrandTypescript size={45} stroke={1} />
    <IconBrandReact size={45} stroke={1} />
    <IconBrandMongodb size={45} stroke={1} />
    <IconBrandNextjs size={45} stroke={1} />
    <IconBrandTailwind size={45} stroke={1} />
    <IconBrandSass size={45} stroke={1} />
    <IconBrandCss3 size={45}stroke={1} />
    <IconBrandNodejs size={45} stroke={1}/>
    <IconBrandWordpress size={45}  stroke={1} />
    <IconBrandReactNative size={45}  stroke={1} />
    <IconBrandBootstrap size={45}  stroke={1} />
    <IconHtml size={45}stroke={1}/>
    <IconBrandFirebase size={45}  stroke={1} />
    </div>
  )
}

export default Icons