const steps = [
  {
    icon: "💡",
    number: "01",
    title: "Design",
    desc: "Conceptualizing the ideal processing & packaging flow."
  },
  {
    icon: "🤖",
    number: "02",
    title: "Build",
    desc: "High-precision manufacturing of core units."
  },
  {
    icon: "📋",
    number: "03",
    title: "Testing",
    desc: "Rigorous pre-deployment validation of integrated systems."
  },
  {
    icon: "📍",
    number: "04",
    title: "Installation",
    desc: "Seamless on-site setup and utility integration."
  },
  {
    icon: "🎓",
    number: "05",
    title: "Training",
    desc: "Empowering your operational team with technical know-how."
  },
  {
    icon: "🎧",
    number: "06",
    title: "Support",
    desc: "Continuous maintenance & lifetime technical guidance."
  }
];

export default function ImplementationProcess() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Tag */}
        <div className="mb-6">
          <span className="bg-[#fff4ea] text-[#f47c20] text-xs px-4 py-1 rounded-full font-bold">
            ● OUR IMPLEMENTATION PROCESS
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl font-extrabold text-gray-800 uppercase mb-4">
          FROM CONCEPT TO COMMISSIONING – WE DELIVER END TO END
        </h2>

        <p className="text-gray-600 max-w-3xl mb-12">
          A structured 6-step implementation process that ensures every project is delivered with precision, performance, and peace of mind.
        </p>

        {/* 🔥 FORCE 6 CARDS IN ONE ROW */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(6, 1fr)",
            gap: "20px"
          }}
        >
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-[#f3f3f3] rounded-xl p-5 relative shadow-sm hover:shadow-md transition"
            >
              
              {/* Icon */}
              <div className="text-xl text-[#f47c20] mb-5">
                {step.icon}
              </div>

              {/* Number */}
              <span className="absolute top-4 right-4 text-3xl font-bold text-gray-300">
                {step.number}
              </span>

              {/* Title */}
              <h3 className="text-md font-bold text-gray-800 mb-2">
                {step.title}
              </h3>

              {/* Desc */}
              <p className="text-xs text-gray-600 leading-relaxed">
                {step.desc}
              </p>

              {/* Bottom Line */}
              <div className="absolute bottom-0 left-0 w-full h-[3px] bg-[#f47c20] rounded-b-xl"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}