// src/components/Footer.jsx
const services = ['Turnkey Automation', 'Packaging Lines', 'Process Engineering', 'PLC & SCADA Integration', 'Plant Optimization']
const industries = ['Food Processing', 'Pharmaceutical', 'Beverage', 'Cosmetics', 'FMCG Manufacturing']
const companyLinks = ['About Us', 'Our Journey', 'Projects', 'Careers', 'Contact']

function Footer() {
  return (
    <footer className="bg-[#07182f] py-14 text-slate-200">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <h3 className="text-xl font-bold text-white">Salvin Industries</h3>
          <p className="mt-4 text-sm leading-relaxed text-slate-300">Leading industrial automation and turnkey solution provider delivering precision-built machinery ecosystems for global manufacturers.</p>
          <p className="mt-4 text-sm text-slate-300">Ahmedabad, Gujarat, India<br />+91 98765 43210<br />info@salvinindustries.com</p>
        </div>
        <div>
          <h4 className="text-lg font-semibold text-white">Services</h4>
          <ul className="mt-4 space-y-2 text-sm text-slate-300">{services.map((service) => <li key={service}>{service}</li>)}</ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold text-white">Industries</h4>
          <ul className="mt-4 space-y-2 text-sm text-slate-300">{industries.map((industry) => <li key={industry}>{industry}</li>)}</ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold text-white">Company</h4>
          <ul className="mt-4 space-y-2 text-sm text-slate-300">{companyLinks.map((link) => <li key={link}>{link}</li>)}</ul>
        </div>
      </div>
      <div className="mx-auto mt-10 w-full max-w-7xl border-t border-slate-700/80 px-4 pt-6 text-center text-xs text-slate-400 sm:px-6 lg:px-8">© {new Date().getFullYear()} Salvin Industries. All rights reserved.</div>
    </footer>
  )
}

export default Footer
