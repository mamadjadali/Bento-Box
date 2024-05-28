import Current from "../../data/Current.json"


const GridThree = () => {
  return (
    <div className="h-80 overflow-hidden md:col-span-1 md:row-span-1 sm:col-span-2 col-span-full bg-neutral-50/5 backdrop-blur border border-gray-600/50 rounded-[30px] flex justify-center items-center relative rounded-bl-xl rounded-br-[4px] rounded-tr-[4px]">
		<div className="absolute top-0 left-0 p-7 text-white font-semibold">{Current.title}<a href="https://www.mobile140.com" target="_blank" className="text-[#27a9df]">140</a>.
			<p className="font-sans text-xs mt-3 text-[#919398]">{Current.subTitle}</p>
		</div>
		<img className="h-full object-cover" src="./c.svg" draggable="false"/>
	</div>
  )
}

export default GridThree