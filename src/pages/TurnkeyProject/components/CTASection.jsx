// src/components/CTASection.jsx
function CTASection() {
  return (
    <section className="bg-[#0a2346] py-16 sm:py-20">
      <div className="mx-auto w-full max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Let&apos;s Build Your Next High-Performance Production Line</h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-slate-200">Partner with our turnkey engineering specialists for scalable automation, faster throughput, and measurable ROI.</p>
        <button type="button" className="mt-8 rounded-xl bg-[#f47c20] px-8 py-3 text-base font-bold uppercase tracking-[0.08em] text-white transition hover:bg-[#dc6e19]">Contact Us</button>
      </div>
    </section>
  )
}

export default CTASection
