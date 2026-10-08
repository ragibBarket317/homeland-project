import PageBanner from '../components/common/PageBanner'

const POSTS = [
  { title: 'প্রথম ব্লগ পোস্টের শিরোনাম', image: '/images/blog-2.jpg' },
  { title: 'দ্বিতীয় ব্লগ পোস্টের শিরোনাম', image: '/images/blog-3.jpg' },
  { title: 'তৃতীয় ব্লগ পোস্টের শিরোনাম', image: '/images/blog-4.jpg' },
]

export default function Blogs() {
  return (
    <>
      <PageBanner title="নিউজ এবং ব্লগস" subtitle="সর্বশেষ আপডেট ও অফার" />
      <section className="site-container grid gap-6 py-14 md:grid-cols-3">
        {POSTS.map((post) => (
          <article
            key={post.title}
            className="overflow-hidden bg-white shadow-sm"
          >
            <img
              src={post.image}
              alt=""
              className="aspect-square w-full object-cover"
            />
            <h2 className="p-4 text-lg font-semibold text-brand-green">
              {post.title}
            </h2>
          </article>
        ))}
      </section>
    </>
  )
}
