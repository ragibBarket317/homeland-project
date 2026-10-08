import { Link } from 'react-router-dom'
import { SITE } from '../../data'

type LogoProps = { light?: boolean; showSubName?: boolean }

export default function Logo({ light = false, showSubName = true }: LogoProps) {
  return (
    <Link to="/" className="flex items-center gap-3" aria-label={SITE.name}>
      <img src="/images/logo.png" alt="" className="h-12 w-auto md:h-14" />
      <span className="flex flex-col leading-tight">
        <span
          className={`font-display text-xl font-bold md:text-2xl ${light ? 'text-white' : 'text-brand-green'}`}
        >
          {SITE.name}
        </span>
        {showSubName && (
          <span
            className={`hidden text-[11px] tracking-wide md:block ${light ? 'text-white/70' : 'text-neutral-500'}`}
          >
            {SITE.subName}
          </span>
        )}
      </span>
    </Link>
  )
}
