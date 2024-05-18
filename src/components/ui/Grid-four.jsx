
const GridFour = () => {
  return (
    <div class="h-80 md:col-span-2 md:row-span-1 overflow-hidden col-span-3 relative bg-neutral-50/5 backdrop-blur border border-gray-600/50 rounded-[30px] flex flex-col justify-center items-start  rounded-l-[4px] rounded-br-xl ">
		<div class="flex flex-row font-sans z-10 gap-2 p-[8px] sm:pt-4 sm:p-0  sm:pl-14 justify-start items-center">
			Youtube
			<svg class="hover:fill-white duration-200 hover:-translate-y-1"
				stroke="currentColor" fill="#6c757d" stroke-width="0" viewBox="0 0 16 16" height="25px" width="25px" xmlns="http://www.w3.org/2000/svg"><path d="M0 8a8 8 0 1 0 16 0A8 8 0 0 0 0 8m5.904 2.803a.5.5 0 1 1-.707-.707L9.293 6H6.525a.5.5 0 1 1 0-1H10.5a.5.5 0 0 1 .5.5v3.975a.5.5 0 0 1-1 0V6.707z"></path></svg>
		</div>
		<p class="font-sans z-10 text-xs sm:pl-14 p-[8px] sm:p-0 text-[11px] text-[#919398] relative">Lorem ipsum dolor sit adipisicing elit.</p>
		<div class="w-full md:w-[100%] h-full relative m-auto">
			<video class="absolute bottom-0 w-[90%] blur-xl filter"
			muted
			loop
			autoPlay
			>
				<source src="./Macl.mp4" type="video/mp4"/>
			</video>
			<video class="absolute bottom-0 left-1/2 transform -translate-x-1/2 rounded-t-xl w-[80%] m-auto"
			muted
			loop
			autoPlay
			>
				<source src="./Macl.mp4" type="video/mp4"/>
			</video>
		</div>
	</div>
  )
}

export default GridFour