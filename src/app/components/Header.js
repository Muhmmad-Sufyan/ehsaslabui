'use client'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="px-6 py-4">
      <div className="flex box-between-center md:p-3">
        <img className="w-35 sm:w-45 xl:w-50" src="/assets/logo.png" alt="Ehsas Lab Logo" />
        <ul className="hidden lg:flex box-center gap-8 xl:gap-10 w-3/5">
          <li className="text-[#3D9C02] hover:text-[#3D9C02] transition-all duration-200"><a href="#">Home</a></li>
          <li className="hover:text-[#3D9C02] transition-all duration-200"><a href="#about">About Us</a></li>
          <li className="hover:text-[#3D9C02] transition-all duration-200"><a href="#training">Training Programs</a></li>
          <li className="hover:text-[#3D9C02] transition-all duration-200"><a href="#upcoming">Upcoming Sessions</a></li>
        </ul>
        <a href="#">
          <button className="hidden lg:block cursor-pointer leading-5 bg-[#3D9C02] hover:bg-[#368207eb] text-white w-32 h-10 xl:p-2 rounded-full">
            Apply Now
          </button>
        </a>
        
        {/* Mobile Menu */}
        <div className="lg:hidden">
          <input 
            type="checkbox" 
            id="menuToggle" 
            className="peer hidden"
            checked={isMenuOpen}
            onChange={(e) => setIsMenuOpen(e.target.checked)}
          />
          <label htmlFor="menuToggle" className="font-black text-[#3D9C02] text-2xl cursor-pointer">
            ☰
          </label>
          <div className={`absolute z-50 animate-translateY top-0 right-0 bg-[#e7f9db] w-[300px] ${isMenuOpen ? 'block' : 'hidden'} pb-8 rounded-2xl rounded-r-none`}>
            <div className="flex items-center justify-between px-7 py-5">
              <img className="w-25" src="/assets/logo.png" alt="Ehsas Lab Logo" />
              <input 
                type="checkbox" 
                id="menuToggle" 
                className="peer hidden"
                checked={isMenuOpen}
                onChange={(e) => setIsMenuOpen(e.target.checked)}
              />
              <label htmlFor="menuToggle" className="cursor-pointer">
                <span className="grid justify-center items-center border-2 border-gray-500 size-8 rounded-md">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" viewBox="0 0 12 12">
                    <path stroke="#001B4C" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m8.625 3.375-5.25 5.25m5.25 0-5.25-5.25z" />
                  </svg>
                </span>
              </label>
            </div>
            <ul className="flex flex-col justify-center gap-6">
              <li className="flex items-center gap-2 mx-6 hover:text-[#3D9C02]">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path fill="gray" fillRule="evenodd" d="M20.36 18.01c0 2.204-1.87 3.99-4.18 3.99H7.82c-2.31 0-4.18-1.786-4.18-3.99v-4.877a2.6 2.6 0 0 0-.82-1.888c-1.216-1.16-1.058-3.083.333-4.048L9.54 2.763a4.34 4.34 0 0 1 4.918 0l6.389 4.434c1.39.965 1.548 2.888.332 4.048a2.6 2.6 0 0 0-.82 1.888zM12 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4" clipRule="evenodd" />
                </svg>
                <a className="text-sm" href="#" onClick={() => setIsMenuOpen(false)}>Home</a>
              </li>
              <li className="flex items-center gap-2 mx-6 hover:text-[#3D9C02]">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="gray" viewBox="0 0 16 16">
                  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                </svg>
                <a className="text-sm" href="#about" onClick={() => setIsMenuOpen(false)}>About Us</a>
              </li>
              <li className="flex items-center gap-2 mx-6 hover:text-[#3D9C02]">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path fill="gray" fillRule="evenodd" d="M2 8a2 2 0 0 1 2-2h2.298a2 2 0 0 0 1.25-.438L10.75 3a2 2 0 0 1 2.498 0l3.203 2.562a2 2 0 0 0 1.25.438H20a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-5v-4a3 3 0 0 0-6 0v4H4a2 2 0 0 1-2-2zm12 2a2 2 0 1 0-4 0 2 2 0 0 0 4 0" clipRule="evenodd" />
                </svg>
                <a className="text-sm" href="#training" onClick={() => setIsMenuOpen(false)}>Training Programs</a>
              </li>
              <li className="flex items-center gap-2 mx-6 hover:text-[#3D9C02]">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <g clipPath="url(#a)">
                    <path fill="gray" fillRule="evenodd" d="M17.647 18.186a.5.5 0 0 0 .5.5h5.147c.39 0 .706-.316.706-.706v-12a.706.706 0 0 0-.706-.706h-5.147a.5.5 0 0 0-.5.5zm1.412-9.03a1.766 1.766 0 0 0 3.53 0 1.766 1.766 0 0 0-3.53 0m-.353 4.585c0 .197.16.356.354.356h3.527a.353.353 0 0 0 .354-.356v-.7a.357.357 0 0 0-.354-.355H19.06a.353.353 0 0 0-.354.356zm.706 2.47c0 .198.16.357.352.357h2.12a.35.35 0 0 0 .351-.356v-.7a.356.356 0 0 0-.352-.356h-2.12a.35.35 0 0 0-.351.356zM8.47 4.216a.706.706 0 0 0-.706.706v14.118c0 .39.316.705.706.705h7.058c.39 0 .706-.316.706-.705V4.92a.706.706 0 0 0-.706-.706zM9.882 8.45a2.119 2.119 0 0 0 4.236 0 2.119 2.119 0 0 0-4.236 0m-.353 5.291c0 .197.16.356.356.356h4.23a.354.354 0 0 0 .356-.356v-.7a.356.356 0 0 0-.356-.355h-4.23a.354.354 0 0 0-.356.356zm1.06 2.47c0 .198.16.357.351.357h2.12a.35.35 0 0 0 .352-.356v-.7a.356.356 0 0 0-.352-.356h-2.12a.35.35 0 0 0-.352.356zM.705 5.275A.706.706 0 0 0 0 5.98v12c0 .39.316.706.706.706h5.147a.5.5 0 0 0 .5-.5V5.774a.5.5 0 0 0-.5-.5zm.706 3.882a1.766 1.766 0 1 0 3.53-.002 1.766 1.766 0 0 0-3.53.002m-.353 4.585c0 .197.16.356.354.356H4.94a.353.353 0 0 0 .354-.356v-.7a.357.357 0 0 0-.354-.355H1.413a.353.353 0 0 0-.354.356zm.706 2.47c0 .198.16.357.352.357h2.12a.35.35 0 0 0 .351-.356v-.7a.356.356 0 0 0-.352-.356h-2.12a.35.35 0 0 0-.351.356z" clipRule="evenodd" />
                  </g>
                  <defs>
                    <clipPath id="a">
                      <path fill="#fff" d="M0 0h24v24H0z" />
                    </clipPath>
                  </defs>
                </svg>
                <a className="text-sm" href="#upcoming" onClick={() => setIsMenuOpen(false)}>Upcoming Sessions</a>
              </li>
            </ul>
            <a href="#" className="w-full inline-block mt-6 mx-6">
              <button className="cursor-pointer leading-5 bg-[#3D9C02] hover:bg-[#368207eb] text-white text-sm w-27 h-8 mx-auto rounded-full">
                Apply Now
              </button>
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}