import Ripple from '../magicui/ripple'

const GridSeven = () => {
  return (
    <div className="h-80 overflow-hidden md:col-span-2 md:row-span-1 col-span-3 bg-neutral-50/5 backdrop-blur border border-gray-600/50 rounded-[30px] justify-center items-center rounded-bl-xl rounded-tr-[4px]">
        <div className="relative flex h-full w-full max-w-full items-center justify-center overflow-hidden bg-background p-20 md:shadow-xl">
        <p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-white">
            Gallery
        </p>
        <Ripple />
        </div>
    </div>
  )
}

export default GridSeven