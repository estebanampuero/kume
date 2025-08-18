import React from 'react'
import { motion } from 'framer-motion'
import { Sparkles, Calendar, CreditCard, Plug, Bot, BarChart3, MessageSquare } from 'lucide-react'
import ChatBubble from './ChatBubble'
import ActionCard from './ActionCard'
import LogosMarquee from './LogosMarquee'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const stagger = (delay = 0.1) => ({
  hidden: {},
  show: { transition: { staggerChildren: delay } },
})

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* fondo con gradientes */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-br from-cyan-400/40 via-indigo-400/30 to-fuchsia-400/30 blur-3xl dark:from-cyan-500/20 dark:via-indigo-500/20 dark:to-fuchsia-500/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.6),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.3),transparent_25%)] dark:bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.05),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.04),transparent_25%)]" />
      </div>
      <div className="mx-auto max-w-7xl px-4 pb-16 pt-12 md:pb-24 md:pt-20">
        <motion.div variants={stagger()} initial="hidden" animate="show" className="mx-auto max-w-3xl text-center">
          <motion.div variants={fadeUp} className="mb-4 inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white/70 px-3 py-1 text-xs text-neutral-700 backdrop-blur dark:border-neutral-800 dark:bg-neutral-900/70 dark:text-neutral-300">
            <Sparkles className="h-4 w-4" /> Nuevo: plantillas de agentes en 15 min
          </motion.div>
          <motion.h1 variants={fadeUp} className="text-balance text-4xl font-bold leading-tight tracking-tight text-neutral-900 md:text-6xl dark:text-white">
            Automatiza tus conversaciones y <span className="bg-gradient-to-r from-indigo-600 via-sky-500 to-cyan-400 bg-clip-text text-transparent">crece 10×</span> con IA
          </motion.h1>
          <motion.p variants={fadeUp} className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-neutral-600 md:text-xl dark:text-neutral-300">
            Responde en WhatsApp, Instagram y webchat, agenda citas y realiza acciones reales en tus sistemas — sin código.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a href="#precios" className="inline-flex items-center justify-center rounded-2xl bg-neutral-900 px-5 py-3 text-white shadow transition hover:shadow-lg dark:bg-white dark:text-neutral-900">Comenzar gratis</a>
            <a href="#demo" className="inline-flex items-center justify-center rounded-2xl border border-neutral-300 px-5 py-3 text-neutral-800 transition hover:bg-neutral-50 dark:border-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-800">Solicitar demo</a>
          </motion.div>
        </motion.div>
        <motion.div variants={fadeUp} initial="hidden" animate="show" className="mx-auto mt-12 max-w-5xl overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-xl dark:border-neutral-800 dark:bg-neutral-900">
          <div className="grid gap-0 md:grid-cols-2">
            <div className="p-6 md:p-8">
              <div className="mb-3 text-xs uppercase tracking-wider text-neutral-500 dark:text-neutral-400">Vista de conversación</div>
              <div className="space-y-3">
                <ChatBubble author="Cliente" text="Hola! Necesito agendar una consulta para mañana." />
                <ChatBubble author="Agente IA" text="¡Claro! ¿Prefieres 10:00 o 16:30?" right accent />
                <ChatBubble author="Cliente" text="16:30 está perfecto." />
                <ChatBubble author="Agente IA" text="Listo. Te envié la confirmación y el link de pago." right accent />
              </div>
            </div>
            <div className="border-t border-neutral-200 p-6 md:border-l md:border-t-0 md:p-8 dark:border-neutral-800">
              <div className="mb-3 text-xs uppercase tracking-wider text-neutral-500 dark:text-neutral-400">Panel de acciones</div>
              <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
                <ActionCard icon={Calendar} label="Reservar" />
                <ActionCard icon={CreditCard} label="Cobrar" />
                <ActionCard icon={Plug} label="Actualizar CRM" />
                <ActionCard icon={Bot} label="Responder" />
                <ActionCard icon={BarChart3} label="Atribución" />
                <ActionCard icon={MessageSquare} label="Etiquetar" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <LogosMarquee />
    </section>
  )
}