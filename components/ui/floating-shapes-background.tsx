'use client'

import { motion } from 'motion/react'

type Shape = {
  top: string
  left: string
  size: number
  kind: 'cube' | 'pyramid'
  duration: number
  delay: number
  rotate: number
}

const SHAPE_SIZE_SCALE = 0.55

const SHAPES: Shape[] = Array.from({ length: 52 }, (_, index) => {
  const column = index % 13
  const row = Math.floor(index / 13)

  return {
    top: `${8 + row * 21 + ((index * 7) % 9)}%`,
    left: `${4 + column * 7 + ((index * 11) % 6)}%`,
    size: (6 + (index % 8)) * SHAPE_SIZE_SCALE,
    kind: index % 2 === 0 ? 'cube' : 'pyramid',
    duration: 16 + (index % 10),
    delay: index * 0.45,
    rotate: ((index * 17) % 28) - 14,
  }
})

export function FloatingShapesBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.28),transparent_45%),radial-gradient(circle_at_80%_70%,rgba(120,130,160,0.18),transparent_42%)] dark:bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.04),transparent_45%),radial-gradient(circle_at_80%_70%,rgba(160,170,200,0.08),transparent_42%)]" />

      {SHAPES.map((shape, index) => (
        <motion.div
          key={`${shape.kind}-${index}`}
          className="absolute will-change-transform"
          style={{ top: shape.top, left: shape.left }}
          animate={{
            y: [0, -30, 0, 22, 0],
            x: [0, 14, 0, -12, 0],
            rotate: [shape.rotate, shape.rotate + 16, shape.rotate - 14, shape.rotate],
          }}
          transition={{
            duration: shape.duration,
            delay: shape.delay,
            repeat: Infinity,
            ease: 'easeInOut',
            repeatType: 'mirror',
          }}
        >
          <div
            className="border border-black/35 bg-black/25 dark:border-white/45 dark:bg-white/30"
            style={{
              width: shape.size,
              height: shape.size,
              clipPath:
                shape.kind === 'pyramid'
                  ? 'polygon(50% 0%, 0% 100%, 100% 100%)'
                  : 'none',
              borderRadius: shape.kind === 'cube' ? 2 : 0,
            }}
          />
        </motion.div>
      ))}
    </div>
  )
}