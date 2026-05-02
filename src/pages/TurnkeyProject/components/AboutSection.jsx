// src/components/AboutSection.jsx
import indus from '../../../assets/indus.png'

function AboutSection() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div>
          <p className="mb-6 inline-flex items-center rounded-full border border-[#f47c20]/60 bg-[#fff4ea] px-4 py-1 text-xs font-bold uppercase tracking-[0.13em] text-[#f47c20]">
            <span className="mr-2 text-sm leading-none">�</span>
            ABOUT THE COMPANY
          </p>
          <h2 className="max-w-xl text-4xl font-extrabold leading-tight text-[#0c2d57] sm:text-5xl">
            Engineering <span className="text-[#f47c20]">India&apos;s Industrial</span> Future Since 1999
          </h2>
          <p className="mt-8 text-lg leading-relaxed text-slate-600">
            Salvin Industries is a leading turnkey automation and packaging machinery group headquartered in Ahmedabad, Gujarat, India. We specialize in designing, manufacturing, and deploying high-performance production lines for global manufacturers across pharmaceuticals, food processing, cosmetics, and industrial sectors.
          </p>
          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            Our team of 200+ engineers brings together expertise in mechanical design, robotics, PLC programming, and process automation, ensuring every plant we build operates at peak efficiency from day one.
          </p>
        </div>
        <div className="overflow-hidden rounded-2xl bg-slate-100 shadow-lg">
          <img src={indus} alt="Industrial machine line" className="h-full w-full object-cover" />
        </div>
      </div>
    </section>
  )
}

export default AboutSection


