import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import consultantHero from "../assets/turnkey-brochures/images/mayonnaise-processing-plant/automatic_filling.jpg";
import foodPlant from "../assets/food-processing-plant.jpg";
import turnkeyProj from "../assets/hero/turkey_proj.png";

const slides = [
  {
    image: consultantHero,
    title: "Top Food Plant Consultants",
    subtitle: "We help you set up profitable food processing businesses with end-to-end expert guidance."
  },
  {
    image: foodPlant,
    title: "Factory Layout & Engineering",
    subtitle: "Get FSSAI-compliant 3D factory blueprints that maximize space and ensure hygiene."
  },
  {
    image: turnkeyProj,
    title: "DPR & ROI Planning",
    subtitle: "Secure your investment with Detailed Project Reports, budget planning, and exact machine selection."
  }
];

const advisoryServices = [
  {
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=600&q=80",
    title: "Technical Advisory Services",
    description: "The food processing industry demands precision. We provide expert advice on machinery selection, capacity planning, and technical feasibility.",
    link: "/contact"
  },
  {
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=600&q=80",
    title: "Engineering Services",
    description: "Factory layouts and engineering blueprints ensuring optimal workflow, hygiene, and maximum space utilization for your food plant.",
    link: "/contact"
  },
  {
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32b7?auto=format&fit=crop&w=600&q=80",
    title: "Marketing Facilitation",
    description: "Our consultancy specializes in helping you position your processed food products competitively in the market with data-driven insights.",
    link: "/contact"
  },
  {
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80",
    title: "Merger & Acquisition",
    description: "Strategic consulting for food businesses looking to expand, merge, or acquire new facilities, providing complete ROI and technical audits.",
    link: "/contact"
  },
  {
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=600&q=80",
    title: "Regulatory Advisory",
    description: "Navigating FSSAI compliance, GMP, and food safety regulations to ensure smooth government approvals and international standards.",
    link: "/contact"
  }
];

export default function ServicesPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-scroll logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 7000); // Changes every 7 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-w-0 overflow-x-hidden bg-white">
      
      {/* Hero Carousel Section - Full Width */}
      <section className="relative w-full h-[55vh] md:h-[65vh] overflow-hidden bg-slate-900">
        
        {/* Render Slides */}
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-[2000ms] ease-in-out ${
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            {/* Background Image with Dark Overlay */}
            <div 
              className="absolute inset-0 w-full h-full bg-cover bg-top transition-transform duration-[6000ms] ease-out scale-105"
              style={{ 
                backgroundImage: `url('${slide.image}')`,
                transform: index === currentSlide ? 'scale(1)' : 'scale(1.05)'
              }}
            >
              <div className="absolute inset-0 bg-black/60"></div>
            </div>

            {/* Animated Text Content */}
            <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-4">
              <h1 
                className={`text-3xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 drop-shadow-2xl transition-all duration-700 delay-300 ${
                  index === currentSlide ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
              >
                {slide.title}
              </h1>
              <p 
                className={`text-lg md:text-xl text-gray-200 max-w-3xl drop-shadow-lg transition-all duration-700 delay-500 ${
                  index === currentSlide ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
              >
                {slide.subtitle}
              </p>
              
              <div 
                className={`mt-10 transition-all duration-700 delay-700 ${
                  index === currentSlide ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              >
                <NavLink 
                  to="/contact" 
                  className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-4 px-10 rounded-full shadow-lg transition-colors text-lg uppercase tracking-wide"
                >
                  Consult Now
                </NavLink>
              </div>
            </div>
          </div>
        ))}

        {/* Carousel Indicators / Dots */}
        <div className="absolute bottom-8 left-0 right-0 z-30 flex justify-center space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? "bg-amber-500 w-10" : "bg-white/50 hover:bg-white"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>
        
      </section>

      {/* Advisory Services Section */}
      <section className="py-20 px-4 max-w-[1400px] mx-auto bg-white">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Food Consultant Advisory Services</h2>
          <p className="text-gray-600 max-w-4xl mx-auto text-lg leading-relaxed">
            Salvin Industries is one of the Top food consultants in India and having <span className="font-bold">25+ years of experience</span> in food consultancy services and food processing solutions.
          </p>
        </div>

        {/* 5-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {advisoryServices.map((service, idx) => (
            <div key={idx} className="flex flex-col h-full bg-white group">
              <div className="overflow-hidden mb-6 h-48">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4 leading-snug">
                {service.title}
              </h3>
              <p className="text-gray-500 mb-6 flex-grow leading-relaxed">
                {service.description}
              </p>
              <NavLink 
                to={service.link} 
                className="text-blue-600 font-bold text-sm tracking-wider uppercase hover:text-blue-800 transition-colors mt-auto inline-block"
              >
                More
              </NavLink>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
