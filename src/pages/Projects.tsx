import PageBanner from '../components/common/PageBanner'

const BLOCKS = [
  { name: 'ব্লক এ', image: '/images/block-a.jpg' },
  { name: 'ব্লক বি', image: '/images/block-b.jpg' },
  { name: 'ব্লক সি', image: '/images/block-c.jpg' },
  { name: 'ব্লক ডি', image: '/images/block-d.jpg' },
]

export default function Projects() {
  return (
    <>
      <PageBanner
        title="চলমান প্রজেক্ট"
        subtitle="চারটি ব্লক, একটি পরিকল্পিত শহর"
      />
      <section className="site-container grid gap-6 py-14 sm:grid-cols-2 lg:grid-cols-4">
        {BLOCKS.map((block) => (
          <article
            key={block.name}
            className="overflow-hidden bg-white shadow-sm"
          >
            <img
              src={block.image}
              alt={block.name}
              className="aspect-[4/3] w-full object-cover"
            />
            <h2 className="p-4 font-display text-xl font-bold text-brand-green">
              {block.name}
            </h2>
          </article>
        ))}
      </section>
    </>
  )
}
