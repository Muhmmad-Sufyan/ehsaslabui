'use client'
import { useState, useRef } from 'react'
import Link from 'next/link'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default function Designers() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const sliderRef = useRef(null)

  const designers = [
    {
      image: "/assets/being01.jpg",
      name: "Alina Khan",
      gradient: "blue"
    },
    {
      image: "/assets/being02.jpg",
      name: "Stacey Davis",
      gradient: "green"
    },
    {
      image: "https://i.pinimg.com/736x/12/4f/55/124f55c8e6f6a125becbe6c4dd98cb10.jpg",
      name: "Noor Fatima",
      gradient: "blue"
    },
    {
      image: "https://images.unsplash.com/photo-1701096374092-bb70915fdc5c?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Hannah Jason",
      gradient: "green"
    },
    {
      image: "https://images.unsplash.com/photo-1724225618238-d03fc678f848?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Alex Hales",
      gradient: "blue"
    },
    {
      image: "/assets/being04.jpg",
      name: "Jasmine Grace",
      gradient: "green"
    },
    {
      image: "https://i.pinimg.com/1200x/24/91/0f/24910f726e8e849d73ba395a584181f0.jpg",
      name: "Nisha Ptail",
      gradient: "blue"
    }
  ]

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    beforeChange: (current, next) => setCurrentIndex(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  }

  // Function to navigate to specific slide
  const goToSlide = (index) => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(index)
    }
  }

  return (
    <section id="designer" className="px-10 sm:px-15">
      <h3 className="text-[#000C40] text-[32px] sm:text-[39px] lg:text-[45px] xl:text-[52px] font-bold mb-5 leading-8">
        Experienced Designers
      </h3>
      <p className="lg:text-lg xl:text-[22px] text-[#00000099]">
        Learn from the worlds sharpest branding minds.
      </p>

      {/* React Slick Slider */}
      <div className="my-10">
        <Slider ref={sliderRef} {...settings}>
          {designers.map((designer, index) => (
            <div key={index} className="px-2 focus:outline-none">
              <div
                className="designer-card cursor-pointer transition-transform duration-300 hover:scale-105 relative rounded-2xl overflow-hidden bg-cover bg-center"
                style={{
                  backgroundImage: `url('${designer.image}')`,
                  width: '100%',
                  height: '288px'
                }}
              >
                <div className={`absolute h-16 bottom-0 w-full  transition-opacity duration-300 ${designer.gradient === 'blue'
                  ? 'bg-gradient-to-t from-blue-900 via-blue-700/50 to-transparent'
                  : 'bg-gradient-to-b from-[#c6fea609] to-[#3D9C02]'}`}></div>

                {/* Name */}
                <p className={` w-full h-20 absolute bottom-6 left-0 pl-[14px] pr-10 leading-10 py-[18px] text-white  font-normal text-[38px]  z-10`}>
                  {designer.name}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className="flex justify-center gap-2 mt-6">
        {designers.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${index === currentIndex
              ? 'bg-[#3D9C02] scale-110'
              : 'bg-[#C7FEA6] hover:bg-[#3D9C02] hover:bg-opacity-50'
              }`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to designer ${index + 1}`}
          />
        ))}
      </div>

      <Link
        href="/designers"
        className="w-62 xs:w-72 md:w-80 h-10 md:h-11 mx-auto mt-10 border border-[#3D9C02] rounded-full flex items-center justify-center font-medium text-sm xs:text-base md:text-lg text-[#3D9C02] hover:bg-[#3D9C02] hover:text-white transition-all duration-300"
      >
        See More Community Designers
      </Link>

      <style jsx global>{`
        /* Custom slick slider styles */
        .slick-slide {
          padding: 0 8px;
        }
        
        .slick-list {
          margin: 0 -8px;
        }
        
        .slick-track {
          display: flex !important;
        }
        
        .slick-slide {
          height: inherit !important;
        }
        
        .slick-slide > div {
          height: 100%;
        }
      `}</style>
    </section>
  )
}