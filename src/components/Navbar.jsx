import { Menu } from 'lucide-react'
import { useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'

function Navbar() {
  const [open, setOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 24, mass: 0.4 })

  const navItems = [
    { href: '#work', label: 'Work' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      {/* Scroll progress bar */}
      <motion.div
        className="origin-left h-[2px] bg-gradient-to-r from-white/70 via-white to-white/70"
        style={{ scaleX }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur supports-[backdrop-filter]:bg-slate-900/40"
        >
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#" className="inline-flex items-center gap-3">
              <motion.div
                initial={{ scale: 0.8, rotate: -6, opacity: 0 }}
                animate={{ scale: 1, rotate: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="h-8 w-8 rounded-lg bg-gradient-to-br from-red-400 to-rose-600 shadow-lg"
              />
              <span className="text-white font-semibold tracking-tight">Nova Studio</span>
            </a>

            <nav className="hidden md:flex items-center gap-6">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  whileHover={{ y: -2 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  className="text-slate-200/80 hover:text-white transition-colors"
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                whileTap={{ scale: 0.98 }}
                whileHover={{ y: -1 }}
                className="inline-flex items-center rounded-lg bg-white/90 px-4 py-2 text-slate-900 font-medium hover:bg-white transition-colors"
              >
                Hire Me
              </motion.a>
            </nav>

            <button className="md:hidden text-white/90" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
              <Menu size={24} />
            </button>
          </div>

          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="md:hidden border-t border-white/10 px-4 py-3"
            >
              <div className="flex flex-col gap-3">
                {navItems.map((item) => (
                  <a key={item.href} href={item.href} className="text-slate-200/80 hover:text-white transition-colors" onClick={() => setOpen(false)}>
                    {item.label}
                  </a>
                ))}
                <a href="#contact" className="inline-flex items-center justify-center rounded-lg bg-white/90 px-4 py-2 text-slate-900 font-medium hover:bg-white transition-colors" onClick={() => setOpen(false)}>
                  Hire Me
                </a>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </header>
  )
}

export default Navbar
