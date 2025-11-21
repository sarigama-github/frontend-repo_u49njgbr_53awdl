import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

function Hero() {
  return (
    <section className="relative min-h-[88vh] w-full overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* content */}
      <div className="relative z-10 pointer-events-none flex min-h-[88vh] items-center">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.7 }}
              className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/90 ring-1 ring-white/20 backdrop-blur"
            >
              Interactive 3D • Minimal • Responsive
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white"
            >
              Game Design Portfolio
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="mt-4 text-lg sm:text-xl text-white/80"
            >
              Clean, smooth and immersive — explore prototypes, environments and systems with a refined aesthetic and tactile interactions.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="pointer-events-auto mt-8 flex flex-col sm:flex-row gap-3"
            >
              <motion.a
                whileTap={{ scale: 0.98 }}
                whileHover={{ y: -2 }}
                href="#work"
                className="inline-flex items-center justify-center rounded-xl bg-white text-slate-900 px-5 py-3 font-medium shadow transition hover:shadow-lg"
              >
                View Work
              </motion.a>
              <motion.a
                whileTap={{ scale: 0.98 }}
                whileHover={{ y: -2 }}
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl bg-white/10 text-white px-5 py-3 font-medium ring-1 ring-white/20 backdrop-blur transition hover:bg-white/15"
              >
                Get in Touch
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* soft vignette and shimmer */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black" />
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 1.2, duration: 1.2 }}
        className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/10 to-transparent"
      />
    </section>
  )
}

export default Hero
