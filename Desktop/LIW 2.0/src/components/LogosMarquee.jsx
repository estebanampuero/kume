import React from 'react'
import { LOGOS } from '../data/landingData'

export default function LogosMarquee() {
  return (
    <div className="relative border-y border-neutral-200 bg-white py-8 dark:border-neutral-800 dark:bg-neutral-950">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-4 text-center text-xs uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400">Confiado por equipos en LatAm</div>
      </div>
      <div className="overflow-hidden">
        <div className="flex animate-marquee gap-12 whitespace-nowrap px-4 [--speed:35s]">
          {LOGOS.map((l) => (
            <div key={l.id} className="h-8 w-28 shrink-0 rounded-md bg-neutral-200 dark:bg-neutral-800" />
          ))}
          {/* Duplicado para loop infinito */}
          {LOGOS.map((l) => (
            <div key={`d-${l.id}`} className="h-8 w-28 shrink-0 rounded-md bg-neutral-200 dark:bg-neutral-800" />
          ))}
        </div>
      </div>
      {/* La animación 'marquee' debe estar definida en tu tailwind.config.js */}
    </div>
  )
}