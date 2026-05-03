import BrochureCard from './BrochureCard'
import { brochureProjects } from '../data/brochureCatalog'

export default function ProjectsSection() {
  return (
    <section className="border-t border-slate-200/80 bg-[#f8fafc] py-14 sm:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6">
        <div className="mb-10 grid gap-6 lg:mb-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:items-end lg:gap-10">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-[#f47c20] shadow-sm ring-1 ring-slate-200/80">
              <span className="h-1.5 w-1.5 rounded-full bg-[#f47c20]" aria-hidden />
              Projects
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Turnkey Projects
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-relaxed text-slate-600 lg:text-base lg:leading-relaxed">
            Explore Salvin&apos;s industrial processing lines—each card reflects an installed-capacity concept you can
            scale with our engineers from blueprint through commissioning.
          </p>
        </div>

        <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 xl:grid-cols-3">
          {brochureProjects.map((project) => (
            <li key={project.id} className="min-h-0 list-none">
              <BrochureCard
                title={project.title}
                descriptionLines={project.descriptionLines}
                imageSrc={project.imageSrc}
                brochureHref={project.brochureHref}
                brochureDownloadName={project.brochureDownloadName}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
