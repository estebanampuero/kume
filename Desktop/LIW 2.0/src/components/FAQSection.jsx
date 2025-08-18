import React from 'react'
import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import { FAQ } from '../data/landingData'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const stagger = (delay = 0.1) => ({
  hidden: {},
  show: { transition: { staggerChildren: delay } },
})

export default function FAQSection() {
  return (
    <section id="faq" className="mx-auto max-w-5xl px-4 py-20">
      <motion.div variants={stagger(0.1)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
        <motion.h2 variants={fadeUp} className="text-balance text-center text-3xl font-semibold tracking-tight text-neutral-900 md:text-4xl dark:text-white">
          Preguntas frecuentes
        </motion.h2>
        <div className="mt-8 divide-y divide-neutral-200 rounded-2xl border border-neutral-200 bg-white dark:divide-neutral-800 dark:border-neutral-800 dark:bg-neutral-900">
          {FAQ.map((item, idx) => (
            <details key={idx} className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 px-6 py-5 text-neutral-900 transition hover:bg-neutral-50 dark:text-neutral-100 dark:hover:bg-neutral-800">
                <span className="font-medium">{item.q}</span>
                <ChevronRight className="h-5 w-5 transition group-open:rotate-90" />
              </summary>
              <div className="px-6 pb-6 text-neutral-700 dark:text-neutral-300">{item.a}</div>
            </details>
          ))}
        </div>
      </motion.div>
    </section>
  )
}