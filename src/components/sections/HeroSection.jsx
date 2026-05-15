import { useState } from 'react'
import { MoveRight } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import Container from '../ui/Container.jsx'
import Button from '../ui/Button.jsx'
import ImageLightbox from '../ui/ImageLightbox.jsx'
import heroWhite from '../../assets/images/app/white.png'
import heroDark from '../../assets/images/app/dark.png'

export default function HeroSection() {
  const [showLight, setShowLight] = useState(true)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const reduceMotion = useReducedMotion()

  const duration = reduceMotion ? 0.15 : 0.45
  const ease = [0.22, 1, 0.36, 1]

  return (
    <section id="top" className="relative pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24">
      <ImageLightbox
        open={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        lightSrc={heroWhite}
        darkSrc={heroDark}
        showLight={showLight}
        onThemeChange={setShowLight}
        reduceMotion={reduceMotion}
      />

      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-10">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-xl"
          >
            <h1 className="text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-[3.25rem] lg:leading-[1.05]">
              <span className="block">Your Data.</span>
              <span className="block">Your Questions.</span>
              <span className="mt-1 block bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 bg-clip-text text-transparent">
                AI-Powered Growth.
              </span>
            </h1>

            <p className="mt-6 text-pretty text-base leading-relaxed text-zinc-400 sm:text-lg">
              Insy8.ai connects to your company data, understands your questions, and delivers instant
              insights with AI-powered intelligence.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button variant="primary" size="lg" className="rounded-full px-7 shadow-blue-500/30">
                Get Started Free
                <MoveRight className="h-4 w-4" aria-hidden />
              </Button>
              <Button variant="secondary" size="lg" className="rounded-full px-7">
                See Demo
                <MoveRight className="h-4 w-4" aria-hidden />
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="relative"
          >
            <div
              className="pointer-events-none absolute -inset-6 rounded-[2rem] bg-gradient-to-r from-blue-500/25 via-indigo-500/20 to-purple-500/25 blur-2xl"
              aria-hidden
            />

            <motion.div
              animate={reduceMotion ? undefined : { y: [0, -10, 0] }}
              transition={reduceMotion ? undefined : { duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="relative"
            >
              <motion.div
                role="button"
                tabIndex={0}
                layout
                aria-haspopup="dialog"
                aria-expanded={lightboxOpen}
                aria-label="Open full-size product preview"
                whileHover={reduceMotion ? undefined : { scale: 1.01 }}
                whileTap={reduceMotion ? undefined : { scale: 0.995 }}
                transition={{ type: 'spring', stiffness: 420, damping: 28 }}
                className="group relative w-full cursor-pointer overflow-hidden rounded-3xl border border-white/10 bg-[#071028]/90 shadow-2xl shadow-black/50 ring-1 ring-white/10 outline-none focus-visible:ring-2 focus-visible:ring-blue-400/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[#020617]"
                onClick={() => setLightboxOpen(true)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    setLightboxOpen(true)
                  }
                }}
              >
                <div className="relative aspect-[16/11] w-full bg-gradient-to-b from-slate-950/40 to-slate-950/80 sm:aspect-[16/10]">
                  <motion.img
                    key={showLight ? 'hero-light' : 'hero-dark'}
                    src={showLight ? heroWhite : heroDark}
                    alt={
                      showLight
                        ? 'insy8.ai dashboard preview, light theme'
                        : 'insy8.ai dashboard preview, dark theme'
                    }
                    loading="eager"
                    decoding="async"
                    draggable={false}
                    className="absolute inset-0 h-full w-full object-contain p-2 sm:p-3"
                    initial={{ opacity: 0.92 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration, ease }}
                  />

                  <div
                    className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10"
                    aria-hidden
                  />
                </div>

                <div className="pointer-events-none absolute bottom-3 left-1/2 z-10 -translate-x-1/2 sm:bottom-4">
                  <motion.span
                    layout
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-[#020617]/95 px-3 py-1.5 text-[11px] font-medium text-zinc-200 shadow-lg sm:text-xs"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35, duration: 0.35 }}
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.65)]" aria-hidden />
                    Click to view full size
                  </motion.span>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
