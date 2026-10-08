import PageBanner from '../components/common/PageBanner'

export default function About() {
  return (
    <>
      <PageBanner
        title="আমাদের সম্পর্কে"
        subtitle="হোমল্যান্ড পূর্বাচল সিটি — Your Committed Trust"
      />
      <section className="site-container max-w-4xl py-14">
        <p className="text-lg leading-loose">
          এখানে কোম্পানির পরিচিতি, লক্ষ্য, উদ্দেশ্য এবং ভিশন লেখা হবে।
        </p>
      </section>
    </>
  )
}
