import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { 
  FlaskConical, 
  BookOpen, 
  Sparkles, 
  Calculator, 
  TrendingUp, 
  Clock, 
  Award, 
  Package, 
  Tag, 
  CheckCircle2, 
  ArrowRight 
} from "lucide-react";

export default function FoodProductDevelopmentPage() {
  const [openFAQIndex, setOpenFAQIndex] = useState(null);

  useEffect(() => {
    document.title = "Food Product Development & Formulation Consultancy | Salvin Industries";
    window.scrollTo(0, 0);
  }, []);

  const heroImage = "/assets/core/heroes/salvinhero2.webp";
  const introImage = "/assets/core/services/service_processing_packaging.webp";

  const servicesList = [
    {
      id: "new-product-development",
      title: "New Product Development (NPD)",
      icon: <FlaskConical size={32} className="text-orange-500" />,
      description: "Translating innovative food concepts into commercially viable product formulations with appealing taste, texture, aroma, and nutritional profile.",
      deliverables: [
        "Benchtop Recipe Development & Ingredient Matching",
        "Flavor & Texture Profile Customization",
        "Target Consumer Segment Formulation",
        "Commercial Viability & Margin Analysis"
      ]
    },
    {
      id: "recipe-formulation-development",
      title: "Recipe / Formulation Development",
      icon: <BookOpen size={32} className="text-orange-500" />,
      description: "Standardization of precise recipe ratios, active food ingredient dosages, natural preservatives, emulsifiers, and stability matrixes for mass manufacturing.",
      deliverables: [
        "Batch Master Recipe & Percentage Ratios",
        "Food Additive & Hydrocolloid Selection",
        "Nutritional Panel & Calorie Calculations",
        "Standard Operating Batch Sheets (SOPs)"
      ]
    },
    {
      id: "product-improvement",
      title: "Product Improvement",
      icon: <Sparkles size={32} className="text-orange-500" />,
      description: "Upgrading existing product formulations to enhance sensory appeal, reduce sugar/fat content, eliminate artificial colors, or match market benchmark leaders.",
      deliverables: [
        "Clean-Label & No-Artificial Additive Reformulation",
        "Texture, Crunch & Mouthfeel Enhancements",
        "Sugar, Salt & Oil Reduction Optimization",
        "Market Leader Benchmark Matching"
      ]
    },
    {
      id: "cost-optimization",
      title: "Cost Optimization",
      icon: <Calculator size={32} className="text-orange-500" />,
      description: "Reformulating recipes using cost-effective alternative ingredients, local raw materials, and yield enhancement without compromising taste or quality.",
      deliverables: [
        "Raw Material Cost-per-Kg Reduction",
        "Alternate Local Ingredient Sourcing Specs",
        "Process Yield & Moisture Retention Gains",
        "Gross Margin Multiplication per SKU"
      ]
    },
    {
      id: "commercial-scale-up",
      title: "Commercial Scale-up",
      icon: <TrendingUp size={32} className="text-orange-500" />,
      description: "Transitioning lab-scale benchtop recipes into large-scale pilot batch production and continuous factory line trials with zero batch variations.",
      deliverables: [
        "Benchtop to Factory Line Scale-Up Protocols",
        "Thermal Processing & Hold Time Adjustments",
        "Shear, Mixing & Viscosity Line Tuning",
        "Industrial Batch Consistency Validation"
      ]
    },
    {
      id: "shelf-life-study-coordination",
      title: "Shelf-life Study Coordination",
      icon: <Clock size={32} className="text-orange-500" />,
      description: "Accelerated and real-time shelf-life testing coordination to evaluate microbial growth, lipid oxidation, color degradation, and packaging barrier performance.",
      deliverables: [
        "Accelerated Shelf-Life Testing (ASLT) Protocols",
        "Microbial (TPC, Yeast & Mold) Growth Audits",
        "Rancidity & Moisture Sorption Isotherm Analysis",
        "Best Before Date (BBD) Certification Data"
      ]
    },
    {
      id: "sensory-evaluation",
      title: "Sensory Evaluation",
      icon: <Award size={32} className="text-orange-500" />,
      description: "Structured organoleptic consumer panels evaluating taste, aroma, color, appearance, mouthfeel, and post-consumption aftertaste against competing brands.",
      deliverables: [
        "Organoleptic Sensory Scorecard (Hedonic Scale)",
        "Consumer Preference & Blind Taste Testing",
        "Flavor Notes & Aroma Profile Mapping",
        "Panellist Feedback Action Plan"
      ]
    },
    {
      id: "packaging-selection",
      title: "Packaging Selection",
      icon: <Package size={32} className="text-orange-500" />,
      description: "Selecting optimal food-grade flexible laminates, rigid containers, MAP gas flushing, barrier films, and retort pouches to maximize product freshness.",
      deliverables: [
        "Oxygen & Moisture Vapor Transmission Rate (OTR/WVTR) Specs",
        "Food-Grade Laminate & Barrier Film Selection",
        "Modified Atmosphere Packaging (MAP) Advisory",
        "Eco-Friendly & Sustainable Packaging Sourcing"
      ]
    },
    {
      id: "private-label-development",
      title: "Private Label Development",
      icon: <Tag size={32} className="text-orange-500" />,
      description: "Turnkey product creation for retail supermarket brands, D2C startups, and international importers seeking customized white-label food products.",
      deliverables: [
        "Turnkey White-Label Recipe & Formulation",
        "Co-Packer Manufacturing Alignment",
        "FSSAI / FDA Label Compliance & NLEA Specs",
        "Commercial Batch Pricing & MOQ Structuring"
      ]
    }
  ];

  const faqs = [
    {
      question: "How long does it take to develop a new food product formulation?",
      answer: "A complete lab-to-factory product formulation typically takes between 3 to 6 weeks, depending on the complexity of taste profiling, ingredient sourcing, and initial shelf-life testing."
    },
    {
      question: "Can Salvin Industries help us extend the shelf life of our product without artificial preservatives?",
      answer: "Yes, we specialize in clean-label preservation methods, including thermal processing optimization, water activity (Aw) reduction, natural antioxidants (like rosemary extract), and barrier packaging selection."
    },
    {
      question: "What is the difference between benchtop recipe development and commercial scale-up?",
      answer: "Benchtop development creates small 1kg lab batches for taste and texture validation. Commercial scale-up adapts that recipe for 500kg+ automated factory batches, adjusting for machinery shear, thermal degradation, and line mixing times."
    },
    {
      question: "Do you assist in packaging material selection and barrier testing?",
      answer: "Yes, we specify exact Oxygen Transmission Rate (OTR) and Moisture Vapor Transmission Rate (WVTR) laminate barriers, nitrogen gas flushing (MAP), or retort pouches to guarantee shelf stability."
    },
    {
      question: "Can you help D2C startups and retail brands with private label food products?",
      answer: "Yes, we provide end-to-end private label formulation, batch cost modeling, co-packer selection, and FSSAI/FDA nutritional packaging label compliance."
    }
  ];

  return (
    <div className="min-w-0 overflow-x-hidden bg-slate-50">
      {/* Hero Banner Section */}
      <section 
        className="relative py-24 px-4 bg-slate-900 text-white text-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.85), rgba(15, 23, 42, 0.85)), url('${heroImage}')`
        }}
      >
        <div className="max-w-5xl mx-auto">
          <span className="inline-block bg-orange-500/20 text-orange-400 border border-orange-500/40 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
            SALVIN FOOD INNOVATION LAB
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-wide leading-tight mb-6">
            FOOD PRODUCT DEVELOPMENT
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
            New Product Formulation, Recipe Standardization, Cost Optimization, Commercial Line Scale-Up, Shelf-Life Testing &amp; Private Label Product Creation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <NavLink 
              to="/contact" 
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3.5 px-8 rounded-lg shadow-lg transition-all text-sm uppercase tracking-wider inline-flex items-center gap-2"
            >
              Consult Our Food Technologists <ArrowRight size={18} />
            </NavLink>
          </div>
        </div>
      </section>

      {/* SEO Intro Section (Image Left, Content Right) */}
      <section className="py-12 md:py-16">
        <div className="content-container">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Left Side: Image */}
            <div className="w-full md:w-5/12 flex justify-center items-center">
              <img 
                src={introImage} 
                alt="Food Product Development" 
                className="w-full max-w-md md:max-w-full h-auto rounded-none shadow-md object-cover"
              />
            </div>

            {/* Right Side: Content */}
            <div className="w-full md:w-7/12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
                Food Product Development &amp; Formulation Services
              </h2>
              <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-4 text-justify">
                Launching a successful food product requires more than a home recipe. It demands precise <strong>recipe standardization, food science formulation, commercial line scale-up, shelf-life validation, and barrier packaging selection</strong>. At <strong>Salvin Industries</strong>, our experienced food technologists help brands create winning food products.
              </p>
              <p className="text-slate-600 text-base md:text-lg leading-relaxed text-justify">
                Whether you are developing new D2C snack lines, reformulating recipes for clean-label compliance, optimizing raw material costs, or launching private label products, we deliver consumer-ready formulations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 9 Core Product Development Services Grid (3 Columns per Row) */}
      <section className="pb-6 px-4">
        <div className="content-container">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 mb-4">
              Our Core Food Product Development Services
            </h2>
            <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto">
              Recipe development, cost optimization, sensory evaluation, and commercial scale-up solutions.
            </p>
          </div>

          <div className="food-services-grid">
            {servicesList.map((service) => (
              <div 
                key={service.id} 
                id={service.id}
                className="bg-white rounded-none p-6 md:p-7 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-4 mb-5">
                    <div className="flex-shrink-0">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-extrabold text-slate-900 leading-snug">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6 text-justify">
                    {service.description}
                  </p>

                  <div className="border-t border-slate-100 pt-5 mb-6">
                    <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
                      Key Deliverables &amp; Outcomes:
                    </h4>
                    <ul className="space-y-2">
                      {service.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                          <CheckCircle2 size={16} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  <NavLink 
                    to="/contact" 
                    className="inline-flex items-center gap-2 text-xs font-bold text-orange-500 hover:text-orange-600 uppercase tracking-wider transition-colors"
                  >
                    Request Consultation <ArrowRight size={14} />
                  </NavLink>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-8 px-4">
        <div className="content-container">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 mb-4">
              Frequently Asked Questions (FAQ)
            </h2>
            <p className="text-slate-600 text-base">
              Common questions about our Food Product Development Services.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenFAQIndex(openFAQIndex === index ? null : index)}
                  className="w-full p-5 text-left font-bold text-slate-900 flex justify-between items-center gap-4 hover:bg-slate-50 transition-colors"
                >
                  <span className="text-base md:text-lg">{faq.question}</span>
                  <span className="text-orange-500 font-extrabold text-xl">{openFAQIndex === index ? "−" : "+"}</span>
                </button>

                {openFAQIndex === index && (
                  <div className="p-5 pt-0 text-slate-600 text-sm md:text-base leading-relaxed border-t border-slate-100">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer Banner */}
      <section className="py-16 bg-[#0b1c2c] text-white text-center px-4 border-t-4 border-orange-500 shadow-xl">
        <div className="content-container">
          <h2 className="text-2xl md:text-4xl font-extrabold mb-4">
            Ready to Formulate Your Next Food Product?
          </h2>
          <p className="text-slate-300 text-base md:text-lg max-w-2xl mx-auto mb-8">
            Speak with our food technologists today to discuss recipe formulation, shelf-life testing, or product scale-up.
          </p>
          <NavLink 
            to="/contact" 
            className="bg-orange-500 hover:bg-orange-600 text-white font-extrabold py-4 px-10 rounded-full shadow-lg transition-all text-sm uppercase tracking-wider inline-block"
          >
            Get In Touch With Our Food Technologists
          </NavLink>
        </div>
      </section>
    </div>
  );
}
