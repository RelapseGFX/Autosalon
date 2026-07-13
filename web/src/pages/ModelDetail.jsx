import { useParams, Navigate, Link } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx'
import ScrollIndicator from '../components/ScrollIndicator.jsx'
import { vehicles } from '../lib/vehicles.js'

const TAGLINE_TONE = {
  white: 'text-white',
  cream: 'text-[#f2ece1]',
}

export default function ModelDetail() {
  const { slug } = useParams()
  const vehicle = vehicles[slug]

  if (!vehicle) return <Navigate to="/" replace />

  return (
    <div className="min-h-screen bg-stone">
      <Navbar transparent showBack />

      {/* Video hero + low-opacity watermark title behind the heading. */}
      <section className="relative h-screen w-full overflow-hidden bg-ink">
        <video
          className="absolute inset-0 h-full w-full object-cover opacity-70"
          src={vehicle.videoPath}
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/10 to-ink/45" />

        <div className="relative z-10 flex h-full items-center justify-center px-6">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute select-none whitespace-nowrap font-display text-[18vw] font-semibold uppercase leading-none tracking-tight text-white/10 md:text-[14vw]"
          >
            {vehicle.watermark}
          </span>
          <div className="relative mx-auto max-w-3xl text-center">
            <p className={'eyebrow ' + (TAGLINE_TONE[vehicle.heroTagline?.tone] ?? 'text-white/70')}>
              {vehicle.model}
            </p>
            <h1
              className={
                'mt-4 font-display text-4xl italic leading-snug tracking-tight md:text-6xl ' +
                (TAGLINE_TONE[vehicle.heroTagline?.tone] ?? 'text-white')
              }
            >
              {vehicle.heroTagline?.text}
            </h1>
          </div>
        </div>

        <ScrollIndicator light />
      </section>

      {/* Performance — an asymmetric bento grid: one dominant horsepower
          figure, an inverted "hero stat" bar for acceleration, and a photo
          woven directly into the grid rather than bolted on as a separate
          tile. Pure grid auto-placement (col-span/row-span only, no
          explicit start lines) — the power card and image both span two
          rows, so the remaining cells fall into place around them. */}
      <section className="border-t border-ink/10 bg-stone-raised/40">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-32">
          <p className="eyebrow text-accent">Performance</p>
          <h2 className="mt-4 font-display text-3xl font-semibold text-ink md:text-4xl">
            Precision in Numbers.
          </h2>

          <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4 md:grid-rows-3 md:gap-4">
            <div className="col-span-2 row-span-2 flex flex-col justify-between rounded-sm bg-stone px-8 py-8">
              <div>
                <p className="font-display text-lg font-semibold text-ink">Power Unit</p>
                <p className="mt-1 font-body text-sm text-ink-muted">{vehicle.performance.engine}</p>
              </div>
              <div>
                <p className="font-display text-7xl font-semibold leading-none text-ink md:text-8xl">
                  {vehicle.performance.horsepower}
                </p>
                <p className="eyebrow mt-3 text-ink-faint">Horsepower</p>
              </div>
            </div>

            <div className="col-span-2 flex items-center justify-between rounded-sm bg-ink px-8 py-8">
              <p className="font-display text-5xl font-semibold text-stone md:text-6xl">
                {vehicle.performance.acceleration}
              </p>
              <p className="eyebrow text-right leading-relaxed text-stone/60">
                Acceleration
                <br />
                0&ndash;60 mph
              </p>
            </div>

            <div className="flex flex-col justify-center rounded-sm bg-stone px-6 py-6">
              <p className="eyebrow text-ink-faint">Top Speed</p>
              <p className="mt-2 font-display text-3xl font-semibold text-ink">
                {vehicle.performance.topSpeed}
              </p>
            </div>

            <div className="relative row-span-2 overflow-hidden rounded-sm">
              <img
                src={vehicle.editorial.bentoImage}
                alt={`${vehicle.marque} ${vehicle.model}`}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            <div className="flex flex-col justify-center rounded-sm bg-stone px-6 py-6">
              <p className="eyebrow text-ink-faint">Torque</p>
              <p className="mt-2 font-display text-3xl font-semibold text-ink">
                {vehicle.performance.torque}
              </p>
            </div>

            <div className="flex flex-col justify-center rounded-sm bg-stone px-6 py-6">
              <p className="eyebrow text-ink-faint">Transmission</p>
              <p className="mt-2 font-body text-lg font-semibold text-ink">
                {vehicle.performance.transmission}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial split A — image left, copy right. */}
      <section className="border-t border-ink/10 bg-stone">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="relative aspect-[4/3] md:aspect-auto md:h-full">
            <img
              src={vehicle.editorial.splitA.image}
              alt=""
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center px-6 py-16 md:px-16 md:py-24">
            <p className="eyebrow text-accent">{vehicle.editorial.splitA.eyebrow}</p>
            <h2 className="mt-4 font-display text-3xl font-semibold text-ink md:text-4xl">
              {vehicle.editorial.splitA.title}
            </h2>
            <p className="mt-6 max-w-md font-body text-ink-muted">{vehicle.editorial.splitA.body}</p>
          </div>
        </div>
      </section>

      {/* Editorial split B — mirrored: copy left, image right. */}
      <section className="border-t border-ink/10 bg-stone-raised/40">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="flex flex-col justify-center px-6 py-16 md:px-16 md:py-24">
            <p className="eyebrow text-accent">{vehicle.editorial.splitB.eyebrow}</p>
            <h2 className="mt-4 font-display text-3xl font-semibold text-ink md:text-4xl">
              {vehicle.editorial.splitB.title}
            </h2>
            <p className="mt-6 max-w-md font-body text-ink-muted">{vehicle.editorial.splitB.body}</p>
          </div>
          <div className="relative aspect-[4/3] md:aspect-auto md:h-full">
            <img
              src={vehicle.editorial.splitB.image}
              alt=""
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-6 py-12 md:px-10">
        <div className="flex flex-wrap items-center justify-between gap-6 border-t border-ink/10 pt-8">
          <p className="max-w-md font-body text-sm text-ink-muted">{vehicle.summary}</p>
          <Link
            to="/#collection"
            className="whitespace-nowrap text-sm font-semibold text-accent transition-colors hover:text-accent-strong"
          >
            &larr; Back to the collection
          </Link>
        </div>
      </div>
    </div>
  )
}
