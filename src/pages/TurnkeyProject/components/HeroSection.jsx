import React from "react";
import { NavLink } from "react-router-dom";

const turnkeyHeroBg = "/assets/core/heroes/turnkey_hiro.jpg";

function HeroSection() {
  return (
    <section className="relative w-full h-[55vh] md:h-[65vh] overflow-hidden bg-slate-900 pt-16 flex items-center justify-center">
      {/* Background Image with Dark Overlay */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-[6000ms] ease-out scale-105"
        style={{ backgroundImage: `url('${turnkeyHeroBg}')` }}
      >
        <div className="absolute inset-0 bg-black/65"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-20 flex flex-col items-center text-center px-4 max-w-5xl mx-auto my-auto">
        <span className="bg-[#ff7a00] text-white text-xs md:text-sm font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4 shadow-md">
          SALVIN TURNKEY PROJECTS
        </span>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 drop-shadow-2xl leading-tight tracking-tight">
          Turnkey Projects
        </h1>
        <p className="text-base md:text-xl lg:text-2xl font-semibold text-gray-200 max-w-4xl drop-shadow-lg leading-relaxed mb-8 tracking-wide">
          Food | Pharmaceutical | API | Cosmetics | Oil | Confectionery | Snacks
        </p>

        <div>
          <NavLink
            to="/contact"
            className="bg-[#ff7a00] hover:bg-[#e56d00] text-white font-bold py-3.5 px-8 md:py-4 md:px-10 rounded-full shadow-xl transition-all text-sm md:text-base uppercase tracking-wide inline-block"
          >
            Get Consultation
          </NavLink>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
