import { useState, useMemo, useEffect, useRef } from 'react'
import { Search, ChevronDown, ChevronUp, X, RotateCcw } from 'lucide-react'
import BrochureCard from './BrochureCard'
import { brochureProjects } from '../data/brochureCatalog'

const CATEGORIES = [
  {
    id: 'spices',
    name: 'Spices',
    check: (t) => /(spice|masala|chilli|turmeric|coriander|ginger|garlic|pepper|pickle|curry)/i.test(t)
  },
  {
    id: 'food',
    name: 'Food',
    check: (t) => /(food|flour|atta|besan|rice|wheat|milling|tomato|ketchup|puree|paste|mayonnaise|pizza sauce|dates|jackfruit|beetroot|honey|fruit|vegetable|dehydrated|frozen|instant mix|chapati|panipuri|cashew|onion|potato|glucose|guava|mango|sugar|milk|dairy|curd|paneer|cheese|ghee|ice cream|drink|water|beverage|juice|yogurt|lassi|industry 4\.0|(?!body\s)butter|(?<!face\s|moisturizing\s|ointment\s&\s)cream)/i.test(t) && !/face cream|moisturizing cream|ointment & cream|body butter|petroleum/i.test(t)
  },
  {
    id: 'pharmaceutical',
    name: 'Pharmaceutical',
    check: (t) => /(pharmaceutical|pharma|tablet|capsule|oral|suspension|ointment|injection|drop|blister|ors|nutrition powder|protein powder|syrup|tea|coffee)/i.test(t)
  },
  {
    id: 'api',
    name: 'API',
    check: (t) => /(api)/i.test(t)
  },
  {
    id: 'cosmetics',
    name: 'Cosmetics',
    check: (t) => /(cosmetic|face wash|shampoo|hair oil|body lotion|face cream|moisturizing cream|sunscreen|hair conditioner|hair serum|baby lotion|baby shampoo|body butter|facial serum|body wash|hand wash|liquid soap|sanitizer|surface cleaner|detergent|mouthwash|petroleum)/i.test(t)
  },
  {
    id: 'oil',
    name: 'Oil',
    check: (t) => /(oil mill|edible oil|seed cleaning)/i.test(t)
  },
  {
    id: 'confectionery',
    name: 'Confectionery',
    check: (t) => /(biscuit|cookie|bread|cake|wafer|chocolate|toffee|jelly manufacturing|chikki|brittle)/i.test(t)
  },
  {
    id: 'snacks',
    name: 'Snacks',
    check: (t) => /(snack|namkeen|kurkure|puff|popcorn|noodle|pasta|mamra|pauva|oat|millet|roasted nut|banana chip|protein bar)/i.test(t)
  }
]

export default function ProjectsSection() {
  const [searchQuery, setSearchQuery] = useState(() => {
    if (typeof window !== 'undefined' && typeof window.sessionStorage !== 'undefined') {
      return window.sessionStorage.getItem('projectsSearch') || ''
    }
    return ''
  })
  
  const [activeCategory, setActiveCategory] = useState(() => {
    if (typeof window !== 'undefined' && typeof window.sessionStorage !== 'undefined') {
      return window.sessionStorage.getItem('projectsCategory') || 'All'
    }
    return 'All'
  })

  const [selectedProjectTitle, setSelectedProjectTitle] = useState(() => {
    if (typeof window !== 'undefined' && typeof window.sessionStorage !== 'undefined') {
      return window.sessionStorage.getItem('selectedProjectTitle') || null
    }
    return null
  })

  const [expandedCategories, setExpandedCategories] = useState(() => {
    if (typeof window !== 'undefined' && typeof window.sessionStorage !== 'undefined') {
      const savedCat = window.sessionStorage.getItem('projectsCategory')
      if (savedCat && savedCat !== 'All') {
        return { [savedCat.toLowerCase()]: true }
      }
    }
    return { spices: true }
  })

  const [mobileFilterOpen, setMobileFilterOpen] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined' && typeof window.sessionStorage !== 'undefined') {
      window.sessionStorage.setItem('projectsSearch', searchQuery)
      window.sessionStorage.setItem('projectsCategory', activeCategory)
      if (selectedProjectTitle) {
        window.sessionStorage.setItem('selectedProjectTitle', selectedProjectTitle)
      } else {
        window.sessionStorage.removeItem('selectedProjectTitle')
      }
    }
  }, [searchQuery, activeCategory, selectedProjectTitle])

  const gridRef = useRef(null)

  // Pre-calculate projects by category
  const categoryProjectsMap = useMemo(() => {
    const map = {}
    CATEGORIES.forEach(cat => {
      map[cat.id] = brochureProjects.filter(p => cat.check(p.title))
    })
    return map
  }, [])

  // Filter projects according to Search, Category, and Selected Project
  const filteredProjects = useMemo(() => {
    return brochureProjects.filter(p => {
      // 1. Check Search Query
      const lowerQuery = searchQuery.toLowerCase().trim()
      let matchesSearch = true
      
      if (lowerQuery) {
        const genericWords = ['plant', 'system', 'machine', 'line', 'processing', 'manufacturing', 'fully', 'automatic', 'automated', 'turnkey', 'making']
        const queryWords = lowerQuery.split(/\s+/).filter(word => !genericWords.includes(word) && word.length > 0)
        const wordsToSearch = queryWords.length > 0 ? queryWords : lowerQuery.split(/\s+/).filter(w => w.length > 0)
        const combinedText = `${p.title} ${p.descriptionLines.join(' ')}`.toLowerCase()
        matchesSearch = wordsToSearch.every(word => combinedText.includes(word))
      }

      // 2. Check Specific Selected Project
      let matchesSelectedProject = true
      if (selectedProjectTitle) {
        matchesSelectedProject = p.title.toLowerCase() === selectedProjectTitle.toLowerCase()
      }

      // 3. Check Category
      let matchesCategory = true
      if (activeCategory !== 'All') {
        const cat = CATEGORIES.find(c => c.name.toLowerCase() === activeCategory.toLowerCase())
        if (cat) {
          matchesCategory = cat.check(p.title)
        }
      }

      return matchesSearch && matchesCategory && matchesSelectedProject
    })
  }, [searchQuery, activeCategory, selectedProjectTitle])

  const toggleCategoryAccordion = (catId, e) => {
    e.stopPropagation()
    setExpandedCategories(prev => ({
      ...prev,
      [catId]: !prev[catId]
    }))
  }

  const handleCategorySelect = (catName, catId) => {
    setActiveCategory(catName)
    setSelectedProjectTitle(null)
    setExpandedCategories(prev => ({
      ...prev,
      [catId]: true
    }))
  }

  const handleProjectSelect = (projectTitle, catName, catId) => {
    setActiveCategory(catName)
    setSelectedProjectTitle(projectTitle)
    setExpandedCategories(prev => ({
      ...prev,
      [catId]: true
    }))
  }

  const handleClearFilters = () => {
    setSearchQuery('')
    setActiveCategory('All')
    setSelectedProjectTitle(null)
  }

  return (
    <section id="brochures" className="border-t border-slate-200 bg-[#f8fafc] py-6 sm:py-8">
      <div className="w-full px-3 sm:px-6 lg:px-8 max-w-[1720px] mx-auto">
        
        {/* Main 2-Column Sidebar + Content Grid */}
        <div className="flex flex-col lg:flex-row gap-5 items-start">
          
          {/* Left Sidebar (Clean Accordion Categories) */}
          <aside
            className={`w-full lg:w-72 xl:w-80 flex-shrink-0 bg-white rounded-xl border border-slate-200 shadow-sm p-4 lg:sticky lg:top-24 transition-all ${
              mobileFilterOpen ? 'block' : 'hidden lg:block'
            }`}
          >
            <div className="pb-2.5 mb-2.5 border-b border-slate-100 flex items-center justify-between">
              <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider">Category Filter</h3>
              {(activeCategory !== 'All' || selectedProjectTitle || searchQuery) && (
                <button onClick={handleClearFilters} className="text-xs text-[#f47c20] hover:underline font-medium">
                  Reset
                </button>
              )}
            </div>

            <div className="space-y-1 max-h-[calc(100vh-180px)] overflow-y-auto pr-1">
              
              {/* All Projects Option */}
              <button
                onClick={() => {
                  setActiveCategory('All')
                  setSelectedProjectTitle(null)
                }}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors ${
                  activeCategory === 'All' && !selectedProjectTitle
                    ? 'bg-[#f47c20] text-white font-semibold'
                    : 'text-slate-700 hover:bg-slate-50 hover:text-[#f47c20]'
                }`}
              >
                <span>All Projects</span>
                <span className={`text-xs ${activeCategory === 'All' && !selectedProjectTitle ? 'text-white/80' : 'text-slate-400'}`}>
                  ({brochureProjects.length})
                </span>
              </button>

              {/* 8 Category Accordions */}
              {CATEGORIES.map(cat => {
                const isCatActive = activeCategory.toLowerCase() === cat.name.toLowerCase()
                const isExpanded = !!expandedCategories[cat.id]
                const catProjects = categoryProjectsMap[cat.id] || []

                return (
                  <div key={cat.id} className="rounded-lg transition-all">
                    
                    {/* Category Header */}
                    <div
                      onClick={() => handleCategorySelect(cat.name, cat.id)}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs sm:text-sm font-medium cursor-pointer transition-colors ${
                        isCatActive && !selectedProjectTitle
                          ? 'bg-orange-50 text-[#f47c20] font-semibold'
                          : isCatActive
                          ? 'text-[#f47c20] font-semibold bg-slate-50/80'
                          : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                      }`}
                    >
                      <span className="truncate">{cat.name}</span>

                      <div className="flex items-center gap-2">
                        <span className="text-xs text-slate-400">({catProjects.length})</span>
                        <button
                          type="button"
                          onClick={(e) => toggleCategoryAccordion(cat.id, e)}
                          className="text-slate-400 hover:text-slate-600 p-0.5"
                        >
                          {isExpanded ? (
                            <ChevronUp className="h-3.5 w-3.5 text-[#f47c20]" />
                          ) : (
                            <ChevronDown className="h-3.5 w-3.5" />
                          )}
                        </button>
                      </div>
                    </div>

                    {/* Accordion Expanded Child List */}
                    {isExpanded && (
                      <div className="my-1 ml-2 pl-2 border-l border-slate-200 space-y-0.5 py-1">
                        
                        {/* All Projects in Category */}
                        <button
                          onClick={() => handleCategorySelect(cat.name, cat.id)}
                          className={`w-full text-left px-2 py-1 rounded text-xs transition-colors ${
                            isCatActive && !selectedProjectTitle
                              ? 'text-[#f47c20] font-semibold bg-orange-50/60'
                              : 'text-slate-500 hover:text-slate-800 hover:bg-slate-50'
                          }`}
                        >
                          All {cat.name} ({catProjects.length})
                        </button>

                        {/* Individual Project Title List */}
                        {catProjects.map(proj => {
                          const isProjSelected = selectedProjectTitle?.toLowerCase() === proj.title.toLowerCase()
                          return (
                            <button
                              key={proj.id}
                              onClick={() => handleProjectSelect(proj.title, cat.name, cat.id)}
                              className={`w-full text-left px-2 py-1.5 rounded text-xs transition-all leading-normal ${
                                isProjSelected
                                  ? 'border-l-2 border-[#f47c20] text-[#f47c20] font-semibold bg-orange-50/80 pl-2.5'
                                  : 'text-slate-600 hover:text-[#f47c20] hover:bg-slate-50'
                              }`}
                            >
                              <span className="line-clamp-2">{proj.title}</span>
                            </button>
                          )
                        })}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </aside>

          {/* Right Main Projects Content Area */}
          <main className="flex-1 min-w-0 w-full">
            
            {/* Header Row above Grid: Search on Right side, Mobile Category toggle on left */}
            <div className="mb-4 flex flex-col sm:flex-row items-center justify-between gap-3">
              {/* Mobile Category Toggle */}
              <button
                onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
                className="lg:hidden w-full sm:w-auto px-4 py-2 bg-slate-100 text-slate-700 rounded-lg text-xs font-semibold hover:bg-slate-200 transition-colors"
              >
                {mobileFilterOpen ? 'Close Categories' : 'Browse Categories'}
              </button>

              {/* Right side Search box */}
              <div className="w-full sm:w-72 md:w-80 ml-auto relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                  <Search className="h-4 w-4" />
                </div>
                <input
                  type="text"
                  placeholder="Search plant by name..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-lg border border-slate-200 bg-white py-2 pl-9 pr-8 text-xs sm:text-sm text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-[#f47c20] focus:ring-2 focus:ring-[#f47c20]/10 shadow-sm"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute inset-y-0 right-0 pr-2.5 flex items-center text-slate-400 hover:text-slate-600"
                  >
                    <X className="h-3.5 w-3.5" />
                  </button>
                )}
              </div>
            </div>

            {/* Grid of Projects */}
            <div ref={gridRef} className="scroll-mt-28">
              {filteredProjects.length > 0 ? (
                <ul className="turnkey-projects-grid">
                  {filteredProjects.map((project) => (
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
                  ))}
                </ul>
              ) : (
                <div className="rounded-xl border border-slate-200 bg-white py-14 px-6 text-center shadow-sm">
                  <h3 className="text-base font-semibold text-slate-800">No projects found</h3>
                  <p className="mt-1 text-xs text-slate-500 max-w-sm mx-auto">
                    No processing plant matches your current filter or search criteria.
                  </p>
                  <button
                    onClick={handleClearFilters}
                    className="mt-4 inline-flex items-center gap-1.5 rounded-lg bg-[#f47c20] px-4 py-2 text-xs font-semibold text-white hover:bg-[#e06b12] transition-colors"
                  >
                    <RotateCcw className="h-3.5 w-3.5" /> Clear Filters
                  </button>
                </div>
              )}
            </div>
          </main>
        </div>
      </div>
    </section>
  )
}
