import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import ProjectsSection from './components/ProjectsSection'
import ProcessSection from './components/ProcessSection'
import CTASection from './components/CTASection'
import Footer from './components/Footer'

function TurnkeyProjectPage() {
  return (
    <div className="bg-white text-slate-900">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ProcessSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}

export default TurnkeyProjectPage
