// src/components/Navbar.jsx
import { NavLink } from 'react-router-dom'

const menuItems = [
  { label: 'HOME', to: '/' },
  { label: 'JOURNEY', to: '/about' },
  { label: 'TURNKEY SOLUTION', to: '/turnkey-project' },
  { label: 'MACHINERIES', to: '/machineries' },
  { label: 'CONSULTANT', to: '/services' },
  { label: 'CONTACT', to: '/contact' },
]

function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 shadow-md backdrop-blur">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <NavLink to="/" className="flex items-center gap-2">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-[#f47c20] text-xl font-extrabold text-white">SI</span>
          <div className="leading-tight">
            <p className="text-lg font-bold text-[#0c2d57]">Salvin Industries</p>
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-slate-500">Industrial Automation</p>
          </div>
        </NavLink>

        <nav className="hidden lg:block">
          <ul className="flex items-center gap-6">
            {menuItems.map((item) => (
              <li key={item.label}>
                <NavLink to={item.to} className="text-xs font-semibold tracking-[0.1em] text-[#0c2d57] transition hover:text-[#f47c20]">{item.label}</NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <button type="button" className="rounded-md border border-slate-300 px-3 py-2 text-xs font-semibold tracking-[0.08em] text-[#0c2d57] lg:hidden">MENU</button>
      </div>
    </header>
  )
}

export default Navbar
