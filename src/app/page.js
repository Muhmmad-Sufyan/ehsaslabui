import Header from './components/Header'
import Hero from './components/Hero'
import Programs from './components/Programs'
import Testimonials from './components/Testimonials'
import PathToMastery from './components/PathToMastery'
import Certification from './components/Certification'
import Designers from './components/Designers'
import Roadmap from './components/Roadmap'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="font-inter">
      <Header />
      <Hero />
      <Programs />
      <Testimonials />
      <PathToMastery />
      <Certification />
      <Designers />
      <Roadmap />
      <hr className="border-3 border-[#001839] my-5" />
      <Footer />
    </main>
  )
}