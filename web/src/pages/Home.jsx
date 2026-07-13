import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar.jsx'
import MarqueStrip from '../components/MarqueStrip.jsx'
import HeroScene from '../components/HeroScene.jsx'
import HeroSceneBoundary from '../components/HeroSceneBoundary.jsx'
import HeroHud from '../components/HeroHud.jsx'
import CollectionCard from '../components/CollectionCard.jsx'
import { vehicles, collectionPreview } from '../lib/vehicles.js'

const cayenne = vehicles['cayenne-turbo-gt']
const specValue = (label) => cayenne.specs.find((s) => s.label === label)?.value

// Sizing is handled entirely inside VehicleModel (bounding-sphere auto-fit)
// so every model reads at the same visual scale regardless of its native
// export size — no per-model scale constant to hand-tune or accidentally
// clip the frame with.
//
// marque drives the h1 (just the manufacturer, e.g. "Porsche"); model is the
// tab label — splitting these out is what lets the tab bar carry the model
// name instead of duplicating it in the headline.
const heroModels = [
  {
    id: 'porsche',
    marque: cayenne.marque,
    model: cayenne.model,
    path: cayenne.modelPath,
    tagline: cayenne.heroTagline.text,
  },
  {
    id: 's500',
    marque: 'Mercedes-Benz',
    model: 'S 500',
    path: '/models/s500.glb',
    tagline: 'Silence, Perfected.',
    // This GLB was exported facing the opposite way from the other three —
    // without this it opens backwards relative to them. See VehicleModel.
    yawOffset: Math.PI,
  },
  {
    id: 'x6',
    marque: 'BMW',
    model: 'X6 M',
    path: '/models/x6.glb',
    tagline: 'Form Follows Force.',
  },
  {
    id: 'gclass',
    marque: 'Mercedes-Benz',
    model: 'G-Class',
    path: '/models/gclass.glb',
    tagline: 'Unchanged By Design.',
  },
]

// Maps directly onto three of the four brand pillars from PRD §00
// (provenance, engineering-as-subject, quiet confidence) — "white-glove
// access" is reserved for a future Services section.
const philosophyPillars = [
  {
    title: 'Documented Provenance',
    body: 'Every vehicle arrives with ownership records, full service history, and a documented inspection — before it is ever shown.',
  },
  {
    title: 'Engineering as the Subject',
    body: 'We treat each car as a design and mechanical achievement, not a commodity to move. The spec sheet is a starting point, not the story.',
  },
  {
    title: 'Quiet Confidence',
    body: 'No countdown timers. No pressure tactics. Trust is built the way it always has been — through restraint.',
  },
]

// A literal square wastes margin for every vehicle: a car's horizontal
// footprint (length x width) is always bigger relative to its height than
// 1:1, so a true square forces every model down to fit its narrowest
// dimension. 2:1 comfortably covers the widest ratio among the four models
// (the S 500 sedan needs ~1.88:1 at its side-profile rotation) while still
// reading as a compact, boxy stage rather than the old short, page-wide
// strip. CSS aspect-ratio doesn't reliably resolve against a flex sibling
// that's also fighting for width, so the box is measured and set explicitly
// instead. Returns a zero-sized box on mobile (no md: breakpoint match),
// where the caller falls back to its normal Tailwind flow classes.
const STAGE_ASPECT = 2

function useStageBoxSize(ref) {
  const [box, setBox] = useState({ width: 0, height: 0 })
  useEffect(() => {
    const el = ref.current
    if (!el) return undefined
    const update = () => {
      if (window.innerWidth < 768) {
        setBox({ width: 0, height: 0 })
        return
      }
      const rect = el.getBoundingClientRect()
      let height = rect.height
      let width = height * STAGE_ASPECT
      if (width > rect.width) {
        width = rect.width
        height = width / STAGE_ASPECT
      }
      setBox({ width, height })
    }
    update()
    const ro = new ResizeObserver(update)
    ro.observe(el)
    window.addEventListener('resize', update)
    return () => {
      ro.disconnect()
      window.removeEventListener('resize', update)
    }
  }, [ref])
  return box
}

export default function Home() {
  const stageRef = useRef(null)
  const stageBox = useStageBoxSize(stageRef)
  const [heroModelId, setHeroModelId] = useState('porsche')
  const activeHeroModel = heroModels.find((m) => m.id === heroModelId)

  return (
    <div className="min-h-screen bg-stone">
      <Navbar />

      {/* Hero — h1 stacked above the 3D stage, both centered. The
          scroll-pinned sticky treatment is desktop-only: on mobile there's
          no spare viewport height to pin against, so the hero just stacks
          normally and scrolls past like any other section. */}
      <section className="relative md:h-[130vh]">
        {/* h-[calc(100vh-3.5rem)], not h-screen: the sticky navbar (h-14)
            sits on top of this stage, so a full 100vh would push the last
            bit of content — the lower-left HUD, the model toggle — below
            the fold at rest, before the user scrolls at all. */}
        <div className="md:sticky md:top-0 md:h-[calc(100vh-3.5rem)] md:overflow-hidden">
          <div className="relative mx-auto flex max-w-[1200px] flex-col items-center px-6 pb-6 pt-12 md:h-full md:px-10 md:pb-10">
            <h1 className="relative z-10 max-w-3xl text-center text-[3.375rem] font-semibold leading-[1.03] tracking-tight text-ink md:absolute md:inset-x-0 md:top-8 md:mx-auto md:max-w-4xl md:text-[4.25rem] lg:max-w-5xl">
              {activeHeroModel.marque}
            </h1>

            {/* Desktop: the 3D stage is a dedicated square sized off the full
                fold height and decoupled from document flow — the h1 and
                toggle group float on top of it as absolute overlays instead
                of sharing flex space with the canvas, so neither one shrinks
                the model's room to breathe. The top offset here is just
                enough to clear the (now higher) h1 — every pixel beyond that
                belongs to the canvas, so every vehicle gets the same
                interactive bounds regardless of its own proportions. Mobile
                keeps the simple stacked flow (no spare height to carve a
                square out of anyway). */}
            <div
              ref={stageRef}
              className="flex w-full flex-1 flex-col items-center md:absolute md:inset-x-0 md:bottom-0 md:top-32 md:flex-row md:items-center md:justify-center"
            >
              <div
                className={
                  stageBox.width
                    ? 'relative flex items-center justify-center'
                    : 'relative flex h-[40vh] w-full items-center justify-center'
                }
                style={
                  stageBox.width
                    ? { width: stageBox.width, height: stageBox.height }
                    : undefined
                }
              >
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(23,24,27,0.06),transparent_65%)]" />
                <HeroSceneBoundary key={heroModelId}>
                  <HeroScene
                    modelPath={activeHeroModel.path}
                    yawOffset={activeHeroModel.yawOffset}
                  />
                </HeroSceneBoundary>
              </div>
            </div>

            <div className="relative z-10 mt-6 flex w-full flex-col items-center gap-3 md:absolute md:inset-x-0 md:bottom-8 md:mt-0 md:w-auto">
              <p className="text-center font-body text-sm font-medium text-ink md:text-base">
                Four expressions of intent.
              </p>
              <div className="flex max-w-[92vw] flex-wrap items-center justify-center gap-1 rounded-full bg-ink p-1">
                {heroModels.map((m) => (
                  <button
                    key={m.id}
                    type="button"
                    onClick={() => setHeroModelId(m.id)}
                    aria-pressed={heroModelId === m.id}
                    className={
                      'rounded-full px-3.5 py-1.5 font-body text-xs font-medium transition-colors ' +
                      (heroModelId === m.id
                        ? 'text-white'
                        : 'text-white/40 hover:text-white/70')
                    }
                  >
                    {m.model}
                  </button>
                ))}
              </div>
              <p className="text-center font-body text-sm text-ink-muted md:text-base">
                {activeHeroModel.tagline}
              </p>
            </div>
          </div>

          <HeroHud
            power={specValue('Power')}
            topSpeed={specValue('Top Speed')}
            zeroToSixty={specValue('0–60')}
          />
        </div>
      </section>

      {/* Curated collection — right below the hero, so the vehicle the
          visitor just watched spin becomes one card in a larger set
          immediately, before any narrative copy intervenes. */}
      <section id="collection" className="border-t border-ink/10 bg-stone">
        <div className="mx-auto max-w-[1200px] px-6 py-24 md:px-10 md:py-32">
          <div className="text-center">
            <p className="eyebrow flex items-center justify-center gap-3 text-accent">
              <span className="h-px w-6 bg-accent/40" aria-hidden="true" />
              The collection
              <span className="h-px w-6 bg-accent/40" aria-hidden="true" />
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold text-ink md:text-4xl">
              Choose Your Expression
            </h2>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {collectionPreview.map((v) => (
              <CollectionCard key={v.marque + v.model} {...v} />
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy — an editorial pause right after the grid, reframing
          what the visitor just scrolled through as a curated set rather
          than inventory. See PRD §05. */}
      <section className="border-t border-ink/10 bg-stone-raised/40">
        <div className="mx-auto max-w-[1200px] px-6 py-24 md:px-10 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-center"
          >
            <p className="eyebrow flex items-center justify-center gap-3 text-accent">
              <span className="h-px w-6 bg-accent/40" aria-hidden="true" />
              The philosophy
              <span className="h-px w-6 bg-accent/40" aria-hidden="true" />
            </p>
            <h2 className="mt-4 text-4xl font-semibold text-ink md:text-5xl">
              History Over Horsepower
            </h2>
            <div className="mx-auto mt-8 h-px w-12 bg-ink/15" aria-hidden="true" />
          </motion.div>

          <div className="mt-16 grid grid-cols-1 gap-12 sm:grid-cols-3 sm:gap-8 md:mt-20">
            {philosophyPillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.1 }}
                className="relative text-center"
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 -top-7 select-none text-6xl font-semibold text-ink/[0.06] md:-top-8 md:text-7xl"
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="relative text-xl font-semibold text-ink">{p.title}</h3>
                <p className="relative mx-auto mt-3 max-w-xs font-body text-sm leading-relaxed text-ink-muted">
                  {p.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <MarqueStrip />

      {/* Closing CTA — the dark "final ask" band that replaces the removed
          appointment form's role of converting an interested visitor.
          "Request a Viewing" is a mailto: for now — reinstate a real form
          here if/when that flow comes back. See PRD §04 G3. */}
      <section className="relative overflow-hidden bg-ink">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.06),transparent_65%)]" />
        <div className="relative mx-auto max-w-[1200px] px-6 py-24 text-center md:px-10 md:py-32">
          <p className="eyebrow flex items-center justify-center gap-3 text-accent">
            <span className="h-px w-6 bg-accent/40" aria-hidden="true" />
            Begin your journey
            <span className="h-px w-6 bg-accent/40" aria-hidden="true" />
          </p>
          <h2 className="mx-auto mt-4 max-w-xl text-4xl font-semibold text-white md:text-5xl">
            Step Into the Collection
          </h2>
          <p className="mx-auto mt-5 max-w-md font-body text-white/70">
            Every vehicle here tells a story of its own. Explore the collection and find
            the one that's yours.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#collection"
              className="rounded-sm bg-white px-6 py-3 text-xs font-semibold uppercase tracking-[0.08em] text-ink transition-transform duration-200 hover:-translate-y-0.5"
            >
              View the Collection
            </a>
            <a
              href="mailto:enquiries@mrautosalon.com"
              className="rounded-sm border border-white/30 px-6 py-3 text-xs font-semibold uppercase tracking-[0.08em] text-white transition-colors duration-200 hover:border-white"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
