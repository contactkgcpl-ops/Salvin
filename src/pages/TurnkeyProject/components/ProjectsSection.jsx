import { useState, useMemo } from 'react'
import { Search } from 'lucide-react'
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

  const filteredProjects = useMemo(() => {
    return brochureProjects.filter(p => {
      // 1. Check Search Query
      const lowerQuery = searchQuery.toLowerCase().trim()
      const matchesSearch = !lowerQuery ||
        p.title.toLowerCase().includes(lowerQuery) ||
        p.descriptionLines.some(line => line.toLowerCase().includes(lowerQuery))

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

  return (
    <section id="brochures" className="border-t border-slate-100 bg-[#f8fafc] py-20 lg:py-28">
      <div className="mx-auto w-full max-w-[1400px] px-6 lg:px-12">
        <div className="mb-16 flex flex-col items-center text-center lg:mb-20">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#f47c20]/10 px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.25em] text-[#f47c20] ring-1 ring-inset ring-[#f47c20]/20">
            <span className="h-1.5 w-1.5 rounded-full bg-[#f47c20] animate-pulse" aria-hidden />
            Project Portfolio
          </span>
          <h2 className="mt-6 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Turnkey <span className="text-[#f47c20]">Solutions</span>
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
            Explore Salvin&apos;s industrial processing lines—each card reflects an installed-capacity concept
            you can scale with our engineers from blueprint through commissioning.
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

        <ul className="turnkey-projects-grid">
          {filteredProjects.length > 0 ? filteredProjects.map((project) => (
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
    </section>
  )
}
