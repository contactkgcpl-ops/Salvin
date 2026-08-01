import { useState, useMemo, useEffect, useRef } from 'react'
import { Search, ChevronLeft, ChevronRight } from 'lucide-react'
import BrochureCard from './BrochureCard'
import { brochureProjects } from '../data/brochureCatalog'

const CATEGORIES = [
  { name: 'All', keywords: [] },
  { name: 'Snacks & Namkeen', keywords: ['snack', 'namkeen', 'kurkure', 'puff', 'wafer', 'chip', 'extruded', 'mamra', 'popcorn', 'roasted nut', 'pauva', 'cashew', 'nut'] },
  { name: 'Dairy & Milk', keywords: ['dairy', 'milk', 'buttermilk', 'paneer', 'curd', 'cheese', 'ghee', '(?<!peanut\\s)butter', 'yogurt', 'lassi', 'ice cream', 'cream'] },
  { name: 'Spices & Condiments', keywords: ['spice', 'masala', 'chilli', 'turmeric', 'coriander', 'ginger', 'garlic', 'pepper', 'mayonnaise', 'sauce', 'ketchup', 'pickle', 'paste', 'peanut butter'] },
  { name: 'Beverages & Liquids', keywords: ['beverage', 'juice', 'drink', 'water', 'syrup', 'liquid', 'coffee', 'tea', 'honey', 'glucose'] },
  { name: 'Bakery & Sweets', keywords: ['bakery', 'biscuit', 'cake', 'chocolate', 'toffee', 'cookie', 'bread', 'jelly', 'chikki', 'brittle', 'cocoa'] },
  { name: 'Fruits & Veg', keywords: ['fruit', 'vegetable', 'tomato', 'potato', 'jackfruit', 'onion', 'pulp', 'puree', 'dehydrated', 'dates', 'beetroot', 'banana', 'frozen'] },
  { name: 'Flour & Milling', keywords: ['flour', 'wheat', 'atta', 'besan', 'corn', 'rice', 'oat', 'grain', 'mill'] },
  { name: 'Ready-To-Eat', keywords: ['noodle', 'pasta', 'mix'] },
  { name: 'Health & Nutrition', keywords: ['protein', 'nutrition', 'ors', 'bar'] },
  { name: 'Edible Oils', keywords: ['oil', 'seed', 'cleaning', 'sorting'] },
  { name: 'Automation & Specialty', keywords: ['automation', 'petroleum', 'glucose'] }
]

export default function ProjectsSection() {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('All')
  const [currentPage, setCurrentPage] = useState(1)
  const gridRef = useRef(null)
  const ITEMS_PER_PAGE = 15

  const filteredProjects = useMemo(() => {
    return brochureProjects.filter(p => {
      // 1. Check Search Query
      const lowerQuery = searchQuery.toLowerCase().trim()
      let matchesSearch = true
      
      if (lowerQuery) {
        const genericWords = ['plant', 'system', 'machine', 'line', 'processing', 'manufacturing', 'fully', 'automatic', 'automated', 'turnkey', 'making']
        const queryWords = lowerQuery.split(/\s+/).filter(word => !genericWords.includes(word) && word.length > 0)
        
        // If they only typed generic words (like "processing plant"), use those. Otherwise use the filtered meaningful words.
        const wordsToSearch = queryWords.length > 0 ? queryWords : lowerQuery.split(/\s+/).filter(w => w.length > 0)
        const combinedText = `${p.title} ${p.descriptionLines.join(' ')}`.toLowerCase()
        
        // Match if ALL meaningful words are found anywhere in the text
        matchesSearch = wordsToSearch.every(word => combinedText.includes(word))
      }

      // 2. Check Category
      let matchesCategory = true
      if (activeCategory !== 'All') {
        const cat = CATEGORIES.find(c => c.name === activeCategory)
        if (cat) {
          // ONLY search the title to prevent false positives from descriptions (like "syrup" in Chikki plant)
          const contentToSearch = p.title.toLowerCase()
          matchesCategory = cat.keywords.some(kw => {
            const regex = new RegExp(`\\b${kw}(s|es)?\\b`, 'i')
            return regex.test(contentToSearch)
          })
        }
      }

      return matchesSearch && matchesCategory
    })
  }, [searchQuery, activeCategory])

  const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE)
  const currentProjects = filteredProjects.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  )

  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1)
  }, [searchQuery, activeCategory])

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage)
    if (gridRef.current) {
      gridRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const getVisiblePages = () => {
    let start = Math.max(1, currentPage - 2)
    let end = Math.min(totalPages, currentPage + 2)
    
    if (end - start < 4) {
      if (start === 1) {
        end = Math.min(totalPages, 5)
      } else if (end === totalPages) {
        start = Math.max(1, totalPages - 4)
      }
    }
    
    const pages = []
    for (let i = start; i <= end; i++) {
      pages.push(i)
    }
    return pages
  }

  return (
    <section id="brochures" className="border-t border-slate-100 bg-[#f8fafc] py-10 lg:py-16">
      <div className="mx-auto w-full max-w-[1400px] px-6 lg:px-12">
        <div className="mb-10 flex flex-col items-center text-center lg:mb-12">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#f47c20]/10 px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.25em] text-[#f47c20] ring-1 ring-inset ring-[#f47c20]/20">
            <span className="h-1.5 w-1.5 rounded-full bg-[#f47c20] animate-pulse" aria-hidden />
            Project Portfolio
          </span>
          <h2 className="mt-6 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Turnkey <span className="text-[#f47c20]">Solutions</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-slate-600 text-center">
            With a <strong>Salvin Turnkey Project</strong>, we build a fully automated, ready-to-operate processing plant for you<br />
            from scratch, so you can focus entirely on growing your business.
          </p>

          <div className="mt-10 w-full max-w-xl relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-slate-400 group-focus-within:text-[#f47c20] transition-colors" />
            </div>
            <input
              type="text"
              placeholder="Search for a processing plant (e.g., Namkeen, Dairy, Spices)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-full border border-slate-200 bg-white py-4 pl-12 pr-6 text-base text-slate-900 shadow-sm outline-none transition-all placeholder:text-slate-400 focus:border-[#f47c20] focus:ring-4 focus:ring-[#f47c20]/10 hover:border-slate-300"
            />
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 max-w-4xl">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.name}
                onClick={() => setActiveCategory(cat.name)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-200 ${activeCategory === cat.name
                    ? 'bg-[#f47c20] text-white shadow-md'
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-[#f47c20] hover:text-[#f47c20]'
                  }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        <div ref={gridRef} className="scroll-mt-32">
          <ul className="turnkey-projects-grid">
            {currentProjects.length > 0 ? currentProjects.map((project) => (
            <li key={project.id} className="flex list-none">
              <BrochureCard
                title={project.title}
                descriptionLines={project.descriptionLines}
                imageSrc={project.imageSrc}
                brochureHref={project.brochureHref}
                brochureDownloadName={project.brochureDownloadName}
                hasBrochure={project.hasBrochure}
                detailsPath={project.detailsPath}
              />
            </li>
          )) : (
            <div className="col-span-full py-16 text-center">
              <p className="text-xl text-slate-500 font-medium">No projects found matching your criteria</p>
              <button
                onClick={() => {
                  setSearchQuery('')
                  setActiveCategory('All')
                }}
                className="mt-4 text-[#f47c20] hover:text-[#e06b12] font-semibold transition-colors"
              >
                Clear all filters
              </button>
            </div>
            )}
          </ul>
        </div>

        {totalPages > 1 && (
          <div className="mt-12 flex items-center justify-center gap-2 sm:gap-4">
            <button
              onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="flex items-center justify-center gap-2 h-10 px-4 sm:h-11 sm:px-5 rounded-full border border-slate-200 bg-white text-sm font-semibold text-slate-600 transition-all hover:bg-slate-50 hover:text-[#f47c20] hover:border-[#f47c20]/50 disabled:opacity-50 disabled:pointer-events-none shadow-sm"
            >
              <ChevronLeft className="h-4 w-4" /> <span className="hidden sm:inline">Previous</span>
            </button>
            
            <div className="flex items-center gap-1.5 sm:gap-2">
              {getVisiblePages().map(page => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`flex items-center justify-center h-10 w-10 sm:h-11 sm:w-11 rounded-full text-sm font-bold transition-all shadow-sm ${
                    currentPage === page 
                      ? 'bg-[#f47c20] text-white border-transparent shadow-[#f47c20]/20 scale-110'
                      : 'bg-white text-slate-600 border border-slate-200 hover:border-[#f47c20]/50 hover:text-[#f47c20] hover:bg-slate-50'
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>

            <button
              onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className="flex items-center justify-center gap-2 h-10 px-4 sm:h-11 sm:px-5 rounded-full border border-slate-200 bg-white text-sm font-semibold text-slate-600 transition-all hover:bg-slate-50 hover:text-[#f47c20] hover:border-[#f47c20]/50 disabled:opacity-50 disabled:pointer-events-none shadow-sm"
            >
              <span className="hidden sm:inline">Next</span> <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
