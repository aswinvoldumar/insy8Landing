import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Moon, Sun, X } from 'lucide-react'

export default function ImageLightbox({
  open,
  onClose,
  lightSrc,
  darkSrc,
  showLight,
  onThemeChange,
  reduceMotion,
}) {
  const closeRef = useRef(null)

  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [open, onClose])

  useEffect(() => {
    if (open) closeRef.current?.focus()
  }, [open])

  if (typeof document === 'undefined') return null

  const fade = reduceMotion ? 0.12 : 0.22
  const imgEase = reduceMotion ? 0.1 : 0.28

  return createPortal(
    <AnimatePresence>
      {open ? (
        <motion.div
          key="hero-lightbox"
          className="fixed inset-0 z-[100]"
          role="dialog"
          aria-modal="true"
          aria-label="Enlarged product preview"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: fade }}
        >
          <motion.button
            type="button"
            aria-label="Close preview"
            className="absolute inset-0 z-0 bg-black/92"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: fade }}
            onClick={onClose}
          />

          <button
            ref={closeRef}
            type="button"
            aria-label="Close"
            className="absolute right-3 top-3 z-20 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-black/40 text-white backdrop-blur-sm transition hover:bg-black/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/80 sm:right-5 sm:top-5"
            onClick={onClose}
          >
            <X className="h-5 w-5" aria-hidden />
          </button>

          <div className="pointer-events-none absolute inset-0 z-10 flex flex-col items-center justify-center gap-5 p-4 sm:gap-6 sm:p-6">
            <motion.img
              key={showLight ? 'lb-light' : 'lb-dark'}
              src={showLight ? lightSrc : darkSrc}
              alt={
                showLight
                  ? 'insy8.ai dashboard preview, light theme'
                  : 'insy8.ai dashboard preview, dark theme'
              }
              initial={{ opacity: 0, scale: reduceMotion ? 1 : 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: reduceMotion ? 1 : 0.98 }}
              transition={{ duration: imgEase, ease: [0.22, 1, 0.36, 1] }}
              className="pointer-events-auto max-h-[min(90vh,900px)] w-full max-w-[min(96vw,1200px)] object-contain select-none"
              draggable={false}
              onClick={(e) => e.stopPropagation()}
            />

            <div className="pointer-events-auto flex justify-center">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  onThemeChange(!showLight)
                }}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/50 px-5 py-2.5 text-sm font-medium text-white shadow-lg backdrop-blur-md transition hover:border-white/30 hover:bg-black/65 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/80 sm:px-6 sm:py-3 sm:text-base"
              >
                {showLight ? (
                  <>
                    <Moon className="h-4 w-4 shrink-0 text-indigo-300" aria-hidden />
                    Dark mode
                  </>
                ) : (
                  <>
                    <Sun className="h-4 w-4 shrink-0 text-amber-300" aria-hidden />
                    Light mode
                  </>
                )}
              </button>
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>,
    document.body,
  )
}
