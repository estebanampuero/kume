import React from 'react'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { PRICING } from '../data/landingData'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const stagger = (delay = 0.1) => ({
  hidden: {},
  show: { transition: { staggerChildren: delay } },
})

export default function Pricing() {
  return (
    <section id="precios" className="mx-auto max-w-7xl px-4 py-20">
      <motion.div variants={stagger(0.12)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
        <motion.h2 variants={fadeUp} className="text-balance text-center text-3xl font-semibold tracking-tight text-neutral-900 md:text-4xl dark:text-white">
          Planes simples, escalables y sin fricción
        </motion.h2>
        <motion.p variants={fadeUp} className="mx-auto mt-3 max-w-2xl text-center text-neutral-600 md:text-lg dark:text-neutral-300">
          Precios de ejemplo — reemplázalos por los reales; todos los textos son editables.
        </motion.p>
        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
          {PRICING.map((p, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className={`relative rounded-2xl border p-6 shadow-sm transition hover:shadow-md dark:border-neutral-800 ${
                p.highlighted
                  ? 'border-indigo-300 bg-gradient-to-b from-indigo-50 to-white dark:border-indigo-900/50 dark:from-indigo-950/40 dark:to-neutral-900'
                  : 'border-neutral-200 bg-white dark:bg-neutral-900'
              }`}
            >
              {p.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full border border-indigo-200 bg-white px-3 py-1 text-xs font-medium text-indigo-700 shadow-sm dark:border-indigo-900/40 dark:bg-neutral-900 dark:text-indigo-300">
                  Recomendado
                </div>
              )}
              <div className="text-sm text-neutral-500 dark:text-neutral-400">{p.name}</div>
              <div className="mt-2 text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
                {p.price} <span className="text-base font-normal text-neutral-500 dark:text-neutral-400">{p.cadence}</span>
              </div>
              <ul className="mt-4 space-y-2 text-sm">
                {p.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-2 text-neutral-700 dark:text-neutral-200">
                    <Check className="mt-0.5 h-4 w-4 shrink-0" /> {f}
                  </li>
                ))}
              </ul>
              <a href="#" className={`mt-6 inline-flex w-full items-center justify-center rounded-xl px-4 py-2 text-sm font-medium transition ${
                p.highlighted
                  ? 'bg-neutral-900 text-white hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200'
                  : 'border border-neutral-300 text-neutral-800 hover:bg-neutral-50 dark:border-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-800'
              }`}>
                {p.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}