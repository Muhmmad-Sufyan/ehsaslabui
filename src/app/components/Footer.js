export default function Footer() {
  return (
    <footer className="p-6 xs:p-8 sm:p-12 xl:p-15">
      <section className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-0">
        <div className="lg:w-3/10 space-y-7">
          <img src="/assets/logo.png" alt="Ehsas Lab Logo" />
          <p className="text-sm text-[#00000099] sm:w-100 lg:w-70">
            Ehsas Lab is a non-profitable community for likeminded people who want to explore their skills in a better way. The purpose of this community is to provide students with a platform to enhance employability by polishing their talent.
          </p>
          <p className="text-sm text-[#00000099] lg:mt-12">
            © 2020-2025 Ehsas Lab, All Rights Reserved.
          </p>
        </div>
        <hr className="lg:hidden border border-[#66666642]" />
        <div className="space-y-3">
          <h6 className="font-bold text-[22px] text-[#666666]">Pages</h6>
          <ul className="text-[#666666] space-y-2">
            <li><a href="#">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#training">Training Programs</a></li>
            <li><a href="#upcoming">Upcoming Sessions</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>
        <div className="space-y-3">
          <h6 className="font-bold text-[22px] text-[#666666]">Resources</h6>
          <ul className="text-[#666666] space-y-2">
            <li><a href="#">Facebook Community</a></li>
            <li><a href="#">Upcoming Bootcamp</a></li>
            <li><a href="#">Premium Templates</a></li>
            <li><a href="#">Case Studies</a></li>
            <li><a href="#">Podcast</a></li>
          </ul>
        </div>
        <hr className="lg:hidden border border-[#66666642]" />
        <div className="flex flex-col items-start lg:items-center">
          <img 
            className="border border-[#6666662f] rounded-lg" 
            src="/assets/QR_Code.svg" 
            alt="QR Code" 
          />
          <ul className="flex gap-4 mt-5">
            <li>
              <a href="https://www.facebook.com/EhsasLabs" target="_blank" rel="noopener noreferrer">
                <img src="/assets/facebook.svg" alt="Facebook" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/ehsaslabs/" target="_blank" rel="noopener noreferrer">
                <img src="/assets/insta.svg" alt="Instagram" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/ehsaslabs/" target="_blank" rel="noopener noreferrer">
                <img src="/assets/linkedin.svg" alt="LinkedIn" />
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/@ehsaslabs" target="_blank" rel="noopener noreferrer">
                <img src="/assets/youtube.svg" alt="YouTube" />
              </a>
            </li>
          </ul>
        </div>
      </section>
    </footer>
  )
}