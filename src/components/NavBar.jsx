
const NavBar = () => {
  return (
    <div className="navbar font-medium text-[#919398] text-lg mt-5 p-6 flex justify-between items-center">
          <div className="left-text flex cursor-pointer">
              <span className="text-white">Mohsen, </span>
              <p>Video Producer</p>
          </div>
          <div className="right-items sm:block hidden">
              <a href="#present" className="mr-4 hover:text-white/90 duration-300">Present</a>
              <a href="#skill" className="mr-4 hover:text-white/90 duration-300">Skills</a>
              <a href="#contact" className="mr-4 hover:text-white/90 duration-300">Contact</a>
              <a href="src/assets/CV.pdf">
              <button className="relative inline-flex h-10 overflow-hidden rounded-xl p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-xl bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                    Download CV
                  </span>
                </button>
                </a>
          </div>
      </div>
  )
}

export default NavBar

