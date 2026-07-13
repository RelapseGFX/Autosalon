import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useGLTF } from '@react-three/drei'
import { vehicles } from '../lib/vehicles.js'

export default function CollectionCard({ marque, model, image, slug, identity }) {
  const modelPath = slug ? vehicles[slug]?.modelPath : null

  const content = (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      onMouseEnter={() => {
        // Preload the GLB on intent so the model-detail transition feels
        // instant rather than triggering a fresh fetch on click.
        if (modelPath) useGLTF.preload(modelPath)
      }}
      className="group flex flex-col overflow-hidden rounded-sm bg-stone shadow-sm transition-shadow duration-300 hover:shadow-lg"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-stone-raised">
        <img
          src={image}
          alt={`${marque} ${model}`}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
        />
      </div>
      <div className="flex flex-col items-center gap-1.5 px-6 py-8 text-center">
        <p className="font-display text-xl font-semibold text-ink">{model}</p>
        {identity && <p className="font-body text-sm text-ink-muted">{identity}</p>}
        {slug && (
          <span className="mt-3 inline-flex items-center gap-1.5 font-body text-sm font-semibold text-accent transition-colors group-hover:text-accent-strong">
            Explore <span aria-hidden="true">&rarr;</span>
          </span>
        )}
      </div>
    </motion.div>
  )

  if (!slug) return content

  return (
    <Link
      to={`/models/${slug}`}
      className="block rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
    >
      {content}
    </Link>
  )
}
