import { motion } from 'framer-motion'

export default function ScrollIndicator({ light = false }) {
  return (
    <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center pointer-events-none">
      <motion.span
        aria-hidden="true"
        className={light ? 'text-white/80' : 'text-ink-muted'}
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
      >
        &darr;
      </motion.span>
    </div>
  )
}
