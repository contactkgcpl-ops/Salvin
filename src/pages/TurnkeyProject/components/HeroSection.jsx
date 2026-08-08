// src/components/HeroSection.jsx
import { useState, useEffect } from "react";
import Slide1 from "../../../assets/hero/user-wide-slide-5.webp"; // Red Chilli
import Slide4 from "../../../assets/hero/final-slide-3.webp";
import Slide5 from "../../../assets/hero/final-slide-4.webp";

const IMAGES = [Slide1, Slide4, Slide5];

function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true);
      setCurrentSlide((prev) => prev + 1);
    }, 4000); // Change image every 4 seconds
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (currentSlide === IMAGES.length) {
      const timeout = setTimeout(() => {
        setIsTransitioning(false); // disable transition
        setCurrentSlide(0); // snap back to real first slide
      }, 1500); // match transition duration
      return () => clearTimeout(timeout);
    }
  }, [currentSlide]);

  return (
    <section className="relative w-full overflow-hidden bg-white">

      {/* Image Slider */}
      <div
        className={`flex w-full h-[400px] md:h-[500px] lg:h-[650px] ${isTransitioning ? "transition-transform duration-[1500ms] ease-in-out" : ""}`}
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {[...IMAGES, IMAGES[0]].map((imgSrc, index) => (
          <img
            key={index}
            src={imgSrc}
            alt={`Salvin Turnkey Plant ${index + 1}`}
            className="w-full shrink-0 h-[400px] md:h-[500px] lg:h-[650px] object-cover object-center block"
          />
        ))}
      </div>

      {/* Content Removed - Using Image Banners Only */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-end pb-4 sm:pb-8 lg:pb-12">
        {/* If buttons are needed later, they can be placed here at the bottom */}
      </div>
    </section>
  );
}

export default HeroSection;
