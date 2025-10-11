export default function Certification() {
  return (
    <section className="my-15">
      <div className="bg-gradient-to-t from-[#DEFFCA] to-white to-60% py-20 w-[94%] mx-auto px-10 grid grid-cols-1 lg:grid-cols-2 items-center gap-15 lg:gap-0 rounded-3xl">
        <div className="flex flex-col box-center lg:block space-y-6 sm:space-y-8">
          <h4 className="text-[#000C40] text-[32px] sm:text-[39px] lg:text-[45px] xl:text-[52px] lg:text-start font-bold">
            Get Certified
          </h4>
          <ul className="space-y-4 sm:space-y-6 text-[#666666] text-sm sm:text-base font-medium">
            <li className="flex items-center gap-2">
              <img src="assets/ehsasBach.svg" alt="Checkmark" />
              <span>Get EhsasLab Certification</span>
            </li>
            <li className="flex items-center gap-2">
              <img src="assets/ehsasBach.svg" alt="Checkmark" />
              <span>Add it in your Resume</span>
            </li>
            <li className="flex items-center gap-2">
              <img src="assets/ehsasBach.svg" alt="Checkmark" />
              <span>Add certification to your Linkedin profile</span>
            </li>
          </ul>
          <a 
            href="#"
            className="bg-[#3D9C02] mt-5 lg:mt-18 text-white text-base sm:text-lg font-medium flex box-center rounded-full w-40 h-10"
          >
            Get Started
          </a>
        </div>
        <div className="relative flex justify-center lg:justify-start">
          <img 
            src="assets/certificateCopy.png" 
            alt="Certificate"
            className="absolute -bottom-10 xs:left-17 sm:left-30 md:left-43 lg:left-18 xl:left-33 max-w-2xs sm:max-w-sm xl:max-w-md rounded-lg shadow-lg opacity-80"
          />
          <img 
            src="assets/certificateCopy.png" 
            alt="Certificate"
            className="relative max-w-2xs sm:max-w-sm xl:max-w-md rounded-lg shadow-xl"
          />
        </div>
      </div>
    </section>
  )
}