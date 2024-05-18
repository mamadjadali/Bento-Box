import React from 'react'

const GridSix = () => {
  return (
    <div class="h-80 md:col-span-1 md:row-span-1 col-span-3 overflow-hidden bg-neutral-50/5 border border-gray-600/50 backdrop-blur rounded-[30px] flex justify-center items-end relative rounded-bl-[4px] rounded-tr-xl">
		{/* <img class="absolute top-[5px] right-0 z-10 h-full animate-floatUpDown pointer-events-none" draggable="false" src="../../public/Group 7.png" /> */}
		<div class="absolute top-0 left-0 p-5 text-white font-normal">
				Contact me<br/>
			<span class="font-normal text-sm text-justify text-[#919398]">Make a Call or email.</span>
		</div>
		<div class="absolute left-0 pb-9 pl-11 lg:pl-14 flex flex-col items-center p-3 text-white">
		<div class="w-14 h-14 rounded-md rounded-b-none bg-neutral-50/5 hover:bg-neutral-50/10 hover:border-gray-300/90 duration-200 backdrop-blur border border-gray-400/30 mr-2 flex justify-center items-center">
			<svg class="w-6 h-6" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path d="M2 8.99374C2 5.68349 4.67654 3 8.00066 3H15.9993C19.3134 3 22 5.69478 22 8.99374V21H8.00066C4.68659 21 2 18.3052 2 15.0063V8.99374ZM14 11V13H16V11H14ZM8 11V13H10V11H8Z"></path></svg>						</div>
		<div class="w-14 h-14 rounded-md rounded-t-none bg-neutral-50/5 hover:bg-neutral-50/10 hover:border-gray-300/90 duration-200 backdrop-blur border border-gray-400/30 mr-2 flex justify-center items-center">
			<svg class="w-5 h-5" stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="4"></circle><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8"></path></svg>						</div>
		</div>
	</div>
  )
}

export default GridSix