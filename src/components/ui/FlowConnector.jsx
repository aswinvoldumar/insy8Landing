import { useId } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

export default function FlowConnector() {
  const reduceMotion = useReducedMotion()
  const uid = useId().replace(/:/g, '')
  const lineGradId = `flow-line-${uid}`
  const pulseGradId = `flow-pulse-${uid}`

  return (
    <motion.div
      className="hidden w-14 shrink-0 items-center justify-center self-center sm:w-16 lg:flex xl:w-20"
      aria-hidden
    >
      <svg
        viewBox="0 0 80 24"
        className="h-6 w-full overflow-visible"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id={lineGradId} x1="0" y1="0" x2="80" y2="0" gradientUnits="userSpaceOnUse">
            <stop stopColor="#7b6fff" stopOpacity="0.45" />
            <stop offset="0.5" stopColor="#9b8fff" stopOpacity="0.65" />
            <stop offset="1" stopColor="#4fd6ea" stopOpacity="0.45" />
          </linearGradient>
          <linearGradient id={pulseGradId} x1="0" y1="0" x2="1" y2="0">
            <stop stopColor="#7b6fff" />
            <stop offset="1" stopColor="#4fd6ea" />
          </linearGradient>
        </defs>

        <motion.line
          x1="2"
          y1="12"
          x2="78"
          y2="12"
          stroke={`url(#${lineGradId})`}
          strokeWidth="1.5"
          strokeDasharray="6 6"
          strokeLinecap="round"
          animate={reduceMotion ? { strokeDashoffset: 0 } : { strokeDashoffset: [0, -24] }}
          transition={{ duration: 1.1, repeat: Infinity, ease: 'linear' }}
        />

        {!reduceMotion && (
          <motion.circle
            r="3"
            cy="12"
            fill={`url(#${pulseGradId})`}
            animate={{
              cx: [6, 74, 74],
              opacity: [0, 1, 0],
            }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        )}

        <motion.path
          d="M68 8 L76 12 L68 16"
          stroke="#4fd6ea"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          animate={
            reduceMotion
              ? { opacity: 0.75 }
              : { opacity: [0.4, 1, 0.4], x: [0, 2, 0] }
          }
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        />
      </svg>
    </motion.div>
  )
}
