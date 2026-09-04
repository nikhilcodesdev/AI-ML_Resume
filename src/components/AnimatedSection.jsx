import { motion, useReducedMotion } from 'framer-motion'

const hidden = { opacity: 0, y: 28 }
const shown = { opacity: 1, y: 0 }

export default function AnimatedSection({
  children,
  className = '',
  delay = 0,
  as = 'div',
  id,
}) {
  const reduce = useReducedMotion()
  const Tag = motion[as] || motion.div

  return (
    <Tag
      id={id}
      className={className}
      initial={reduce ? shown : hidden}
      whileInView={shown}
      viewport={{ once: true, amount: 0.18 }}
      transition={
        reduce
          ? { duration: 0 }
          : { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }
      }
    >
      {children}
    </Tag>
  )
}

export function Stagger({ children, className = '', delay = 0.08 }) {
  const reduce = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: reduce ? 0 : delay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  )
}
