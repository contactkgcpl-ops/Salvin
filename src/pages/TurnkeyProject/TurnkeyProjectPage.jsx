import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import ProjectsSection from './components/ProjectsSection'
import ProcessSection from './components/ProcessSection'
import CTASection from './components/CTASection'

function TurnkeyProjectPage() {
  return (
    <div className="min-w-0 overflow-x-hidden bg-white text-slate-900">
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ProcessSection />
        <CTASection />
      </main>
    </div>
  )
}

export default TurnkeyProjectPage
