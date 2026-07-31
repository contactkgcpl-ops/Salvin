// src/components/HeroSection.jsx
import HeroIMG from "../../../assets/hero/turkey_proj.png";
function HeroSection() {
  return (
    <section
      className="relative min-h-[72vh] overflow-hidden"
      style={{
        backgroundImage:
          `linear-gradient(90deg, rgba(8,37,77,0.84) 0%, rgba(8,37,77,0.74) 40%, rgba(8,37,77,0.45) 100%), url('${HeroIMG}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="mx-auto flex min-h-[72vh] w-full min-w-0 max-w-7xl items-center px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="max-w-4xl text-white">
          <p className="mb-5 inline-flex rounded-full border border-[#f47c20]/80 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-[#ffd2ac] sm:text-sm">END-TO-END FOOD PROCESSING TURNKEY SOLUTIONS</p>
          <h1 className="text-balance text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl lg:text-5xl">Complete Turnkey Plant Solutions for Snacks, Spices & Dairy</h1>
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-slate-100 sm:text-base lg:text-lg">
            Salvin Industries delivers world-class, automated manufacturing lines. From concept and engineering to installation and commissioning, we build high-capacity plants designed for unmatched hygiene, efficiency, and scale.
          </p>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
