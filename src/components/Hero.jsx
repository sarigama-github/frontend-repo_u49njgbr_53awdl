import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative min-h-[88vh] w-full overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 pointer-events-none flex min-h-[88vh] items-center">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/90 ring-1 ring-white/20 backdrop-blur">
              Interactive 3D • Minimal • Responsive
            </span>
            <h1 className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white">
              Game Design Portfolio
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-white/80">
              Clean, smooth and immersive — explore prototypes, environments and systems with a refined aesthetic and tactile interactions.
            </p>
            <div className="pointer-events-auto mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#work" className="inline-flex items-center justify-center rounded-xl bg-white text-slate-900 px-5 py-3 font-medium shadow transition hover:shadow-lg">
                View Work
              </a>
              <a href="#contact" className="inline-flex items-center justify-center rounded-xl bg-white/10 text-white px-5 py-3 font-medium ring-1 ring-white/20 backdrop-blur transition hover:bg-white/15">
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black" />
    </section>
  )
}

export default Hero
