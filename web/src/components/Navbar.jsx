import { Link } from 'react-router-dom'

export default function Navbar({ transparent = false, showBack = false }) {
  return (
    <header
      className={
        transparent
          ? 'absolute left-0 right-0 top-0 z-20 bg-transparent'
          : 'sticky top-0 z-20 border-b border-ink/10 bg-stone/90 backdrop-blur'
      }
    >
      <nav className="mx-auto flex h-14 max-w-[1200px] items-center justify-between px-6 md:px-10">
        <div className="flex items-center gap-5">
          {showBack && (
            <>
              <Link
                to="/"
                className={
                  'flex items-center gap-2 text-[0.6875rem] font-semibold uppercase tracking-[0.14em] transition-colors ' +
                  (transparent ? 'text-white/90 hover:text-white' : 'text-ink hover:text-accent')
                }
              >
                <span aria-hidden="true">&larr;</span> Back
              </Link>
              <span
                aria-hidden="true"
                className={'h-4 w-px ' + (transparent ? 'bg-white/20' : 'bg-ink/15')}
              />
            </>
          )}
          <Link
            to="/"
            className={
              'flex items-center gap-2 font-display text-xs font-semibold uppercase tracking-[0.1em] ' +
              (transparent ? 'text-white' : 'text-ink')
            }
          >
            <img
              src="/mr-logo.svg"
              alt=""
              aria-hidden="true"
              className={'h-6 w-6 rounded-full ' + (transparent ? 'bg-white/90 p-0.5' : '')}
            />
            Mr. Autosalon
          </Link>
        </div>
        <div className="flex items-center gap-6">
          <Link
            to="/#collection"
            className={
              'hidden text-[0.6875rem] font-semibold uppercase tracking-[0.1em] transition-colors sm:block ' +
              (transparent ? 'text-white/80 hover:text-white' : 'text-ink-muted hover:text-ink')
            }
          >
            Collection
          </Link>
          <span
            className={
              'eyebrow ' + (transparent ? 'text-white/70' : 'text-ink-faint')
            }
          >
            By appointment
          </span>
        </div>
      </nav>
    </header>
  )
}
