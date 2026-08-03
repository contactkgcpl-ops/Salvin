import { NavLink } from 'react-router-dom'

function CTASection() {
  return (
    <section className="bg-[#0a2346] py-16 sm:py-20">
      <div className="mx-auto w-full max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-balance text-2xl font-extrabold text-white sm:text-3xl lg:text-4xl">Are You Ready To Start Your Factory?</h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-200 sm:text-lg">
          Contact Salvin Industries today to get a complete turnkey solution, machinery details, and a quick quotation.
        </p>
        <NavLink
          to="/contact"
          className="mt-8 inline-flex rounded-xl bg-[#f47c20] px-6 py-3 text-sm font-bold uppercase tracking-[0.08em] text-white transition hover:bg-[#dc6e19] sm:px-8 sm:text-base"
        >
          Contact Us
        </NavLink>
      </div>
    </section>
  )
}

export default CTASection
