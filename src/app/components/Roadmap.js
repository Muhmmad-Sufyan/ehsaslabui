'use client'
import { useState } from 'react'

export default function Roadmap() {
    const [isModalOpen, setIsModalOpen] = useState(false)

    const openModal = () => setIsModalOpen(true)
    const closeModal = () => setIsModalOpen(false)

    return (
        <>
            <section className="px-5 xs:px-10 py-14 sm:p-14 xl:p-18">
                <div className="bg-[#F5F2FF] grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0 px-5 py-10 lg:p-5 rounded-[20px]">
                    <div className="flex flex-col justify-center items-center lg:items-start lg:pl-10">
                        <p className="sm:text-lg xl:text-[22px] text-[#00000099]">Complete Roadmap</p>
                        <h4 className="font-bold text-3xl sm:text-4xl xl:text-5xl text-[#000C40] text-center lg:text-start">
                            Graphic Design <br /> Isn't Just logo. <br /> It's a System
                        </h4>
                        <p className="sm:text-lg xl:text-[22px] text-[#00000099] sm:w-4/5 lg:w-3/5 mt-3 text-center lg:text-start">
                            Learn the underground two-part system real designers use to lead bigger brands and land bigger clients.
                        </p>
                        <button
                            onClick={openModal}
                            className="group flex box-center gap-2 mt-6 font-medium text-sm sm:text-base xl:text-lg text-[#E2DAFF] bg-[#001839] hover:bg-[#001839e6] w-55 sm:w-65 xl:w-73 h-10 sm:h-12 rounded-full transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-lg"
                        >
                            <span>Watch Complete Video</span>
                            <img
                                src="/assets/videoS.svg"
                                alt="Play icon"
                                className="group-hover:scale-110 transition-transform duration-300"
                            />
                        </button>
                    </div>
                    <div className="flex justify-center items-center lg:justify-end">
                        <img
                            className="w-120 h-75 sm:h-95 lg:h-115 xl:w-135 xl:h-121 rounded-[20px]"
                            src="/assets/bgVideo.jpg"
                            alt="Graphic Design System"
                        />
                    </div>
                </div>
            </section>

            {isModalOpen && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center   p-4  backdrop-blur-md"
                    onClick={closeModal}
                >
                    <div
                        className="relative bg-gradient-to-br from-[#DEFFCA] to-[#F5F2FF] rounded-3xl overflow-hidden shadow-2xl max-w-4xl w-full transform animate-scale-in"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="bg-gradient-to-r from-[#3D9C02] via-[#001839] to-[#3D9C02] p-5 flex justify-between items-center">
                            <div className="flex items-center gap-3">
                                <div className="w-3 h-3 bg-[#DEFFCA] rounded-full animate-pulse"></div>
                                <h3 className="text-white font-bold text-xl">Design Journey Insights</h3>
                            </div>
                            <button
                                onClick={closeModal}
                                className="text-white hover:bg-white hover:text-black w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 text-lg font-bold hover:scale-110"
                            >
                                ✕
                            </button>
                        </div>

                        {/* Video Content */}
                        <div className="p-6">
                            <div className="relative aspect-video  rounded-2xl overflow-hidden">
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src="https://www.youtube.com/embed/8RJvA_R_qno?autoplay=1"
                                    title="1st Job, 1st Month, Quit! Fahad Idrees Shares His Story | Designers Tea Talk"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                    className="absolute inset-0 w-full h-full"
                                ></iframe>
                            </div>

                            <div className="mt-6 text-center space-y-3">
                                <h4 className="font-bold text-[#001839] text-2xl bg-gradient-to-r from-[#3D9C02] to-[#001839] bg-clip-text text-transparent">
                                    Designer's Career Journey
                                </h4>
                                <p className="text-[#00000099] text-base leading-relaxed">
                                    Real stories from successful designers who transformed their careers
                                </p>
                                <div className="flex justify-center gap-4 mt-4">
                                    <span className="bg-[#DEFFCA] text-[#3D9C02] px-3 py-1 rounded-full text-sm font-medium">
                                        Inspiration
                                    </span>
                                    <span className="bg-[#E2DAFF] text-[#001839] px-3 py-1 rounded-full text-sm font-medium">
                                        Career Tips
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gradient-to-r from-[#001839] to-[#3D9C02] p-5 flex justify-between items-center">
                            <button
                                onClick={closeModal}
                                className="bg-white text-[#001839] hover:bg-[#DEFFCA] font-semibold py-3 px-8 rounded-full transition-all duration-200 hover:scale-105 hover:shadow-lg"
                            >
                                Close
                            </button>
                            <a
                                href="https://www.youtube.com/@ehsaslabs"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-[#3D9C02] hover:bg-[#368207eb] text-white font-semibold py-3 px-8 rounded-full transition-all duration-200 hover:scale-105 hover:shadow-lg flex items-center gap-2"
                            >
                                <span>More Videos</span>
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            )}

            <style jsx>{`
        @keyframes scale-in {
          0% {
            transform: scale(0.8);
            opacity: 0;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }
      `}</style>
        </>
    )
}