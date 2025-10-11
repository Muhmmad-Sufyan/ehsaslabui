'use client'
import { useState, useEffect } from 'react'

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [cardsToShow, setCardsToShow] = useState(3)

  const testimonials = [
    {
      bgColor: "#C7FEA6",
      starColor: "green",
      comment: "I&apos;m thrilled to be a part of Ehsas Lab, a fantastic technical computer lab that offers comprehensive training in graphic designing and web development. I&apos;ve had the privilege of learning from two exceptional tutors: Sir Hassam, who expertly guides us in graphic designing.",
      name: "Saif",
      role: "Graphic Designer",
      image: "assets/being02.jpg",
      textColor: "#3D9C02"
    },
    {
      bgColor: "#E2DAFF",
      starColor: "blue",
      comment: "I&apos;m thrilled to be a part of Ehsas Lab, a fantastic technical computer lab that offers comprehensive training in graphic designing and web development. I&apos;ve had the privilege of learning from two exceptional tutors: Sir Hassam, who expertly guides us in graphic designing.",
      name: "Rabia Kasur",
      role: "Graphic Designer",
      image: "assets/girlPic.svg",
      textColor: "#001839"
    },
    {
      bgColor: "#C7FEA6",
      starColor: "green",
      comment: "I&apos;m thrilled to be a part of Ehsas Lab, a fantastic technical computer lab that offers comprehensive training in graphic designing and web development. I&apos;ve had the privilege of learning from two exceptional tutors: Sir Hassam, who expertly guides us in graphic designing.",
      name: "Mira Khan",
      role: "Graphic Designer",
      image: "assets/being04.jpg",
      textColor: "#3D9C02"
    },
    {
      bgColor: "#E2DAFF",
      starColor: "blue",
      comment: "I&apos;m thrilled to be a part of Ehsas Lab, a fantastic technical computer lab that offers comprehensive training in graphic designing and web development. I&apos;ve had the privilege of learning from two exceptional tutors: Sir Hassam, who expertly guides us in graphic designing.",
      name: "Kiran Shahzadi",
      role: "Graphic Designer",
      image: "assets/being01.jpg",
      textColor: "#001839"
    },
    {
      bgColor: "#C7FEA6",
      starColor: "green",
      comment: "I&apos;m thrilled to be a part of Ehsas Lab, a fantastic technical computer lab that offers compre-hensive training in graphic designing and web development. I&apos;ve had the privilege of learning from two exceptional tutors: Sir Hassam, who expertly guides us in graphic designing.",
      name: "Ali Ahmed",
      role: "Web Developer",
      image: "assets/being03.jpg",
      textColor: "#3D9C02"
    },
    {
      bgColor: "#E2DAFF",
      starColor: "blue",
      comment: "I&apos;m thrilled to be a part of Ehsas Lab, a fantastic technical computer lab that offers compre-hensive training in graphic designing and web development. I&apos;ve had the privilege of learning from two exceptional tutors: Sir Hassam, who expertly guides us in graphic designing.",
      name: "Sara Khan",
      role: "Full Stack Developer",
      image: "assets/being03.jpg",
      textColor: "#001839"
    }
  ]


  const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials]

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCardsToShow(1)
      } else if (window.innerWidth < 1024) {
        setCardsToShow(2)
      } else {
        setCardsToShow(3)
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const nextIndex = prev + 1
        if (nextIndex >= testimonials.length) {
          return 0
        }
        return nextIndex
      })
    }, 4000)

    return () => clearInterval(interval)
  }, [testimonials.length])

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  // Calculate transform for smooth infinite scroll
  const getTransform = () => {
    const cardWidth = 100 / cardsToShow
    return `translateX(-${currentIndex * cardWidth}%)`
  }

  return (
    <section className="bg-[#F5F2FF] py-10 px-6 sm:p-10">
      <h3 className="text-[#000C40] text-[32px] sm:text-[39px] lg:text-[45px] xl:text-[52px] font-bold text-center">
        Systems That Deliver Real Results
      </h3>

      <div className="relative mt-10 overflow-hidden">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out  lg:gap-5 gap-2"
            style={{
              transform: getTransform(),
            }}
          >
            {duplicatedTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className="comment-card  lg:min-w-[32%] lg:max-w-[33%] rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
                style={{
                  backgroundColor: testimonial.bgColor,

                }}
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <img
                      key={i}
                      src={`assets/${testimonial.starColor}Star.svg`}
                      alt="star"
                      className="w-5 h-5"
                    />
                  ))}
                </div>
                <p className="comment text-sm sm:text-base mb-6 line-clamp-4">{testimonial.comment}</p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <img
                      className="rounded-full w-12 h-12 object-cover"
                      src={testimonial.image}
                      alt={testimonial.name}
                    />
                    <div className="flex flex-col">
                      <span
                        className="font-bold text-sm sm:text-base"
                        style={{ color: testimonial.textColor }}
                      >
                        {testimonial.name}
                      </span>
                      <span className="text-xs text-[#666666]">{testimonial.role}</span>
                    </div>
                  </div>
                  <img
                    src="assets/googleRating.svg"
                    alt="Google Rating"
                    className="w-20 sm:w-24"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-center gap-2 mt-10">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-[#3D9C02] scale-110' : 'bg-[#C7FEA6] hover:bg-[#a8e085]'
              }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>

      <a
        href="#"
        className="w-43 sm:w-50 h-10 sm:h-11 mx-auto mt-10 border border-[#3D9C02] rounded-full flex items-center justify-center font-medium sm:text-lg text-[#3D9C02] hover:bg-[#3D9C02] hover:text-white transition-colors duration-300"
      >
        See More Stories
      </a>

      <style jsx>{`
        .comment-card {
          // min-height: 280px;
          
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .comment-card:hover {
          transform: translateY(-5px);
        }
        
        .line-clamp-4 {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        @media (max-width: 639px) {
          .comment-card {
          minwidth:280px;
          maxwidth:300px;
            // min-height: 320px;
          }
        }
      `}</style>
    </section>
  )
}