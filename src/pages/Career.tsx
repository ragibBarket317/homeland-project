import PageBanner from '../components/common/PageBanner'
import { SITE } from '../data'

export default function Career() {
  return (
    <>
      <PageBanner title="ক্যারিয়ার" subtitle="আমাদের টিমের অংশ হতে চান?" />
      <section className="site-container max-w-4xl py-14">
        <p className="text-lg leading-loose">
          বর্তমানে কোনো খালি পদ নেই। আপনার সিভি পাঠান:{' '}
          <a
            href={`mailto:${SITE.email}`}
            className="font-semibold text-brand-red"
          >
            {SITE.email}
          </a>
        </p>
      </section>
    </>
  )
}
