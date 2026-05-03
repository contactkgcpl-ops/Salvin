function BrochureCard({ title, descriptionLines, imageSrc, brochureHref, brochureDownloadName }) {
  const blurb = `${descriptionLines[0]} ${descriptionLines[1]}`

  return (
    <article
      className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-slate-200/90 bg-gradient-to-b from-slate-50 to-white shadow-md shadow-slate-900/5 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#f47c20]/35 hover:shadow-xl hover:shadow-slate-900/10"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-[#f47c20] to-[#dc6e19] transition-transform duration-300 ease-out group-hover:scale-x-100" />

      <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-200">
        <img
          src={imageSrc}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.06]"
          loading="lazy"
          decoding="async"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/45 via-transparent to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-90" />
      </div>

      <div className="flex flex-1 flex-col gap-3 p-4 pt-5 sm:p-5">
        <h3 className="text-base font-bold tracking-tight text-slate-900 sm:text-lg">
          {title}
        </h3>
        <p className="flex-1 text-sm leading-relaxed text-slate-600 line-clamp-2">{blurb}</p>

        <a
          href={brochureHref}
          download={brochureDownloadName}
          className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#f47c20] px-4 py-2.5 text-xs font-bold uppercase tracking-widest text-white shadow-sm transition-colors duration-200 hover:bg-[#dc6e19] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f47c20] active:scale-[0.98]"
        >
          <svg className="h-4 w-4 shrink-0 opacity-90" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Download brochure
        </a>
      </div>
    </article>
  )
}

export default BrochureCard
