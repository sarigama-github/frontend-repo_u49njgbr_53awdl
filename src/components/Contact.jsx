import { useState } from 'react'

function Contact() {
  const [status, setStatus] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('Sending...')
    setTimeout(() => setStatus('Sent! I will get back to you shortly.'), 600)
  }

  return (
    <section id="contact" className="relative bg-slate-950 py-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.03] p-8 ring-1 ring-inset ring-white/10">
          <h2 className="text-white text-2xl sm:text-3xl font-semibold tracking-tight">Let’s build something</h2>
          <p className="mt-2 text-white/70">Tell me a bit about your project, timeline and goals.</p>

          <form onSubmit={handleSubmit} className="mt-8 grid grid-cols-1 gap-4">
            <input className="rounded-xl bg-white/5 px-4 py-3 text-white placeholder-white/50 ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-white/30" placeholder="Your name" required />
            <input className="rounded-xl bg-white/5 px-4 py-3 text-white placeholder-white/50 ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-white/30" placeholder="Email" type="email" required />
            <textarea className="min-h-[140px] rounded-xl bg-white/5 px-4 py-3 text-white placeholder-white/50 ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-white/30" placeholder="Project details" required />
            <button className="mt-2 inline-flex justify-center rounded-xl bg-white px-5 py-3 font-medium text-slate-900 transition hover:shadow">
              Send Message
            </button>
          </form>
          {status && <p className="mt-4 text-white/80">{status}</p>}
        </div>
      </div>
    </section>
  )
}

export default Contact
