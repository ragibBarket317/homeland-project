import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { NAV_ITEMS, SITE } from '../../data'
import type { RootState } from '../../store'
import { closeMobileMenu, toggleMobileMenu } from '../../store/slicer/uiSlice'
import Button from '../common/Button'
import {
  ChevronDownIcon,
  CloseIcon,
  MailIcon,
  MenuIcon,
  PhoneIcon,
} from '../common/Icons'
import Logo from '../common/Logo'

const linkClass = ({ isActive }: { isActive: boolean }) =>
  `flex items-center gap-1 border-b-2 py-1 text-[15px] font-medium hover:text-brand-red ${
    isActive
      ? 'border-brand-red text-brand-red'
      : 'border-transparent text-neutral-800'
  }`

// Mobile menu shows children directly instead of dropdown
const mobileItems = NAV_ITEMS.flatMap((item) => item.children ?? item)

export default function Header() {
  const dispatch = useDispatch()
  const isOpen = useSelector((state: RootState) => state.ui.isMobileMenuOpen)

  return (
    <header className="sticky top-0 z-50">
      {/* Top bar */}
      <div className="hidden bg-brand-green text-sm text-white md:block">
        <div className="site-container flex h-10 items-center justify-between">
          <div className="flex items-center gap-6">
            <a
              href={SITE.phoneHref}
              className="flex items-center gap-2 hover:text-brand-gold"
            >
              <PhoneIcon /> {SITE.phone}
            </a>
            <a
              href={`mailto:${SITE.email}`}
              className="flex items-center gap-2 hover:text-brand-gold"
            >
              <MailIcon /> {SITE.email}
            </a>
          </div>
          <ul className="flex items-center gap-5">
            {SITE.social.map((item) => (
              <li key={item.label}>
                <a href={item.href} className="hover:text-brand-gold">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Main nav */}
      <div className="border-b border-neutral-200 bg-brand-cream">
        <div className="site-container flex h-[72px] items-center justify-between gap-4 md:h-[84px]">
          <Logo />

          {/* Desktop menu */}
          <nav className="hidden items-center gap-6 xl:flex" aria-label="Main">
            {NAV_ITEMS.map((item) =>
              item.children ? (
                <div key={item.to} className="group relative">
                  <NavLink to={item.to} className={linkClass}>
                    {item.label} <ChevronDownIcon />
                  </NavLink>
                  <div className="invisible absolute left-0 top-full min-w-[200px] bg-white py-2 opacity-0 shadow-lg group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                    {item.children.map((child) => (
                      <NavLink
                        key={child.to}
                        to={child.to}
                        className="block px-5 py-2 text-[15px] hover:bg-brand-cream hover:text-brand-red"
                      >
                        {child.label}
                      </NavLink>
                    ))}
                  </div>
                </div>
              ) : (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === '/'}
                  className={linkClass}
                >
                  {item.label}
                </NavLink>
              ),
            )}
          </nav>

          <div className="flex items-center gap-3">
            <Button to="/contact" className="hidden md:inline-flex">
              সাইট ভিজিট বুক করুন
            </Button>
            <button
              type="button"
              onClick={() => dispatch(toggleMobileMenu())}
              className="p-2 text-brand-green xl:hidden"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
            >
              {isOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <nav
            className="border-t border-neutral-200 xl:hidden"
            aria-label="Mobile"
          >
            <div className="site-container flex flex-col py-3">
              {mobileItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === '/'}
                  onClick={() => dispatch(closeMobileMenu())}
                  className="border-b border-neutral-200 py-3 font-medium hover:text-brand-red"
                >
                  {item.label}
                </NavLink>
              ))}
              <Button to="/contact" className="mt-4">
                সাইট ভিজিট বুক করুন
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
