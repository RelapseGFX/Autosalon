const marques = [
  { name: 'Porsche', src: '/logos/porsche.png' },
  { name: 'Audi', src: '/logos/audi.png' },
  { name: 'BMW', src: '/logos/bmw.png' },
  { name: 'Mercedes-Benz', src: '/logos/mercedes.png' },
]

export default function MarqueStrip() {
  return (
    <div className="border-y border-ink/10 bg-stone">
      <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-center gap-x-16 gap-y-6 px-6 py-10 md:px-10 md:py-12">
        {marques.map((m) => (
          <img
            key={m.name}
            src={m.src}
            alt={m.name}
            title={m.name}
            className="h-6 w-auto object-contain grayscale opacity-55 transition-opacity duration-200 hover:opacity-90 md:h-7"
          />
        ))}
      </div>
    </div>
  )
}
