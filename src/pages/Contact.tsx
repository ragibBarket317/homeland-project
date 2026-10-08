import PageBanner from '../components/common/PageBanner'
import { SITE } from '../data'

const inputClass =
  'w-full border border-neutral-300 bg-white px-4 py-3 focus:border-brand-green focus:outline-none'

export default function Contact() {
  return (
    <>
      <PageBanner
        title="যোগাযোগ"
        subtitle="সাইট ভিজিট বুক করতে ফর্মটি পূরণ করুন"
      />
      <section className="site-container grid gap-12 py-14 md:grid-cols-2">
        <div className="space-y-3 text-lg">
          <p>
            ফোন:{' '}
            <a href={SITE.phoneHref} className="font-semibold text-brand-red">
              {SITE.phone}
            </a>
          </p>
          <p>
            ইমেইল:{' '}
            <a
              href={`mailto:${SITE.email}`}
              className="font-semibold text-brand-red"
            >
              {SITE.email}
            </a>
          </p>
          <p>ঠিকানা: {SITE.address}</p>
        </div>

        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="আপনার নাম" className={inputClass} />
          <input type="tel" placeholder="ফোন নম্বর" className={inputClass} />
          <textarea
            rows={4}
            placeholder="আপনার বার্তা"
            className={inputClass}
          />
          <button
            type="submit"
            className="bg-brand-red px-7 py-3 font-semibold text-white hover:bg-brand-red-dark"
          >
            পাঠান
          </button>
        </form>
      </section>
    </>
  )
}
