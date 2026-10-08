import PageBanner from '../components/common/PageBanner'

export default function MD() {
  return (
    <>
      <PageBanner title="ব্যবস্থাপনা পরিচালকের বাণী" />
      <section className="site-container grid gap-10 py-14 md:grid-cols-[320px_1fr]">
        <div className="flex aspect-[4/5] items-center justify-center bg-neutral-200 text-neutral-500">
          এমডির ছবি
        </div>
        <div>
          <h2 className="font-display text-2xl font-bold text-brand-green">
            এমডির নাম
          </h2>
          <p className="mt-1 text-neutral-500">
            ব্যবস্থাপনা পরিচালক, হোমল্যান্ড পূর্বাচল সিটি
          </p>
          <p className="mt-6 text-lg leading-loose">
            এখানে ব্যবস্থাপনা পরিচালকের বাণী লেখা হবে।
          </p>
        </div>
      </section>
    </>
  )
}
