function BrochureCard({ title, descriptionLines, imageSrc, brochureHref, brochureDownloadName, hasBrochure }) {
  const blurb = `${descriptionLines[0]} ${descriptionLines[1]}`

  return (
    <article
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-slate-200"
    >
      {/* Decorative top bar */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1.5 origin-left scale-x-0 bg-gradient-to-r from-[#f47c20] to-[#dc6e19] transition-transform duration-500 ease-out group-hover:scale-x-100" />

      {/* Image Container: object-contain with padding to avoid cropping */}
      <div className="relative flex aspect-[4/3] w-full items-center justify-center overflow-hidden bg-[#f8fafc] p-6 sm:p-8">
        <img
          src={imageSrc}
          alt={title}
          className="max-h-full max-w-full object-contain transition-transform duration-700 ease-out group-hover:scale-110"
          loading="lazy"
          decoding="async"
        />
        {/* Subtle overlay on hover */}
        <div className="pointer-events-none absolute inset-0 bg-slate-900/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </div>

      {/* Content Area: flex-1 ensures equal height distribution */}
      <div className="flex flex-1 flex-col p-6 sm:p-8">
        <div className="flex-1">
          <h3 className="text-lg font-extrabold tracking-tight text-slate-900 sm:text-xl">
            {title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-slate-600 line-clamp-3">
            {blurb}
          </p>
        </div>

        <div className="mt-8">
          {hasBrochure ? (
            <a
              href={brochureHref}
              download={brochureDownloadName}
              className="inline-flex w-full items-center justify-center gap-3 rounded-xl bg-[#f47c20] px-6 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-lg shadow-[#f47c20]/20 transition-all duration-300 hover:bg-[#dc6e19] hover:shadow-xl hover:shadow-[#f47c20]/30 active:scale-[0.97]"
            >
              <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Download Brochure
            </a>
          ) : (
            <a
              href="/contact"
              className="inline-flex w-full items-center justify-center gap-3 rounded-xl border-2 border-slate-200 bg-white px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-slate-700 transition-all duration-300 hover:border-[#f47c20]/50 hover:bg-slate-50 hover:text-[#f47c20] active:scale-[0.97]"
            >
              Request Information
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

export default BrochureCard
