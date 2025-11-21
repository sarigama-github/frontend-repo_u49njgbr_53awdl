import { motion } from 'framer-motion'

function About() {
  return (
    <section id="about" className="relative bg-slate-950 py-20">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.03] p-8 ring-1 ring-inset ring-white/10"
        >
          <h2 className="text-white text-2xl sm:text-3xl font-semibold tracking-tight">Design Approach</h2>
          <p className="mt-4 text-white/80 leading-relaxed">
            I design playful systems that feel inevitable. Every interaction is tuned for flow — readable, tactile, and elegantly minimal. From rapid prototypes to shipped features, I balance performance with polish to make complex mechanics feel simple.
          </p>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-white/80 text-sm">
            {['Systems Thinking', 'Motion & Feedback', 'Accessibility & Clarity'].map((t) => (
              <motion.div
                key={t}
                whileHover={{ y: -2 }}
                className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10"
              >
                {t}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
