import { SITE } from '../../data'
import { PhoneIcon, WhatsAppIcon } from './Icons'

export default function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-4 z-40 flex flex-col gap-3">
      <a
        href={SITE.whatsappHref}
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-2 rounded-full bg-[#1a9d5b] px-5 py-3 font-semibold text-white shadow-lg hover:bg-[#15834c]"
      >
        <WhatsAppIcon />
        <span className="hidden sm:inline">WhatsApp</span>
      </a>
      <a
        href={SITE.phoneHref}
        className="flex items-center gap-2 rounded-full bg-brand-green px-5 py-3 font-semibold text-white shadow-lg hover:bg-brand-green-dark"
      >
        <PhoneIcon />
        <span className="hidden sm:inline">কল করুন</span>
      </a>
    </div>
  )
}
