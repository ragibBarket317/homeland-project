import PageBanner from '../components/common/PageBanner'

export default function Chairman() {
  return (
    <>
      <PageBanner title="চেয়ারম্যানের বাণী" />
      <section className="site-container grid gap-10 py-14 md:grid-cols-[320px_1fr]">
        <div className="flex aspect-[4/5] items-center justify-center bg-neutral-200 text-neutral-500">
          চেয়ারম্যানের ছবি
        </div>
        <div>
          <h2 className="font-display text-2xl font-bold text-brand-green">
            চেয়ারম্যানের নাম
          </h2>
          <p className="mt-1 text-neutral-500">
            চেয়ারম্যান, হোমল্যান্ড পূর্বাচল সিটি
          </p>
          <p className="mt-6 text-lg leading-loose">
            এখানে চেয়ারম্যানের বাণী লেখা হবে।
          </p>
        </div>
      </section>
    </>
  )
}
