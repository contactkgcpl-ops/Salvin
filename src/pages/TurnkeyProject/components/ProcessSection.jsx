import { Lightbulb, Factory, ClipboardCheck, Wrench, GraduationCap, Headset } from 'lucide-react';

const steps = [
  {
    icon: <Lightbulb className="h-7 w-7" />,
    number: "01",
    title: "Design",
    desc: "Conceptualizing the ideal processing & packaging flow."
  },
  {
    icon: <Factory className="h-7 w-7" />,
    number: "02",
    title: "Build",
    desc: "High-precision manufacturing of core units."
  },
  {
    icon: <ClipboardCheck className="h-7 w-7" />,
    number: "03",
    title: "Testing",
    desc: "Rigorous pre-deployment validation of integrated systems."
  },
  {
    icon: <Wrench className="h-7 w-7" />,
    number: "04",
    title: "Installation",
    desc: "Seamless on-site setup and utility integration."
  },
  {
    icon: <GraduationCap className="h-7 w-7" />,
    number: "05",
    title: "Training",
    desc: "Empowering your operational team with technical know-how."
  },
  {
    icon: <Headset className="h-7 w-7" />,
    number: "06",
    title: "Support",
    desc: "Continuous maintenance & lifetime technical guidance."
  }
];

export default function ProcessSection() {
  return (
    <section className="bg-white py-8 sm:py-10 lg:py-12">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <span className="inline-flex rounded-full bg-[#fff4ea] px-4 py-1 text-xs font-bold text-[#f47c20]">
            ● OUR IMPLEMENTATION PROCESS
          </span>
        </div>

        <h2 className="max-w-4xl text-balance text-2xl font-extrabold uppercase leading-tight tracking-tight text-gray-800 sm:text-3xl lg:text-4xl">
          FROM CONCEPT TO COMMISSIONING – WE DELIVER END TO END
        </h2>

        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-gray-600 sm:text-base">
          A structured 6-step implementation process that ensures every project is delivered with precision, performance, and peace of mind.
        </p>

        <ul className="mt-10 grid list-none grid-cols-1 gap-4 p-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 lg:gap-5">
          {steps.map((step) => (
            <li
              key={step.number}
              className="group relative rounded-xl bg-[#f3f3f3] p-5 pb-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-4 text-xl text-[#f47c20] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                {step.icon}
              </div>
              <span className="absolute right-4 top-4 text-3xl font-bold text-gray-300 transition-colors duration-300 group-hover:text-[#f47c20]/20">
                {step.number}
              </span>
              <h3 className="mb-2 text-base font-bold text-gray-800">{step.title}</h3>
              <p className="text-xs leading-relaxed text-gray-600 sm:text-sm">{step.desc}</p>
              <div className="absolute bottom-0 left-0 h-[3px] w-full rounded-b-xl bg-[#f47c20] transition-all duration-300 group-hover:h-[6px]" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
