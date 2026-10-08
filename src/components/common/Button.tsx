import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

type ButtonProps = {
  children: ReactNode
  to?: string // internal page (react-router)
  href?: string // external link
  variant?: 'primary' | 'outline' | 'light' | 'green'
  size?: 'md' | 'lg'
  className?: string
}

const variants = {
  primary: 'bg-brand-red text-white hover:bg-brand-red-dark',
  outline:
    'border border-white/70 text-white hover:bg-white hover:text-brand-green',
  light: 'bg-white text-brand-green hover:bg-brand-gold',
  green: 'bg-brand-green text-white hover:bg-brand-green-dark',
}

const sizes = {
  md: 'px-5 py-2.5 text-[15px]',
  lg: 'px-7 py-4 text-base',
}

export default function Button({
  children,
  to,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold transition-colors ${variants[variant]} ${sizes[size]} ${className}`

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <a href={href} className={classes}>
      {children}
    </a>
  )
}
