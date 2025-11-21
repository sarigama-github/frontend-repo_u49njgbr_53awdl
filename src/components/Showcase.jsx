import { motion } from 'framer-motion'

function Showcase() {
  const projects = [
    {
      title: 'Isometric City Tiles',
      desc: 'Modular tilekit with interactive pathfinding and dynamic lighting.',
    },
    {
      title: 'Tactile UI Systems',
      desc: 'Motion frameworks for HUDs, radial menus and in-world controls.',
    },
    {
      title: 'Procedural Environments',
      desc: 'Systems-driven biomes with palette-driven mood controls.',
    },
  ]

  const card = {
    initial: { opacity: 0, y: 14 },
    animate: { opacity: 1, y: 0 },
  }

  return (
    <section id="work" className="relative bg-slate-950 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">Selected Work</h2>
          <a href="#contact" className="text-white/70 hover:text-white">See availability →</a>
        </div>

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '0px 0px -100px 0px' }}
          transition={{ staggerChildren: 0.12 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((p, i) => (
            <motion.div key={i} variants={card} transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }} className="group rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.03] p-6 shadow-lg transition">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                className="aspect-[16/10] rounded-xl bg-white/5 mb-4 ring-1 ring-white/10 overflow-hidden"
              >
                <div className="h-full w-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.08),transparent_60%)]" />
              </motion.div>
              <h3 className="text-white font-medium tracking-tight">{p.title}</h3>
              <p className="mt-1 text-white/70 text-sm">{p.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Showcase
