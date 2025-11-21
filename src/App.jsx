import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Showcase from './components/Showcase'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <Hero />
        <Showcase />
        <About />
        <Contact />
      </main>
      <footer className="border-t border-white/10 bg-slate-950 py-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 flex items-center justify-between text-white/60 text-sm">
          <p>© {new Date().getFullYear()} Nova Studio</p>
          <p>Made with a love for clean systems and tactile play</p>
        </div>
      </footer>
    </div>
  )
}

export default App
