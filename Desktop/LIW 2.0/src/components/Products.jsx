import React from 'react'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { PRODUCTS } from '../data/landingData'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const stagger = (delay = 0.1) => ({
  hidden: {},
  show: { transition: { staggerChildren: delay } },
})

export default function Products() {
  return (
    <section id="productos" className="mx-auto max-w-7xl px-4 py-20">
      <motion.div variants={stagger(0.15)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
        <motion.h2 variants={fadeUp} className="text-balance text-center text-3xl font-semibold tracking-tight text-neutral-900 md:text-4xl dark:text-white">
          Suite modular que crece contigo
        </motion.h2>
        <motion.p variants={fadeUp} className="mx-auto mt-3 max-w-2xl text-center text-neutral-600 md:text-lg dark:text-neutral-300">
          Elige solo lo que necesitas y conéctalo a tu stack sin fricción.
        </motion.p>
        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {PRODUCTS.map((p, idx) => (
            <motion.div key={idx} variants={fadeUp} className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-900">
              <div className="text-xs text-neutral-500 dark:text-neutral-400">{p.tag}</div>
              <div className="mt-1 text-xl font-semibold text-neutral-900 dark:text-neutral-100">{p.title}</div>
              <div className="mt-1 text-neutral-600 dark:text-neutral-300">{p.desc}</div>
              <ul className="mt-4 space-y-2 text-sm">
                {p.points.map((pt, i) => (
                  <li key={i} className="flex items-start gap-2 text-neutral-700 dark:text-neutral-200">
                    <Check className="mt-0.5 h-4 w-4 shrink-0" /> {pt}
                  </li>
                ))}
              </ul>
              <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gradient-to-br from-indigo-500/20 to-cyan-400/20 blur-xl" />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}