// Reusable title banner for inner pages
type PageBannerProps = { title: string; subtitle?: string };

export default function PageBanner({ title, subtitle }: PageBannerProps) {
  return (
    <section className="bg-brand-green py-14 text-white md:py-20">
      <div className="site-container">
        <h1 className="font-display text-4xl font-bold md:text-5xl">{title}</h1>
        {subtitle && <p className="mt-3 max-w-2xl text-lg text-white/80">{subtitle}</p>}
      </div>
    </section>
  );
}
