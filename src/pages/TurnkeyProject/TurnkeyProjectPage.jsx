import HeroSection from './components/HeroSection'
import ProjectsSection from './components/ProjectsSection'
import ProcessSection from './components/ProcessSection'
import CTASection from './components/CTASection'
import { useSEO } from '../../hooks/useSEO'

function TurnkeyProjectPage() {
  useSEO({
    title: 'Turnkey Solution & Consultant For Food Industries | Salvin Industries',
    description: 'Browse our turnkey project portfolio including spices grinding lines, honey filtration units, edible oil mills, and tomato paste plants.'
  });
  
  return (
    <div className="min-w-0 overflow-x-hidden bg-white text-slate-900">
      <main>
        <HeroSection />
        <ProjectsSection />
        <ProcessSection />
        <CTASection />
      </main>
    </div>
  )
}

export default TurnkeyProjectPage
