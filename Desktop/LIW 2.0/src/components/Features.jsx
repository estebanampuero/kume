import React from 'react'
import { motion } from 'framer-motion'
import { FEATURES } from '../data/landingData'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const stagger = (delay = 0.1) => ({
  hidden: {},
  show: { transition: { staggerChildren: delay } },
})

export default function Features() {
  return (
    <section id="features" className="mx-auto max-w-7xl px-4 py-20">
      <motion.div variants={stagger(0.12)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
        <motion.h2 variants={fadeUp} className="text-balance text-center text-3xl font-semibold tracking-tight text-neutral-900 md:text-4xl dark:text-white">
          Todo lo necesario para escalar tu atención y ventas
        </motion.h2>
        <motion.p variants={fadeUp} className="mx-auto mt-3 max-w-2xl text-center text-neutral-600 md:text-lg dark:text-neutral-300">
          Conecta canales, automatiza tareas y mide resultados en un solo lugar.
        </motion.p>
        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => (
            <motion.div key={i} variants={fadeUp} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900">
              <div className="mb-3 inline-flex rounded-xl bg-neutral-100 p-2 dark:bg-neutral-800">
                <f.icon className="h-5 w-5" />
              </div>
              <div className="text-lg font-medium text-neutral-900 dark:text-neutral-100">{f.title}</div>
              <div className="mt-1 text-neutral-600 dark:text-neutral-300">{f.desc}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}