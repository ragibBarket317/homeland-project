import { ABOUT } from '../../../data'
import Button from '../../common/Button'
import { ArrowRightIcon } from '../../common/Icons'

export default function About() {
  return (
    <section className="py-20 md:py-28">
      <div className="site-container grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        {/* Image + badge */}
        <div className="relative">
          <img
            src={ABOUT.image}
            alt={`${ABOUT.titleLine1} ${ABOUT.titleLine2}`}
            className="aspect-[4/5] w-full rounded-md object-cover"
          />
          <div className="absolute bottom-6 left-4 w-[250px] rounded bg-brand-red p-6 text-white md:bottom-10 md:-left-7">
            <p className="font-display text-4xl font-bold">
              {ABOUT.badgeTitle}
            </p>
            <p className="mt-2 text-base leading-8">{ABOUT.badgeText}</p>
          </div>
        </div>

        {/* Content */}
        <div>
          <p className="mb-5 flex items-center gap-3 text-sm font-medium text-brand-red">
            <span className="h-px w-10 bg-brand-red" />
            {ABOUT.eyebrow}
          </p>

          <h2 className="font-display text-4xl font-bold leading-[1.3] text-neutral-900 md:text-5xl md:leading-[1.3]">
            {ABOUT.titleLine1}
            <br />
            {ABOUT.titleLine2}
          </h2>

          <div className="mt-8 space-y-5 text-base leading-8 text-neutral-700">
            {ABOUT.paragraphs.map((text) => (
              <p key={text}>{text}</p>
            ))}
          </div>

          <div className="mt-8 border-t border-neutral-300/70 pt-8">
            <p className="font-display text-xl font-bold text-brand-green md:text-2xl">
              {ABOUT.highlight}
            </p>
            <Button to="/about" variant="green" size="lg" className="mt-8">
              আরও জানুন <ArrowRightIcon />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
