import { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { HERO, HERO_STATS, SITE } from '../../../data'
import type { RootState } from '../../../store'
import { toggleHeroVideo } from '../../../store/slicer/uiSlice'
import Button from '../../common/Button'
import { ArrowRightIcon, PauseIcon, PlayIcon } from '../../common/Icons'

export default function Hero() {
  const dispatch = useDispatch()
  const isPlaying = useSelector(
    (state: RootState) => state.ui.isHeroVideoPlaying,
  )
  const videoRef = useRef<HTMLVideoElement>(null)

  // Keep the video in sync with the redux play/pause state
  useEffect(() => {
    if (isPlaying) videoRef.current?.play().catch(() => {})
    else videoRef.current?.pause()
  }, [isPlaying])

  return (
    <section className="relative isolate overflow-hidden bg-brand-green-dark text-white">
      {/* Background video */}
      <video
        ref={videoRef}
        className="absolute inset-0 -z-20 h-full w-full object-cover"
        src={HERO.videoSrc}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      />
      {/* Overlays for text contrast */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/70 via-black/45 to-black/25" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-1/2 bg-gradient-to-t from-black/70 to-transparent" />

      <div className="site-container relative flex min-h-[calc(100vh-124px)] flex-col justify-between pb-8 pt-10 md:pt-14">
        <button
          type="button"
          onClick={() => dispatch(toggleHeroVideo())}
          className="absolute right-5 top-5 flex items-center gap-2 rounded-full bg-black/45 px-4 py-2 text-sm backdrop-blur hover:bg-black/65 md:right-8"
        >
          {isPlaying ? <PauseIcon /> : <PlayIcon />}
          {isPlaying ? 'ভিডিও বিরতি' : 'ভিডিও চালু'}
        </button>

        <div className="max-w-3xl pt-8">
          <p className="mb-5 flex items-center gap-3 font-medium text-brand-gold">
            <span className="h-px w-12 bg-brand-gold" />
            {HERO.eyebrow}
          </p>

          <h1 className="font-display text-5xl font-bold leading-[1.25] md:text-7xl md:leading-[1.2]">
            {HERO.titleLine1}
            <br />
            <span className="text-brand-gold">{HERO.titleLine2}</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/90">
            {HERO.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button to="/projects" size="lg">
              চলমান প্রজেক্ট দেখুন <ArrowRightIcon />
            </Button>
            <Button href={SITE.brochureUrl} variant="outline" size="lg">
              ব্রোশিওর ডাউনলোড
            </Button>
          </div>
        </div>

        <dl className="mt-14 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-white/25 pt-8 lg:grid-cols-4">
          {HERO_STATS.map((stat) => (
            <div key={stat.label}>
              <dt className="font-display text-4xl font-bold md:text-5xl">
                {stat.value}
              </dt>
              <dd className="mt-1 text-sm text-white/80 md:text-base">
                {stat.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
