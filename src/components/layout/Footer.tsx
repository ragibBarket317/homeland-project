import { Link } from 'react-router-dom'
import { FOOTER_LINKS, FOOTER_PHONES, SITE } from '../../data'
import Button from '../common/Button'
import Logo from '../common/Logo'

export default function Footer() {
  return (
    <footer className="bg-brand-green text-white">
      {/* CTA strip */}
      <div className="bg-brand-green-dark">
        <div className="site-container flex flex-col items-start justify-between gap-5 py-10 md:flex-row md:items-center">
          <h2 className="font-display text-2xl font-bold md:text-3xl">
            প্রকল্প পরিদর্শনের জন্য এখনই বুক করুন
          </h2>
          <div className="flex flex-wrap items-center gap-4">
            <Button to="/contact" variant="light" size="lg">
              সাইট ভিজিট বুক করুন
            </Button>
            <a
              href={SITE.phoneHref}
              className="text-lg font-semibold hover:text-brand-gold"
            >
              {SITE.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="site-container grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <Logo light showSubName={false} />
          <p className="max-w-xs text-sm leading-relaxed text-white/75">
            সুপরিকল্পিত আধুনিক নগরী ‘হোমল্যান্ড পূর্বাচল সিটি’ — নিষ্কণ্টক
            নির্ভেজাল প্লট ও সাফ কবলা রেজিস্ট্রি।
          </p>
          <ul className="flex gap-4 text-sm">
            {SITE.social.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="text-white/75 hover:text-brand-gold"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-semibold">কাস্টমার সার্ভিসেস</h3>
          <ul className="space-y-2 text-sm text-white/75">
            <li>{SITE.address}</li>
            <li>
              <a
                href={`mailto:${SITE.email}`}
                className="hover:text-brand-gold"
              >
                {SITE.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-semibold">আমাদের কোম্পানি</h3>
          <ul className="space-y-2 text-sm text-white/75">
            {FOOTER_LINKS.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="hover:text-brand-gold">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-semibold">যোগাযোগ নম্বর</h3>
          <ul className="space-y-2 text-sm text-white/75">
            {FOOTER_PHONES.map((phone) => (
              <li key={phone}>
                <a
                  href={`tel:${phone.replace(/[^+\d]/g, '')}`}
                  className="hover:text-brand-gold"
                >
                  {phone}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/15">
        <div className="site-container flex flex-col justify-between gap-2 py-5 text-xs text-white/60 md:flex-row">
          <p>
            © {new Date().getFullYear()} {SITE.name}। সর্বস্বত্ব সংরক্ষিত।
          </p>
          <p>Homeland Purbachal City Development Limited</p>
        </div>
      </div>
    </footer>
  )
}
