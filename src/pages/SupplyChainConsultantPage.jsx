import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const supplyChainHero = "/assets/core/services/service_supply_chain.webp";
const largePlantImg = "/assets/core/icons/large_industrial_plant.webp";
const equipmentCollageImg = "/assets/core/icons/equipment_collage.webp";
const expertiseFactoryImg = "/assets/core/icons/expertise_factory.webp";

// Advisory images
const adv1 = "/assets/company/advisory/tech_advisory.webp";
const adv2 = "/assets/company/advisory/engineering.webp";
const adv3 = "/assets/company/advisory/marketing.webp";
const adv4 = "/assets/company/advisory/merger.webp";
const adv5 = "/assets/company/advisory/regulatory.webp";

const advisoryServices = [
  {
    image: adv1,
    title: "Raw Material & Commodity Sourcing",
    description: "Strategic agricultural procurement, mandi direct sourcing, crop seasonality mapping, and price hedging to secure high-quality ingredients.",
    link: "/contact"
  },
  {
    image: adv2,
    title: "Vendor Development & Auditing",
    description: "Rigorous ingredient, packaging, and machinery vendor qualification protocols, supplier scorecards, and enforceable service level agreements (SLAs).",
    link: "/contact"
  },
  {
    image: adv3,
    title: "Cold Chain & Temperature Logistics",
    description: "Reefer fleet routing, cold room thermal engineering, blast freezing integration, and IoT continuous temperature telemetry to eliminate spoilage.",
    link: "/contact"
  },
  {
    image: adv4,
    title: "Warehouse & Inventory Engineering",
    description: "High-density selective racking layouts, dock leveler flows, FEFO/FIFO rotation protocols, and barcode-enabled ERP/WMS systems.",
    link: "/contact"
  },
  {
    image: adv5,
    title: "Freight & Distribution Optimization",
    description: "Primary and secondary freight cost reduction, vehicle full-truckload (FTL) maximization, 3PL/4PL negotiation, and regional distribution hub design.",
    link: "/contact"
  }
];

const expertiseFAQs = [
  { 
    question: "What types of supply chain consulting services does Salvin provide?", 
    answer: "We provide end-to-end supply chain consulting covering raw agricultural commodity sourcing, vendor development and audits, cold chain logistics, automated warehouse layouts, inventory management (FIFO/FEFO), demand planning, and distribution network design." 
  },
  { 
    question: "How do you help reduce raw material procurement costs?", 
    answer: "We leverage 25+ years of industry volume networks to negotiate directly with farm cooperatives, bulk agricultural mandis, and certified ingredient manufacturers, cutting middleman markups and setting up seasonal hedging and buffer stock strategies." 
  },
  { 
    question: "Do you assist with cold chain and perishable goods logistics?", 
    answer: "Yes, we engineer temperature-controlled cold chains including pre-cooling chambers, blast freezers, refrigerated reefer transport, and IoT real-time GPS temperature logging to maintain unbroken cold chains for dairy, frozen foods, juices, and produce." 
  },
  { 
    question: "Can Salvin design modern automated warehouse layouts?", 
    answer: "Absolutely. We design cGMP-compliant ambient and chilled warehouses featuring high-density selective racking, efficient loading docks, ergonomic forklift aisles, and automated WMS/ERP inventory tracking systems." 
  },
  { 
    question: "What is your typical consulting timeline for supply chain overhaul?", 
    answer: "Initial supply chain diagnostic audits take 2 to 4 weeks, followed by roadmap implementation, vendor onboarding, and logistics optimization over 2 to 6 months depending on factory scale and network complexity." 
  }
];

export default function SupplyChainConsultantPage() {
  const [openFAQIndex, setOpenFAQIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQIndex(openFAQIndex === index ? null : index);
  };

  useEffect(() => {
    document.title = "Supply Chain Consultant | Food & Industrial Logistics | Salvin Industries";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-w-0 overflow-x-hidden bg-white">
      
      {/* Hero Section - Full Width with 1 Hero Image */}
      <section className="relative w-full h-[55vh] md:h-[65vh] overflow-hidden bg-slate-900">
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-1000 scale-100"
          style={{ backgroundImage: `url('${supplyChainHero}')` }}
        >
          <div className="absolute inset-0 bg-black/65"></div>
        </div>

        {/* Animated Text Content */}
        <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-4 max-w-5xl mx-auto">
          <span className="text-amber-400 font-bold tracking-widest text-xs md:text-sm uppercase mb-3">
            SALVIN SUPPLY CHAIN CONSULTING
          </span>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 drop-shadow-2xl leading-tight">
            Top Supply Chain Consultants in India
          </h1>
          <p className="text-base md:text-lg text-gray-200 max-w-3xl drop-shadow-lg leading-relaxed mb-8">
            Expert Procurement Strategies, Cold Chain Engineering, Automated Warehouse Logistics &amp; End-to-End Inventory Optimization.
          </p>
          
          <div>
            <NavLink 
              to="/contact" 
              className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-4 px-10 rounded-full shadow-lg transition-colors text-lg uppercase tracking-wide inline-block"
            >
              Consult Now
            </NavLink>
          </div>
        </div>
      </section>

      {/* Advisory Services Section - 5 Column Grid */}
      <section className="py-20 px-4 max-w-[1400px] mx-auto bg-white">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-800 mb-4">
            Supply Chain Consultant Advisory Services
          </h2>
          <p className="text-gray-600 max-w-4xl mx-auto text-lg leading-relaxed">
            Salvin Industries is one of the top industrial and food supply chain consultants in India, with <span className="font-bold">25+ years of experience</span> delivering resilient procurement pipelines, cold chain efficiency, and warehouse automation.
          </p>
        </div>

        {/* 5-Column Grid matching Food Consultant */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {advisoryServices.map((service, idx) => (
            <div key={idx} className="flex flex-col h-full bg-white group cursor-pointer">
              <div className="overflow-hidden mb-5 h-36 border border-gray-100 shadow-sm">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="text-[17px] font-bold text-slate-800 mb-3 leading-snug transition-colors duration-300 group-hover:text-[#03859b]">
                {service.title}
              </h3>
              <p className="text-gray-500 text-[14px] mb-5 flex-grow leading-relaxed">
                {service.description}
              </p>
              <NavLink 
                to={service.link} 
                className="text-blue-700 font-bold text-xs tracking-widest uppercase hover:text-blue-900 transition-colors mt-auto inline-block underline underline-offset-4"
              >
                MORE
              </NavLink>
            </div>
          ))}
        </div>
      </section>

      {/* Comprehensive Detailed Technical & SEO Content Section */}
      <div className="w-full bg-[#ebf0f6] mt-10">
        <section className="py-16 px-4 max-w-[1200px] mx-auto text-gray-700 space-y-12 text-[15px] leading-relaxed">
          
          <div className="text-center pb-8 mb-4 border-b border-gray-300/60">
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-800 mb-4">
              Complete Supply Chain Architecture &amp; Procurement Consultancy
            </h2>
            <p className="text-[17px] text-gray-600 max-w-3xl mx-auto">
              Strategic guidance from logistics veterans to streamline sourcing, protect inventory margins, and build bulletproof delivery corridors.
            </p>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-slate-800 mb-4">
              Trusted Supply Chain &amp; Procurement Consultants in Ahmedabad
            </h2>
            <p className="mb-4">
              Salvin Industries is a premier industrial supply chain consultancy based in Ahmedabad, Gujarat, serving manufacturing, food processing, pharmaceutical, and chemical enterprises across India and international markets. A robust supply chain is the backbone of manufacturing profitability—delays in raw ingredient delivery, unverified vendor quality, or broken temperature corridors can halt multi-crore factory lines within hours.
            </p>
            <p>
              We provide practical, end-to-end consulting that connects farm-gate sourcing directly to consumer distribution centers. We don't just draft theoretical charts; our team audits supplier facilities on the ground, architects warehouse racking plans, implements real-time ERP inventory safeguards, and negotiates long-term transport contracts to deliver tangible bottom-line savings.
            </p>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-slate-800 mb-4">
              Expert Material Sourcing &amp; Global Vendor Development
            </h2>
            <p className="mb-4">
              Procuring consistent agricultural commodities and barrier packaging materials requires rigorous vendor qualification. Fluctuating crop yields, monsoon delays, and volatile open-market pricing demand structured procurement contracts with secondary backup suppliers.
            </p>
            <p>
              Salvin Industries develops comprehensive vendor scorecards evaluating supplier adherence to cGMP, FSSAI traceability, defect tolerances, and on-time delivery rates. We assist clients in transitioning from erratic spot purchases to structured forward contracts that lock in predictable pricing and guarantee volume availability.
            </p>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-slate-800 mb-4">
              Our Complete Supply Chain Consultancy Services
            </h2>
            <p className="mb-6">We provide an integrated spectrum of supply chain and logistics solutions under one roof:</p>
            <div className="space-y-6">
              <div>
                <h3 className="text-[17px] font-semibold text-slate-800 mb-1">Raw Material &amp; Agricultural Crop Sourcing</h3>
                <p>We map seasonal harvesting calendars across key agricultural belts in India, establishing direct procurement corridors from farmer producer organizations (FPOs) and agricultural mandis for spices, grains, pulses, dairy, and oils.</p>
              </div>
              <div>
                <h3 className="text-[17px] font-semibold text-slate-800 mb-1">Packaging Material Procurement &amp; Compatibility</h3>
                <p>We coordinate procurement of high-barrier multi-layer laminate pouches, corrugated boxes, vacuum bags, and rigid containers tested specifically for high-speed automated packaging machinery to prevent seal failures and shelf-life degradation.</p>
              </div>
              <div>
                <h3 className="text-[17px] font-semibold text-slate-800 mb-1">Cold Chain Infrastructure &amp; Thermal Engineering</h3>
                <p>For perishable foods, dairy, and frozen products, we engineer unbroken cold corridors—including pre-cooling rooms, blast chillers, reefer van fleet specifications, and continuous IoT cloud-connected temperature loggers.</p>
              </div>
              <div>
                <h3 className="text-[17px] font-semibold text-slate-800 mb-1">Automated Warehouse Layout &amp; Flow Design</h3>
                <p>We design high-density pallet racking, narrow aisle layouts, dock leveler positions, and staging areas that ensure smooth movement of forklifts while maintaining strict cGMP hygiene, pest exclusion, and dust containment standards.</p>
              </div>
              <div>
                <h3 className="text-[17px] font-semibold text-slate-800 mb-1">Inventory Management Systems (FIFO &amp; FEFO)</h3>
                <p>We configure barcode and RFID-driven inventory tracking rules within your ERP/WMS, automating First-Expired, First-Out (FEFO) and First-In, First-Out (FIFO) movement to eliminate expired stock, spoilage, and working capital deadlocks.</p>
              </div>
              <div>
                <h3 className="text-[17px] font-semibold text-slate-800 mb-1">Freight Optimization &amp; 3PL/4PL Contracting</h3>
                <p>We analyze transportation lanes, maximize vehicle fill rates (FTL/LTL), establish service level agreements with reliable logistics providers, and implement route-planning tools to cut per-case shipping expenses.</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-slate-800 mb-4">
              Why Salvin Industries is the Best Supply Chain Consultant?
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-[17px] font-semibold text-slate-800 mb-1">25+ Years of Proven Manufacturing Experience</h3>
                <p>Unlike purely academic consulting firms, our background spans decades of building real turnkey manufacturing plants, giving us first-hand mastery of raw material intake, machine throughput, and dispatch bottlenecks.</p>
              </div>
              <div>
                <h3 className="text-[17px] font-semibold text-slate-800 mb-1">Measurable Cost Reductions</h3>
                <p>Our strategic sourcing frameworks, vendor renegotiations, and pallet optimization regularly yield 8% to 18% savings in overall procurement and handling costs.</p>
              </div>
              <div>
                <h3 className="text-[17px] font-semibold text-slate-800 mb-1">Comprehensive A to Z Execution</h3>
                <p>From factory gate intake to national distributor fulfillment, we manage supplier audits, quality specs, warehouse 3D blueprints, and freight carrier SLAs under single-window responsibility.</p>
              </div>
              <div>
                <h3 className="text-[17px] font-semibold text-slate-800 mb-1">Food Safety &amp; Regulatory Compliance</h3>
                <p>Every supply chain model we build strictly complies with FSSAI, ISO 22000, HACCP, and global export standards, ensuring total traceability and zero contamination risk.</p>
              </div>
              <div>
                <h3 className="text-[17px] font-semibold text-slate-800 mb-1">Trusted by Leading FMCG Brands</h3>
                <p>Over 100+ manufacturing enterprises across India, the Middle East, and Africa rely on Salvin's advisory for continuous, cost-efficient factory supply chains.</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-slate-800 mb-4">
              Industries We Serve
            </h2>
            <p className="mb-4">We engineer optimized supply chain networks across diverse manufacturing sectors:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Food, Spices, Seasonings, and Ready-to-Eat Manufacturing</li>
              <li>Dairy, Ice Cream, Beverage, and Cold Juice Plants</li>
              <li>Bakery, Confectionery, Extruded Snacks, and Namkeen Units</li>
              <li>Pharmaceutical, API, Health Supplement, and Nutraceutical Facilities</li>
              <li>Agrochemicals, Specialty Chemicals, and Industrial Packaging Lines</li>
            </ul>
            <p>Whether scaling an emerging regional brand or managing multi-state distribution networks, we tailor strategies to your precise volume and budget.</p>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-slate-800 mb-4">
              Your Strategic Logistics &amp; Sourcing Partner
            </h2>
            <p className="mb-4">
              In modern industrial competition, the winning company is often the one with the superior supply chain. By partnering with Salvin Industries, you protect your production schedules from stockouts, lower inventory carrying costs, and deliver consistent quality to every customer.
            </p>
            <p>
              Our multidisciplinary engineering and procurement consultants stand ready to audit your current logistics footprint and design a resilient, profitable roadmap.
            </p>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-slate-800 mb-4">
              Start Your Supply Chain Optimization Today
            </h2>
            <p>
              Ready to eliminate bottlenecks and lower procurement overhead? Contact Salvin Industries today to schedule a confidential supply chain evaluation with our senior consultants.
            </p>
          </div>

        </section>
      </div>

      {/* Personalized Supply Chain Solutions Section - 2 Column Layout matching Food Consultant */}
      <section className="py-16 px-4 max-w-[1200px] mx-auto bg-white text-left">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Content Side */}
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-800 mb-6 leading-tight">
              Tailored Supply Chain Architectures to Best Fit Your Budget
            </h2>
            
            <div className="space-y-5 text-gray-600 text-lg leading-relaxed">
              <p>
                At Salvin Industries, we engineer your supply chain network to match your exact production capacity and budgetary constraints. Every sourcing channel, warehouse blueprint, and carrier agreement is designed to safeguard product freshness while driving down total landed cost per unit.
              </p>
              <p>
                We help you minimize unnecessary working capital locked in dead inventory through predictive demand modeling and safety stock algorithms. From establishing qualified farmer networks to commissioning automated pallet storage racks and ERP tracking, our hands-on engineering team handles every operational detail so your factory operates at peak throughput year-round.
              </p>
            </div>
          </div>

          {/* Image Side */}
          <div className="w-full rounded-lg overflow-hidden border border-gray-100 group cursor-pointer shadow-md hover:shadow-2xl transition-all duration-300">
            <img 
              src={largePlantImg} 
              alt="Salvin Industrial Supply Chain & Plant Operations" 
              className="w-full h-auto object-cover max-h-[600px] transition-transform duration-500 group-hover:scale-105"
            />
          </div>

        </div>
      </section>

      {/* Advanced Infrastructure & Equipment Section matching Food Consultant */}
      <div className="w-full bg-[#f8fafc] py-20 border-t border-gray-200">
        <section className="px-4 max-w-[1200px] mx-auto text-gray-700">
          <div className="mb-10 text-center">
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-800 mb-4 leading-tight">
              Modern Warehouse Automation &amp; Material Handling Equipment
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              High-efficiency racking, dock management, and IoT tracking to secure your end-to-end material flow.
            </p>
          </div>

          <div className="w-full rounded-xl overflow-hidden border border-gray-200 mb-12 shadow-sm">
            <img 
              src={equipmentCollageImg} 
              alt="Salvin Industrial Material Handling and Packaging Equipment" 
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="space-y-6 text-[16px] leading-relaxed">
            <p>
              At <strong className="text-gray-900">Salvin Industries</strong>, we integrate heavy-duty, hygienic material handling and warehouse storage systems engineered for maximum operational safety and throughput. Modern high-speed production plants require seamless coordination between automated pallet conveyors, hydraulic dock levelers, and selective drive-in racking.
            </p>
            <p>
              The sanitary design of our material transfer equipment prevents cross-contamination of food ingredients and pharmaceutical chemicals during transit and staging. Smooth, corrosion-resistant surfaces, dust-tight bulk bag dischargers, and pneumatic vacuum conveyers maintain strict hygiene across the entire factory envelope.
            </p>
            <p>
              Our logistics engineering facilitates end-to-end automation, reducing manual labor overhead and eliminating handling damages. From high-capacity bulk silos and climate-controlled storage vaults to automated stretch-wrapping machines that prepare palletized goods for immediate dispatch, we provide turnkey logistical infrastructure.
            </p>
            <p>
              Whether you are looking to optimize an existing regional distribution warehouse or design a brand-new multi-temperature facility, Salvin Industries offers proven consulting and equipment integrations to support sustainable, high-velocity growth.
            </p>
          </div>
        </section>
      </div>

      {/* Expertise & FAQ Section matching Food Consultant */}
      <div className="w-full bg-[#fdf5e6]">
        <section className="py-8 px-4 max-w-[850px] mx-auto text-left">
          
          {/* Top Text Content */}
          <div className="mb-6">
            <h2 className="text-xl md:text-2xl font-semibold text-[#110e2d] mb-2 leading-tight tracking-tight">
              Backed by Supply Chain Science<br className="hidden md:block" /> &amp; industrial logistics expertise
            </h2>
            <p className="text-gray-900 text-[13px] max-w-[700px] leading-snug font-medium">
              From strategic agricultural procurement to cutting-edge cold corridor integration, we optimize cycle times, guarantee product traceability, and drive operational sustainability at every stage of your supply chain.
            </p>
          </div>

          {/* Two Column Layout (Uneven to make image smaller) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            
            {/* Left Image (Smaller Width, 1 column) */}
            <div className="w-full md:col-span-1 rounded-lg overflow-hidden shadow-sm border border-gray-200">
              <img 
                src={expertiseFactoryImg} 
                alt="Salvin Supply Chain & Logistics Expertise" 
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Right Services List (Larger Width, 2 columns) */}
            <div className="w-full flex flex-col md:col-span-2">
              <h3 className="text-lg font-semibold text-[#110e2d] mb-2">Services FAQ</h3>
              <div className="flex flex-col border-t-2 border-black">
                {expertiseFAQs.map((faq, idx) => (
                  <div key={idx} className="flex flex-col border-b-2 border-black group">
                    <div 
                      className="flex justify-between items-center py-2 cursor-pointer"
                      onClick={() => toggleFAQ(idx)}
                    >
                      <span className="font-bold text-[13px] text-[#110e2d] hover:text-amber-600 transition-colors">
                        {faq.question}
                      </span>
                      <span className="bg-[#fbbf24] text-black w-5 h-5 flex items-center justify-center font-bold text-sm rounded-[2px] transition-transform group-hover:scale-110 shadow-sm leading-none flex-shrink-0">
                        {openFAQIndex === idx ? '-' : '+'}
                      </span>
                    </div>
                    {/* FAQ Answer */}
                    <div 
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        openFAQIndex === idx ? 'max-h-48 pb-2 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <p className="text-xs text-gray-700 leading-relaxed pr-6 mt-1">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>
      </div>

    </div>
  );
}
