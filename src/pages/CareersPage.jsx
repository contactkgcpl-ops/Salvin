import React, { useState, useEffect } from "react";
import {
  X,
  ExternalLink,
  Send,
  CheckCircle2
} from "lucide-react";

// High-resolution professional team hero image URL
const heroImage = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1920&q=80";

// Official Google Form link for Salvin Industries Recruitment Drive
const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSf1phQaTHk9XxqrAPpq39A7DgDYowobQu7leXb64pyt8mb5ow/viewform?usp=header";

const jobListings = [
  {
    id: "assistant-md",
    title: "Assistant to Managing Director",
    type: "Full-Time",
    summary: "Work directly alongside executive leadership to coordinate strategic business operations, high-level client relations, and inter-departmental execution.",
    responsibilities: [
      "Assist the Managing Director in daily operational tracking and priority task execution.",
      "Draft strategic business proposals, meeting summaries, and performance reports.",
      "Coordinate executive communication with clients, vendor partners, and project teams."
    ],
    requirements: [
      "Degree in Business Administration, Management, or Engineering.",
      "Exceptional English communication and presentation skills.",
      "Proficiency in MS Office (Excel, Word, PowerPoint)."
    ]
  },
  {
    id: "purchase-executive",
    title: "Purchase Executive",
    type: "Full-Time",
    summary: "Manage industrial equipment procurement, raw material sourcing, vendor negotiations, and purchase orders for turnkey manufacturing projects.",
    responsibilities: [
      "Source and evaluate vendors for food machinery, stainless steel components, and pneumatic parts.",
      "Negotiate pricing, quality standards, and delivery schedules with equipment suppliers.",
      "Issue Purchase Orders (POs) and track material inwarding with project teams."
    ],
    requirements: [
      "Degree or Diploma in Engineering or Commerce / Supply Chain.",
      "Good negotiation skills and familiarity with ERP/Excel procurement workflows.",
      "Strong technical aptitude for industrial machinery specs."
    ]
  },
  {
    id: "project-coordinator",
    title: "Project Coordinator",
    type: "Full-Time",
    summary: "Oversee and coordinate complete turnkey plant projects from technical design approval through fabrication and final site commissioning.",
    responsibilities: [
      "Act as technical point of contact between clients, design engineers, and site engineers.",
      "Maintain project schedules, fabrication progress reports, and milestone tracking.",
      "Coordinate factory acceptance testing (FAT) and dispatch logistics."
    ],
    requirements: [
      "B.E. / B.Tech / Diploma in Mechanical, Electrical, Chemical, or Industrial Engineering.",
      "Strong understanding of turnkey manufacturing project life cycles.",
      "Excellent multitasking and communication abilities."
    ]
  },
  {
    id: "back-office-executive",
    title: "Back Office Executive",
    type: "Full-Time",
    summary: "Handle core administrative workflows, client query routing, documentation management, and internal operational coordination.",
    responsibilities: [
      "Manage incoming sales & technical inquiries and assign leads into CRM.",
      "Prepare formal commercial quotations, proforma invoices, and business correspondence.",
      "Maintain centralized digital archives, project files, and office records."
    ],
    requirements: [
      "Bachelor's degree in any discipline (B.Com, BBA, B.Sc, BA, BCA).",
      "Good command over English, Gujarati, and Hindi.",
      "Proficiency in MS Excel, Word, and email management."
    ]
  },
  {
    id: "data-analyst",
    title: "Data Analyst",
    type: "Full-Time",
    summary: "Turn complex industrial operational data, sales metrics, supply chain analytics, and plant efficiency metrics into intuitive business dashboards.",
    responsibilities: [
      "Analyze operational data across machinery manufacturing and sales funnels.",
      "Build and maintain interactive analytics dashboards (Excel / Power BI / Python).",
      "Perform trend analysis, cost variance modeling, and inventory forecasting."
    ],
    requirements: [
      "Degree in Data Science, Statistics, Computer Science, or Engineering.",
      "Strong skills in SQL, Excel (Advanced), and Data Visualization.",
      "Structured problem-solving approach and analytical mindset."
    ]
  },
  {
    id: "software-developer",
    title: "Software Developer",
    type: "Full-Time",
    summary: "Develop and maintain next-generation web applications, internal automation software, AI integration modules, and client platforms.",
    responsibilities: [
      "Build modern, responsive web user interfaces using React.js and modern CSS.",
      "Develop and integrate REST APIs, backend services, and internal automation tools.",
      "Maintain high code quality and optimize application performance."
    ],
    requirements: [
      "B.E. / B.Tech in CS / IT, BCA / MCA, or equivalent software experience.",
      "Proficiency in JavaScript / TypeScript, React.js, and HTML/CSS.",
      "Eagerness to build real-world industrial software applications."
    ]
  }
];

export default function CareersPage() {
  const [activeJobModal, setActiveJobModal] = useState(null);

  // Prevent background body scroll when modal is open
  useEffect(() => {
    if (activeJobModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeJobModal]);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 pb-16">
      {/* FULL TOP HERO BANNER */}
      <div className="relative w-full min-h-[320px] pt-28 pb-14 overflow-hidden bg-slate-950 mb-8 flex items-center justify-center">
        <img
          src={heroImage}
          alt="Careers at Salvin Industries"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-40 filter brightness-90"
        />
        {/* Dark overlay ensuring top navbar and hero titles stand out clearly */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/60 to-slate-950/90" />

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight mb-3 drop-shadow-md">
            Careers at Salvin Industries
          </h1>

          <p className="text-slate-200 text-xs sm:text-base max-w-2xl mx-auto font-medium leading-relaxed drop-shadow-xs">
            Join our team of engineers, operations experts, and technology innovators. Explore current openings below.
          </p>
        </div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-2 sm:px-4 md:px-6">
        {/* LIGHT BLUE ELEGANT BANNER (Replaced Black) */}
        <div className="bg-blue-50 border border-blue-200 text-blue-950 rounded-xl p-4 sm:p-5 shadow-xs mb-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-base sm:text-lg font-extrabold text-blue-950 font-sans">Online Interview Drive is Live</h3>
            <p className="text-xs sm:text-sm text-blue-800 mt-0.5 font-sans font-medium">
              Direct online interviews for candidate selection. 1-click easy apply.
            </p>
          </div>
          <a
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-5 py-2.5 rounded-lg transition text-xs sm:text-sm flex-shrink-0 shadow-xs"
          >
            <span>Apply Online (Google Form)</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* 1 ROW = 1 JOB POSITION LISTING */}
        <div className="space-y-3">
          {jobListings.map((job) => (
            <div
              key={job.id}
              className="bg-white rounded-xl border border-slate-200/90 p-4 sm:p-5 shadow-xs hover:border-blue-400 transition flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
            >
              <div className="flex-1 min-w-0">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug mb-1 font-sans">
                  {job.title}
                </h3>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-sans">
                  {job.summary}
                </p>
              </div>

              {/* APPLY NOW BUTTON - Light Blue Theme */}
              <div className="w-full md:w-auto flex-shrink-0 pt-2 md:pt-0">
                <button
                  onClick={() => setActiveJobModal(job)}
                  className="w-full md:w-auto py-2.5 px-6 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs sm:text-sm font-bold transition flex items-center justify-center gap-2 shadow-xs font-sans"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Apply Now</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* APPLICATION MODAL - Light Header */}
      {activeJobModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 bg-slate-950/60 backdrop-blur-xs">
          <div
            className="bg-white w-full max-w-lg rounded-xl shadow-2xl border border-slate-200 overflow-hidden relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Light Header */}
            <div className="p-5 bg-slate-100 border-b border-slate-200 text-slate-900 relative">
              <button
                onClick={() => setActiveJobModal(null)}
                className="absolute top-4 right-4 p-1.5 rounded-full bg-slate-200 hover:bg-slate-300 text-slate-700 transition"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>

              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-sans">{activeJobModal.title}</h2>
            </div>

            {/* Modal Content */}
            <div className="p-5 space-y-4 max-h-[60vh] overflow-y-auto">
              <div>
                <h4 className="text-xs font-bold text-slate-500 uppercase mb-1 font-sans">Overview</h4>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-sans">{activeJobModal.summary}</p>
              </div>

              <div>
                <h4 className="text-xs font-bold text-slate-500 uppercase mb-2 font-sans">Key Responsibilities</h4>
                <ul className="space-y-1.5">
                  {activeJobModal.responsibilities.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-700 font-sans">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-bold text-slate-500 uppercase mb-2 font-sans">Requirements</h4>
                <ul className="space-y-1.5">
                  {activeJobModal.requirements.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-700 font-sans">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-1.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Modal Footer / 1-Click Apply CTA */}
            <div className="p-4 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs text-slate-500 font-medium">Official Google Form</span>
              <a
                href={GOOGLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-2.5 rounded-lg transition text-xs sm:text-sm shadow-xs font-sans"
              >
                <span>Open Google Form</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
