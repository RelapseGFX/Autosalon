// Fighter-jet HUD overlay for the 3D hero: minimal corner readouts, never
// touching the frame edge. Desktop-only — there's no spare width on mobile
// to hold these without crowding the model.

function HudStat({ value, label }) {
  return (
    <div>
      <p className="font-mono-tab text-lg font-semibold text-ink-muted lg:text-xl">{value}</p>
      <p className="eyebrow mt-1 text-ink-faint">{label}</p>
    </div>
  )
}

export default function HeroHud({ power, topSpeed, zeroToSixty }) {
  return (
    <>
      {/* Lower left — identity */}
      <div className="pointer-events-none absolute inset-x-0 bottom-8 z-10 hidden px-8 md:flex lg:bottom-12 lg:px-16">
        <div className="flex items-end gap-6">
          <HudStat value={power} label="Horsepower" />
          <div className="h-5 w-px bg-ink/15" />
          <HudStat value={topSpeed} label="Top Speed" />
        </div>
      </div>

      {/* Upper right — performance context, balanced against the logo */}
      <div className="pointer-events-none absolute inset-x-0 top-24 z-10 hidden justify-end px-8 md:flex lg:top-28 lg:px-16">
        <HudStat value={zeroToSixty} label="0–60 mph" />
      </div>
    </>
  )
}
