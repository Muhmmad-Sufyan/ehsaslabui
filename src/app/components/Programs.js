'use client'
import { useState, useRef } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default function Programs() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const sliderRef = useRef(null)

  const cards = [
    {
      bgImage: "assets/progarm01.jpg",
      bgColor: "#DEFFCA",
      textColor: "#3D9C02",
      btnColor: "#C7FEA6",
      title: "Graphic Designing For Beginners",
      tags: ["A1", "Learn More", "4 Slots"]
    },
    {
      bgImage: "https://images.unsplash.com/photo-1758974643303-df01b895e6a7?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0",
      bgColor: "#E2DAFF",
      textColor: "#001839",
      btnColor: "#cfc3fb",
      title: "Graphic Designing For Advance",
      tags: ["A2", "Learn More", "4 Slots"]
    },
    {
      bgImage: "https://images.unsplash.com/photo-1675456110416-53a9df455bae?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0",
      bgColor: "#DEFFCA",
      textColor: "#3D9C02",
      btnColor: "#C7FEA6",
      title: "Graphic Designing For Beginners",
      tags: ["B1", "Learn More", "4 Slots"]
    },
    {
      bgImage: "assets/progarm01.jpg",
      bgColor: "#DEFFCA",
      textColor: "#3D9C02",
      btnColor: "#C7FEA6",
      title: "Graphic Designing For Beginners",
      tags: ["A1", "Learn More", "4 Slots"]
    },
    {
      bgImage: "https://images.unsplash.com/photo-1758974643303-df01b895e6a7?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0",
      bgColor: "#E2DAFF",
      textColor: "#001839",
      btnColor: "#cfc3fb",
      title: "Graphic Designing For Advance",
      tags: ["A2", "Learn More", "4 Slots"]
    },
    {
      bgImage: "https://images.unsplash.com/photo-1675456110416-53a9df455bae?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0",
      bgColor: "#DEFFCA",
      textColor: "#3D9C02",
      btnColor: "#C7FEA6",
      title: "Graphic Designing For Beginners",
      tags: ["B1", "Learn More", "4 Slots"]
    }
  ]

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    variableWidth: true,
    centerMode: false,
    initialSlide: 0,
    afterChange: (i) => setCurrentIndex(i),
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 2.2, slidesToScroll: 1 } },
      { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 1.5, slidesToScroll: 1 } },
      { breakpoint: 640, settings: { slidesToShow: 1, slidesToScroll: 1 } }
    ]
  }

  const goToSlide = (index) => sliderRef.current?.slickGoTo(index)

  return (
    <section className="py-15 pl-4 sm:pl-6 lg:pl-8 overflow-hidden">
      <div className="flex flex-col md:flex-row  justify-between items-center gap-8 lg:gap-12">
        <div className="lg:w-2/5 space-y-6">
          <h3 className="font-bold text-[#000C40] text-3xl sm:text-4xl lg:text-5xl leading-tight">
            Explore The Programs
          </h3>
          <p className="text-lg lg:text-xl text-[#00000099] leading-relaxed">
            Join <i>individual programs</i> or get access to everything with <span className="font-bold text-[#001839]">ELC</span> All Access Subscription.
          </p>
          <a href="#" className="hidden lg:inline-flex items-center justify-center w-60 h-12 bg-[#001839] text-white rounded-full font-medium text-lg hover:bg-[#000C40] transition-colors duration-300">
            Explore All Programs
          </a>
        </div>

        <div className="w-full lg:w-[75%] overflow-hidden md:-mr-10">
          <div className="">
            <Slider ref={sliderRef} {...settings}>
              {cards.map((card, index) => (
                <div key={index} className="" >
                  <div
                    className="relative rounded-2xl overflow-hidden bg-cover bg-center  mr-1 w-[341px] h-[400px]"
                    style={{ backgroundImage: `url('${card.bgImage}')` }}
                  >
                    <div
                      className="absolute bottom-0 left-0 right-0 p-6"
                      style={{ backgroundColor: card.bgColor }}
                    >
                      <h4
                        className="font-semibold text-xl mb-4"
                        style={{ color: card.textColor }}
                      >
                        {card.title}
                      </h4>
                      <div className="flex flex-nowrap gap-2">
                        {card.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-4 py-2 whitespace-nowrap text-sm font-medium"
                            style={{
                              backgroundColor: card.btnColor,
                              color: card.textColor,
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>

      </div>

      <div className="flex justify-center gap-3 mt-8">
        {cards.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${index === currentIndex ? 'bg-[#3D9C02] scale-110' : 'bg-[#C7FEA6] hover:bg-[#3D9C02] hover:bg-opacity-50'}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <a href="#" className="lg:hidden flex items-center justify-center w-full max-w-xs mx-auto mt-8 h-12 bg-[#001839] text-white rounded-full font-medium text-lg hover:bg-[#000C40] transition-colors duration-300">
        Explore All Programs
      </a>

      
    </section>
  )
}
