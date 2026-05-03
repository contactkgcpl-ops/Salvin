import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

const menuItems = [
  { label: 'HOME', to: '/' },
  { label: 'JOURNEY', to: '/about' },
  { label: 'TURNKEY SOLUTION', to: '/turnkey-project' },
  { label: 'MACHINERIES', to: '/machineries' },
  { label: 'CONSULTANT', to: '/services' },
  { label: 'CONTACT', to: '/contact' },
]

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const desktopLinkClass = ({ isActive }) =>
    `text-xs font-semibold tracking-[0.1em] transition-colors hover:text-[#f47c20] ${
      isActive ? 'text-[#f47c20]' : 'text-[#0c2d57]'
    }`

  const mobileLinkClass = ({ isActive }) =>
    `block rounded-lg border-b border-slate-200/80 px-3 py-3 text-xs font-semibold tracking-[0.12em] transition-colors last:border-b-0 ${
      isActive ? 'bg-[#fff4ea] text-[#f47c20]' : 'text-[#0c2d57] hover:bg-slate-100'
    }`

  return (
    <header className="sticky top-0 z-50 min-w-0 bg-white/95 shadow-md backdrop-blur">
      <div className="mx-auto flex min-h-[64px] w-full max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:min-h-[72px] lg:px-8">
        <NavLink to="/" className="flex min-w-0 shrink items-center gap-2" onClick={() => setMenuOpen(false)}>
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-[#f47c20] text-lg font-extrabold text-white sm:h-10 sm:w-10">SI</span>
          <div className="min-w-0 leading-tight">
            <p className="truncate text-base font-bold text-[#0c2d57] sm:text-lg">Salvin Industries</p>
            <p className="truncate text-[0.65rem] font-medium uppercase tracking-[0.14em] text-slate-500 sm:text-xs">Industrial Automation</p>
          </div>
        </NavLink>

        <nav className="hidden items-center gap-4 lg:flex lg:gap-6">
          <ul className="flex flex-wrap items-center justify-end gap-4 lg:gap-6">
            {menuItems.map((item) => (
              <li key={item.label}>
                <NavLink to={item.to} className={desktopLinkClass}>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className={`flex h-11 w-11 shrink-0 flex-col items-center justify-center gap-1.5 rounded-lg border border-slate-300 bg-white lg:hidden ${menuOpen ? 'ring-2 ring-[#f47c20]/40' : ''}`}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span className={`h-0.5 w-5 rounded-full bg-[#0c2d57] transition-transform ${menuOpen ? 'translate-y-2 rotate-45' : ''}`} />
          <span className={`h-0.5 w-5 rounded-full bg-[#0c2d57] transition-opacity ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`h-0.5 w-5 rounded-full bg-[#0c2d57] transition-transform ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`} />
        </button>
      </div>

      {menuOpen ? (
        <button
          type="button"
          className="fixed inset-0 z-[115] bg-black/45 lg:hidden"
          aria-label="Close menu overlay"
          onClick={() => setMenuOpen(false)}
        />
      ) : null}

      <div
        className={`fixed inset-y-0 right-0 z-[120] flex w-[min(320px,88vw)] flex-col bg-[#fffff0] shadow-xl transition-transform duration-300 ease-out lg:hidden ${
          menuOpen ? 'translate-x-0' : 'translate-x-full pointer-events-none'
        }`}
      >
        <div className="flex items-center justify-between border-b border-slate-200 px-4 py-4">
          <span className="text-sm font-bold text-[#0c2d57]">Menu</span>
          <button type="button" className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-100" onClick={() => setMenuOpen(false)}>
            Close
          </button>
        </div>
        <nav className="flex-1 overflow-y-auto px-3 py-4">
          <ul className="flex flex-col gap-1">
            {menuItems.map((item) => (
              <li key={item.label}>
                <NavLink to={item.to} className={mobileLinkClass} onClick={() => setMenuOpen(false)}>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
