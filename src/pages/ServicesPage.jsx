import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
const consultantHero = "/assets/core/heroes/salvinhero2.webp";
const foodPlant = "/assets/core/icons/food-processing-plant.webp";
const turnkeyProj = "/assets/core/heroes/turkey_proj.webp";
// Imported local advisory images
const adv1 = "/assets/company/advisory/tech_advisory.webp";
const adv2 = "/assets/company/advisory/engineering.webp";
const adv3 = "/assets/company/advisory/marketing.webp";
const adv4 = "/assets/company/advisory/merger.webp";
const adv5 = "/assets/company/advisory/regulatory.webp";
const customMachineImg = "/assets/core/icons/turnkey_custom_machine.webp";
const largePlantImg = "/assets/core/icons/large_industrial_plant.webp";
const equipmentCollageImg = "/assets/core/icons/equipment_collage.webp";
const expertiseFactoryImg = "/assets/core/icons/expertise_factory.webp";

const slides = [
  {
    image: consultantHero,
    title: "Top Food Processing Plant Consultants in India",
    subtitle: "Expert Turnkey Solutions for Food Manufacturing, Factory Layouts & FSSAI Compliance."
  },
  {
    image: foodPlant,
    title: "Complete Food Factory Engineering Services",
    subtitle: "From DPR Preparation to Machinery Selection and 3D Blueprint Layouts for Food Plants."
  },
  {
    image: turnkeyProj,
    title: "End-to-End Turnkey Food Projects",
    subtitle: "Maximize your ROI with our specialized food industry consulting and project management."
  }
];

const advisoryServices = [
  {
    image: adv1,
    title: "Technical Advisory Services",
    description: "The global food supply chain is growing more and more complex. We provide expert advisory on machinery...",
    link: "/contact"
  },
  {
    image: adv2,
    title: "Engineering Services",
    description: "These days food safety has become one of the major concerns for food plants. Our custom factory layouts...",
    link: "/contact"
  },
  {
    image: adv3,
    title: "Marketing Facilitation",
    description: "Our company specializes in providing best marketing insights and competitive positioning for your processed food...",
    link: "/contact"
  },
  {
    image: adv4,
    title: "Merger & Acquisition",
    description: "Salvin Industries provides strategic consulting for food businesses looking to expand, merge, or acquire...",
    link: "/contact"
  },
  {
    image: adv5,
    title: "Regulatory Advisory",
    description: "Food safety incidents and strict regulations require expert guidance. We help navigate FSSAI compliance...",
    link: "/contact"
  }
];

const expertiseFAQs = [
  { question: "What type of industries does Salvin Serve?", answer: "As an expert consultant, we serve a wide range of industries including food & spices, pharmaceuticals, chemicals & APIs, dairy & beverages, FMCG, cosmetics, agriculture, and export-oriented manufacturing." },
  { question: "Do you provide complete factory setup?", answer: "Yes, we offer A to Z complete turnkey solutions. From factory layout design to machine installation and final product trial, we manage the entire project for you." },
  { question: "What kind of factories do you set up?", answer: "We set up a wide range of food processing plants, including snacks, namkeen, beverages, dairy, bakery, spices, and sauces manufacturing units." },
  { question: "Do you offer complete turnkey plant setups or only individual machines?", answer: "We specialize in complete turnkey plant setups, but we also provide individual machines and line upgrades depending on your specific requirements." },
  { question: "What is your typical project delivery timeline?", answer: "A typical project takes 3 to 8 months from planning to final commissioning, depending on the scale and complexity of the factory." },
];

export default function ServicesPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [openFAQIndex, setOpenFAQIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQIndex(openFAQIndex === index ? null : index);
  };

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
              className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-[6000ms] ease-out scale-105"
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
                className={`text-2xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 drop-shadow-2xl transition-all duration-700 delay-300 ${
                  index === currentSlide ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
              >
                {slide.title}
              </h1>
              <p 
                className={`text-base md:text-lg text-gray-200 max-w-3xl drop-shadow-lg transition-all duration-700 delay-500 ${
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
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-800 mb-4">Food Consultant Advisory Services</h2>
          <p className="text-gray-600 max-w-4xl mx-auto text-lg leading-relaxed">
            Salvin Industries is one of the Top food consultants in India and having <span className="font-bold">25+ years of experience</span> in food consultancy services and food processing solutions.
          </p>
        </div>

        {/* 5-Column Grid */}
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

      {/* SEO Content Section */}
      <div className="w-full bg-[#ebf0f6] mt-10">
        <section className="py-16 px-4 max-w-[1200px] mx-auto text-gray-700 space-y-12 text-[15px] leading-relaxed">
          
          <div className="text-center pb-8 mb-4 border-b border-gray-300/60">
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-800 mb-4">
              Complete Food Factory Setup & Consultancy Services
            </h2>
            <p className="text-[17px] text-gray-600 max-w-3xl mx-auto">
              Expert guidance from industry leaders to start, manage, and grow your food processing business.
            </p>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-slate-800 mb-4">Trusted Food Factory Consultants in Ahmedabad</h2>
            <p className="mb-4">Salvin Industries is a leading food consultant in Ahmedabad, India. We help you set up food, beverage, and dairy manufacturing plants from start to finish. Whether you have a new idea or want to grow your existing business, we provide easy and practical solutions to make your food factory a success.</p>
            <p>We don't just give advice—we stay with you at every step. From planning your budget to starting the machines and getting government approvals, we handle it all.</p>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-slate-800 mb-4">Expert Food Plant Setup & Machinery Guidance</h2>
            <p className="mb-4">Starting a food business requires the right machines, perfect recipes, and strict hygiene. Our expert team at Salvin Industries has years of hands-on experience in setting up real factories. We guide you step-by-step so you can start your food processing unit without any confusion or mistakes.</p>
            <p>We make sure your factory is built properly, following all national and international food safety rules, so your business runs smoothly for years.</p>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-slate-800 mb-4">Our Complete Food Consultancy Services</h2>
            <p className="mb-6">We provide all the services you need under one roof to start your factory:</p>
            <div className="space-y-6">
              <div>
                <h3 className="text-[17px] font-semibold text-slate-800 mb-1">Food Processing & Manufacturing Setup</h3>
                <p>We help you select the best machines and set up your production line so you can manufacture high-quality food products easily and at a low cost.</p>
              </div>
              <div>
                <h3 className="text-[17px] font-semibold text-slate-800 mb-1">Project Reports & Budget Planning</h3>
                <p>Before you invest, we make a clear Project Report (DPR) showing exactly how much money is needed, what the costs will be, and how much profit you can make.</p>
              </div>
              <div>
                <h3 className="text-[17px] font-semibold text-slate-800 mb-1">Factory Layout & 3D Design</h3>
                <p>We design the complete map and 3D layout of your factory so that space is used perfectly, machines fit properly, and workers can move around easily.</p>
              </div>
              <div>
                <h3 className="text-[17px] font-semibold text-slate-800 mb-1">FSSAI & Government Approvals</h3>
                <p>We help you get all the required FSSAI licenses, food safety certificates, label checking, and government permissions easily.</p>
              </div>
              <div>
                <h3 className="text-[17px] font-semibold text-slate-800 mb-1">Recipe & Product Development</h3>
                <p>We help you create tasty new food products, improve their shelf-life, and pack them beautifully so they sell fast in the market.</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-slate-800 mb-4">Why Salvin Industries is the Best Food Consultant?</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-[17px] font-semibold text-slate-800 mb-1">25+ Years of Experience</h3>
                <p>We have successfully helped hundreds of food businesses across Ahmedabad, Gujarat, and all over India start their factories.</p>
              </div>
              <div>
                <h3 className="text-[17px] font-semibold text-slate-800 mb-1">Customized Solutions</h3>
                <p>We give advice that fits your exact budget, machine requirements, and product type.</p>
              </div>
              <div>
                <h3 className="text-[17px] font-semibold text-slate-800 mb-1">A to Z Support</h3>
                <p>From buying the right land to pressing the start button on the machines, we are with you at every step.</p>
              </div>
              <div>
                <h3 className="text-[17px] font-semibold text-slate-800 mb-1">Focus on Quality</h3>
                <p>We ensure your factory meets all hygiene and safety rules so your food products are always safe.</p>
              </div>
              <div>
                <h3 className="text-[17px] font-semibold text-slate-800 mb-1">Trusted by Top Brands</h3>
                <p>Many successful food companies trust us for their factory setup and expansion.</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-slate-800 mb-4">Food & Beverage Industries We Serve</h2>
            <p className="mb-4">We help set up factories for a wide range of food products, including:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Snacks, Namkeen, and Fryums</li>
              <li>Beverage, Juice, and Dairy Plants</li>
              <li>Bakery and Biscuit Factories</li>
              <li>Spices, Masala, and Ready-to-Eat Foods</li>
              <li>Tomato Ketchup, Mayonnaise, and Sauces</li>
            </ul>
            <p>Whether you are starting small or building a massive industrial plant, we are here to help.</p>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-slate-800 mb-4">Your Reliable Food Consultancy Partner in Gujarat</h2>
            <p className="mb-4">Choosing the right partner is the most important step for your food business. At Salvin Industries, we save your time and money by giving you the correct advice right from day one, so you don't make expensive mistakes.</p>
            <p>Whether you need help with machines, licenses, or full factory setup, our experts are ready to guide you.</p>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-slate-800 mb-4">Start Your Food Project Today</h2>
            <p>Ready to start your own food factory? Salvin Industries is here to make it easy for you. Contact us today and let's turn your business dream into reality!</p>
          </div>

        </section>
      </div>

      {/* Personalized Turnkey Solutions Section */}
      <section className="py-16 px-4 max-w-[1200px] mx-auto bg-white text-left">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Content Side */}
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-800 mb-6 leading-tight">
              Complete Factory Setup to Best Fit Your Budget
            </h2>
            
            <div className="space-y-5 text-gray-600 text-lg leading-relaxed">
              <p>
                At Salvin Industries, we build your food factory exactly the way you want it, making sure it fits your budget perfectly. We keep your business ideas totally safe and make sure the food quality is always the best.
              </p>
              <p>
                We help you save money on machines without compromising on quality. From making the factory map to installing the big machines and starting production, our expert team does everything for you. We make sure your factory uses the latest technology so your business runs smoothly and profitably for years to come.
              </p>
            </div>
          </div>

          {/* Image Side */}
          <div className="w-full rounded-lg overflow-hidden border border-gray-100 group cursor-pointer shadow-md hover:shadow-2xl transition-all duration-300">
            <img 
              src={largePlantImg} 
              alt="Salvin Industrial Plant Setup" 
              className="w-full h-auto object-cover max-h-[600px] transition-transform duration-500 group-hover:scale-105"
            />
          </div>

        </div>
      </section>

      {/* Equipment and Containers Section */}
      <div className="w-full bg-[#f8fafc] py-20 border-t border-gray-200">
        <section className="px-4 max-w-[1200px] mx-auto text-gray-700">
          <div className="mb-10 text-center">
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-800 mb-4 leading-tight">
              Advanced Food Processing Equipment & Packaging Machines
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              High-quality, hygienic machinery to automate and scale your food production.
            </p>
          </div>

          <div className="w-full rounded-xl overflow-hidden border border-gray-200 mb-12 shadow-sm">
            <img 
              src={equipmentCollageImg} 
              alt="Salvin Food Processing Equipment and Machinery" 
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="space-y-6 text-[16px] leading-relaxed">
            <p>
              At <strong className="text-gray-900">Salvin Industries</strong>, we provide top-quality food processing equipment and containers made from high-grade materials. Our advanced food packaging machines are devices designed to fully automate the packaging process in your factory, increasing efficiency and reducing labor costs.
            </p>
            <p>
              The hygienic (sanitary) design of our food processing equipment involves the careful selection of appropriate materials. Their smooth surfaces and easy construction prevent food particles from getting trapped, ensuring 100% hygienic processing conditions for your food products. 
            </p>
            <p>
              Our machines facilitate the automation of production lines, simplifying the manufacturing process and significantly increasing your factory's daily output. From large mixing tanks to advanced conveyor belts that are made from materials that are easy to clean and sanitize, we provide everything you need.
            </p>
            <p>
              Whether you are looking to upgrade a single machine or install a completely new automated food processing line, Salvin Industries offers the best equipment solutions to help your business grow safely and profitably.
            </p>
          </div>
        </section>
      </div>

      {/* Expertise Section */}
      <div className="w-full bg-[#fdf5e6]">
        <section className="py-8 px-4 max-w-[850px] mx-auto text-left">
          
          {/* Top Text Content */}
          <div className="mb-6">
            <h2 className="text-xl md:text-2xl font-semibold text-[#110e2d] mb-2 leading-tight tracking-tight">
              Backed by Food Factory<br className="hidden md:block" /> Science & industrial expertise
            </h2>
            <p className="text-gray-900 text-[13px] max-w-[700px] leading-snug font-medium">
              From infrastructure planning to cutting-edge technology integration, we optimize efficiency, ensure seamless scalability, and drive sustainability at every stage, enhancing your food factory with innovation, precision, and industry-leading expertise.
            </p>
          </div>

          {/* Two Column Layout (Uneven to make image smaller) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            
            {/* Left Image (Smaller Width, 1 column) */}
            <div className="w-full md:col-span-1 rounded-lg overflow-hidden shadow-sm border border-gray-200">
              <img 
                src={expertiseFactoryImg} 
                alt="Salvin Industrial Expertise" 
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
                      <span className="font-bold text-[13px] text-[#110e2d] hover:text-amber-600 transition-colors">{faq.question}</span>
                      <span className="bg-[#fbbf24] text-black w-5 h-5 flex items-center justify-center font-bold text-sm rounded-[2px] transition-transform group-hover:scale-110 shadow-sm leading-none flex-shrink-0">
                        {openFAQIndex === idx ? '-' : '+'}
                      </span>
                    </div>
                    {/* FAQ Answer */}
                    <div 
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        openFAQIndex === idx ? 'max-h-40 pb-2 opacity-100' : 'max-h-0 opacity-0'
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
