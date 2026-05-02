import chilliMachineImage from "../../../assets/turnkey/chilli-machine.png";
import robotArmImage from "../../../assets/turnkey/robot-arm.png";
import conveyorMachineImage from "../../../assets/turnkey/conveyor-machine.png";
import steelTanksImage from "../../../assets/turnkey/steel-tanks.png";
import processingPipesImage from "../../../assets/turnkey/processing-pipes.png";
import silosImage from "../../../assets/turnkey/silos.png";

const projects = [
  {
    category: 'FOOD PROCESSING',
    title: 'Red Chilli Processing and Packaging Plant',
    description: 'Complete automated line for cleaning, grinding, and moisture-controlled packaging.',
    image: chilliMachineImage
  },
  {
    category: 'SNACKS',
    title: 'Banana and Potato Chips Processing Plant',
    description: 'High-output frying and seasoning solutions for uniform chip quality.',
    image: robotArmImage
  },
  {
    category: 'BEVERAGE',
    title: 'Beetroot Juice Processing and Packaging Plant',
    description: 'Extraction and aseptic packaging line for natural health beverages.',
    image: conveyorMachineImage
  },
  {
    category: 'SPICES',
    title: 'Turmeric Powder Processing Plant',
    description: 'Industrial-grade pulverization and steam-sterilization system.',
    image: steelTanksImage
  },
  {
    category: 'BEVERAGE',
    title: 'Fully Automatic Honey Processing Plant',
    description: 'Aseptic filtration, heating, and high-precision bottle filling units.',
    image: processingPipesImage
  },
  {
    category: 'FOOD PROCESSING',
    title: 'Dates Processing Plant',
    description: 'Cleaning, sorting, and vacuum-sealed packaging for premium date products.',
    image: silosImage
  },
];

function ProjectCard({ project }) {
  return (
    <div className="bg-[#f6f6f6] rounded-xl overflow-hidden shadow-md hover:shadow-xl transition flex flex-col">
      
      {/* Image */}
      <div className="relative">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-52 object-cover"
        />
        <span className="absolute top-3 left-3 bg-white text-[#f47c20] text-[10px] px-3 py-1 rounded-full font-bold tracking-widest">
          {project.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-md font-bold text-slate-800">
          {project.title}
        </h3>

        <p className="text-sm text-slate-600 mt-2 border-b pb-3">
          {project.description}
        </p>

        <div className="flex gap-2 mt-4">
          <button className="flex-1 bg-[#f47c20] text-white text-xs py-2 rounded-md font-semibold hover:bg-[#dc6e19] transition">
            DOWNLOAD BROCHURE
          </button>

          <button className="w-9 h-9 border border-slate-300 rounded-md flex items-center justify-center hover:bg-slate-100 transition">
            →
          </button>
        </div>
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section className="bg-white py-16">

      {/* Container */}
      <div className="mx-auto w-full max-w-[1100px] px-4">

        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-6 mb-10">
          <div>
            <span className="bg-[#fff4ea] text-[#f47c20] text-xs px-3 py-1 rounded-full font-bold">
              • SERVICES
            </span>

            <h2 className="text-3xl font-bold text-slate-800 mt-3">
              Our Turnkey Projects
            </h2>
          </div>

          <p className="text-slate-600 text-sm">
            Our turnkey projects explore how we've helped industries globally transition from operational chaos to systematic excellence.
          </p>
        </div>

        {/* GRID (FORCED 3-3) */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "20px"
          }}
        >
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

      </div>
    </section>
  );
}