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

  return (
    <section id="work" className="relative bg-slate-950 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">Selected Work</h2>
          <a href="#contact" className="text-white/70 hover:text-white">See availability →</a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <div key={i} className="group rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.03] p-6 shadow-lg transition hover:translate-y-[-2px]">
              <div className="aspect-[16/10] rounded-xl bg-white/5 mb-4 ring-1 ring-white/10" />
              <h3 className="text-white font-medium tracking-tight">{p.title}</h3>
              <p className="mt-1 text-white/70 text-sm">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Showcase
