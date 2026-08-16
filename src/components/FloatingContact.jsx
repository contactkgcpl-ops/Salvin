import React from "react";
import { Phone } from "lucide-react";

const FloatingContact = () => {
  return (
    <div className="fixed left-0 top-1/2 -translate-y-1/2 z-50 flex flex-col shadow-lg rounded-r-3xl overflow-visible">
      {/* Phone Button */}
      <a
        href="tel:+919898727796"
        className="group relative flex items-center justify-center w-10 h-10 bg-[#334266] rounded-tr-2xl transition-colors hover:bg-[#253250]"
        aria-label="Call Us"
      >
        <Phone className="w-4 h-4 text-white" />
        {/* Tooltip */}
        <div className="absolute left-[110%] ml-2 px-3 py-1.5 bg-[#222] text-white text-sm rounded opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Call
          <div className="absolute top-1/2 -left-1 -translate-y-1/2 border-[5px] border-transparent border-r-[#222]"></div>
        </div>
      </a>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919898727796"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-10 h-10 bg-[#f47c20] rounded-br-2xl transition-colors hover:bg-[#e06b18]"
        aria-label="WhatsApp Us"
      >
        {/* WhatsApp SVG */}
        <svg viewBox="0 0 24 24" className="w-4 h-4 text-white" fill="currentColor">
          <path d="M12.031 21.992c-1.892 0-3.74-.509-5.361-1.474l-.384-.227-3.987 1.045 1.066-3.886-.25-.397A9.972 9.972 0 0 1 1.583 12C1.583 6.486 6.071 2 11.586 2c2.673 0 5.184 1.041 7.073 2.932 1.89 1.89 2.93 4.402 2.93 7.075 0 5.514-4.488 10-10.003 10l-.555-.015zM7.18 19.166l.338.2c1.353.803 2.903 1.226 4.513 1.226 4.743 0 8.604-3.86 8.604-8.604 0-2.298-.895-4.46-2.518-6.084A8.544 8.544 0 0 0 12.03 3.385c-4.742 0-8.603 3.86-8.603 8.603 0 1.696.452 3.327 1.309 4.767l.22.37-1.127 4.108 4.204-1.101.147.034z"/>
          <path d="M17.151 14.86c-.273-.137-1.616-.798-1.867-.889-.25-.091-.433-.137-.615.137-.183.274-.705.889-.865 1.071-.16.183-.32.206-.593.069-.273-.137-1.152-.425-2.195-1.353-.811-.722-1.358-1.615-1.518-1.889-.16-.274-.017-.423.12-.56.123-.122.273-.32.41-.48.136-.16.182-.274.273-.457.091-.183.045-.342-.023-.48-.068-.137-.615-1.484-.842-2.032-.222-.534-.448-.462-.615-.47-.16-.009-.342-.01-.525-.01-.182 0-.479.069-.73.343-.25.274-.957.936-.957 2.282 0 1.347.98 2.65 1.117 2.833.136.183 1.932 2.949 4.678 4.135 2.146.927 2.923.943 3.974.793 1.135-.162 3.424-1.4 3.903-2.753.479-1.354.479-2.513.336-2.754-.143-.241-.525-.378-.798-.515z"/>
        </svg>
        {/* Tooltip */}
        <div className="absolute left-[110%] ml-2 px-3 py-1.5 bg-[#222] text-white text-sm rounded opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap">
          WhatsApp
          <div className="absolute top-1/2 -left-1 -translate-y-1/2 border-[5px] border-transparent border-r-[#222]"></div>
        </div>
      </a>
    </div>
  );
};

export default FloatingContact;
