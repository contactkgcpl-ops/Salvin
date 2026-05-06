import BrochureCard from './BrochureCard'
import { brochureProjects } from '../data/brochureCatalog'

export default function ProjectsSection() {
  return (
    <section className="border-t border-slate-100 bg-[#f8fafc] py-20 lg:py-28">
      <div className="mx-auto w-full max-w-[1400px] px-6 lg:px-12">
        <div className="mb-16 flex flex-col items-center text-center lg:mb-20">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#f47c20]/10 px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.25em] text-[#f47c20] ring-1 ring-inset ring-[#f47c20]/20">
            <span className="h-1.5 w-1.5 rounded-full bg-[#f47c20] animate-pulse" aria-hidden />
            Project Portfolio
          </span>
          <h2 className="mt-6 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Turnkey <span className="text-[#f47c20]">Solutions</span>
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
            Explore Salvin&apos;s industrial processing lines—each card reflects an installed-capacity concept 
            you can scale with our engineers from blueprint through commissioning.
          </p>
        </div>

        <ul className="turnkey-projects-grid">
          {brochureProjects.map((project) => (
            <li key={project.id} className="flex list-none">
              <BrochureCard
                title={project.title}
                descriptionLines={project.descriptionLines}
                imageSrc={project.imageSrc}
                brochureHref={project.brochureHref}
                brochureDownloadName={project.brochureDownloadName}
                hasBrochure={project.hasBrochure}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
