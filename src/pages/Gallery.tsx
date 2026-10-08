import PageBanner from '../components/common/PageBanner'

const IMAGES = ['block-a', 'block-b', 'block-c', 'block-d']

export default function Gallery() {
  return (
    <>
      <PageBanner title="গ্যালারি" />
      <section className="site-container grid gap-4 py-14 sm:grid-cols-2 lg:grid-cols-3">
        {IMAGES.map((name) => (
          <img
            key={name}
            src={`/images/${name}.jpg`}
            alt={name}
            className="aspect-[4/3] w-full object-cover"
          />
        ))}
      </section>
    </>
  )
}
