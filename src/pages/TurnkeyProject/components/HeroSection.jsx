// src/components/HeroSection.jsx
import HeroIMG from "../../../assets/food-processing-plant.jpg";
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
        <div className="max-w-3xl text-white">
          <p className="mb-5 inline-flex rounded-full border border-[#f47c20]/80 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-[#ffd2ac] sm:text-sm">Engineering Excellence</p>
          <h1 className="text-balance text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl lg:text-4xl">Building Turnkey Industrial Systems For A Smarter Manufacturing Future</h1>
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-slate-100 sm:text-base lg:text-lg">
            We design, manufacture, and deploy high-performance automation and packaging lines with precision engineering, robust controls, and lifecycle support.
          </p>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
