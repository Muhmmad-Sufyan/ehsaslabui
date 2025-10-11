'use client'
import { useEffect, useState } from 'react'

export default function Hero() {
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(150)

  const words = ['Creativity', 'Innovation', 'Design', 'Excellence']

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % words.length
      const fullWord = words[i]

      setText(isDeleting ? fullWord.substring(0, text.length - 1) : fullWord.substring(0, text.length + 1))

      setTypingSpeed(isDeleting ? 75 : 150)

      if (!isDeleting && text === fullWord) {
        setTimeout(() => setIsDeleting(true), 1000)
      } else if (isDeleting && text === '') {
        setIsDeleting(false)
        setLoopNum(loopNum + 1)
      }
    }

    const timer = setTimeout(handleTyping, typingSpeed)
    return () => clearTimeout(timer)
  }, [text, isDeleting, loopNum, typingSpeed])

  return (
    <section>
      <div className="w-full">
        <div className="w-[85%] sm:w-7/10 md:w-3/5 lg:w-1/2 mx-auto text-center mt-16 lg:mt-20">
          <h1 className="font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-[#001839] mb-7">
            Master Design & Build Career with
          </h1>
          <p className="relative inline-block w-50 h-10 lg:w-60  lg:h-12 xl:w-70  py-2 xl:h-15 border border-[#3D9C02] mb-10">
            <span className="absolute w-2 h-2 bg-[#3D9C02] -top-1 -left-1"></span>
            <span className="absolute w-2 h-2 bg-[#3D9C02] -top-1 -right-1"></span>
            <span className="absolute w-2 h-2 bg-[#3D9C02] -bottom-1 -left-1"></span>
            <span className="absolute w-2 h-2 bg-[#3D9C02] -bottom-1 -right-1"></span>
            <span id="typewriter" className="text-[#3D9C02] font-bold text-[26px] sm:text-3xl lg:text-4xl transition-all duration-700 ease-in-out">
              {text}
            </span>
            <span className="cursor"></span>
          </p>
          <div className="flex box-center border  rounded-full py-2 w-60 xl:w-65 mx-auto relative mb-3">
            <p className="flex box-center">
              <img className="absolute left-2 size-5 rounded-full shadow-2xl" src="/assets/being01.jpg" alt="Community member" />
              <img className="absolute left-6 size-5 rounded-full shadow-2xl" src="/assets/being02.jpg" alt="Community member" />
              <img className="absolute left-10 size-5 rounded-full shadow-2xl" src="/assets/being03.jpg" alt="Community member" />
              <img className="absolute left-14 size-5 rounded-full shadow-2xl" src="/assets/being04.jpg" alt="Community member" />
            </p>
            <p className="text-[10px] xl:text-xs ml-17">300+ designer&apos;s community</p>
          </div>
          <div className="w-[95%] sm:w-[82%] md:w-9/10 mx-auto mb-6">
            <p className="text-base sm:text-lg xl:text-[20px] leading-7">
              Learn <span className="font-bold">graphic designing</span> from foundation to mastery and become the mind behind <span className="font-bold">winning brands.</span>
            </p>
          </div>
          <a href="#" className="inline-block">
            <button className="cursor-pointer leading-5 bg-[#3D9C02] hover:bg-[#368207eb] text-sm sm:text-base text-white w-35 h-9 sm:w-40 sm:h-10 mx-auto rounded-full">
              Register Now
            </button>
          </a>
        </div>
      </div>
      <div className="w-full h-65 sm:h-85 lg:h-100 xl:h-120 my-15">
        <a href="https://youtu.be/7K1E_ohD_q4" target="_blank" rel="noopener noreferrer" className="w-[85%] sm:w-4/5 lg:w-7/10 h-full mx-auto rounded-3xl flex box-center bg-[url('/assets/bgVideo.jpg')] bg-cover bg-center">
          <img className="w-16 xl:w-auto" src="/assets/videoIcon.png" alt="Play video" />
        </a>
      </div>
    </section>
  )
}