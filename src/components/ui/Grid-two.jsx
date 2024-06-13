import React from 'react'
import { Meteors } from '../magicui/meteors'

const GridTwo = () => {
  return (
    <div className="md:col-span-1 md:row-span-1 h-80 sm:col-span-1  sm:block col-span-full hover:scale-105 duration-300 relative overflow-hidden bg-neutral-50/5 border border-gray-500/50 backdrop-blur rounded-[30px] rounded-bl-[4px] rounded-tr-xl justify-center items-end">
		<div className='absolute inset-0 z-0'>
    <Meteors number={30}/>
    </div>
    <img className="absolute inset-0 h-full object-cover bottom-0 z-10" draggable="false" src="./me.png" />
	</div>
  )
}

export default GridTwo