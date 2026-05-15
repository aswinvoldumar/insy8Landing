import { motion } from 'framer-motion'

const variants = {
  primary:
    'bg-brand-gradient-btn font-semibold text-white shadow-brand border border-white/15 hover:shadow-brand-lg [text-shadow:0_1px_2px_rgba(0,0,0,0.25)]',
  secondary:
    'border border-white/25 bg-white/10 font-medium text-zinc-100 backdrop-blur-md hover:border-brand-cyan/40 hover:bg-white/15 hover:text-white',
  ghost: 'text-zinc-300 hover:text-white hover:bg-white/5',
}

const sizes = {
  md: 'px-5 py-2.5 text-sm font-medium',
  lg: 'px-6 py-3 text-base font-medium',
}

const MotionButton = motion.button

export default function Button({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}) {
  const classes = [
    'inline-flex items-center justify-center gap-2 rounded-xl transition-colors focus-brand disabled:pointer-events-none disabled:opacity-50',
    variants[variant] ?? variants.primary,
    sizes[size] ?? sizes.md,
    className,
  ].join(' ')

  return (
    <MotionButton
      type="button"
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.98 }}
      className={classes}
      {...props}
    >
      {children}
    </MotionButton>
  )
}
