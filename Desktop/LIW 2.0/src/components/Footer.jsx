import React from 'react'

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white py-10 dark:border-neutral-800 dark:bg-neutral-950">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-lg bg-gradient-to-tr from-indigo-500 via-sky-500 to-cyan-400" />
            <span className="font-semibold text-neutral-900 dark:text-white">Tu Marca</span>
          </div>
          <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-300">
            Plataforma conversacional para automatizar soporte y ventas. Este es un clon educativo; reemplaza textos y assets antes de publicar.
          </p>
        </div>
        <div>
          <div className="mb-2 font-semibold text-neutral-900 dark:text-white">Producto</div>
          <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-300">
            <li><a href="#productos" className="hover:underline">Suite</a></li>
            <li><a href="#features" className="hover:underline">Características</a></li>
            <li><a href="#precios" className="hover:underline">Precios</a></li>
          </ul>
        </div>
        <div>
          <div className="mb-2 font-semibold text-neutral-900 dark:text-white">Recursos</div>
          <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-300">
            <li><a href="#faq" className="hover:underline">FAQ</a></li>
            <li><a href="#" className="hover:underline">Guías</a></li>
            <li><a href="#" className="hover:underline">API</a></li>
          </ul>
        </div>
        <div>
          <div className="mb-2 font-semibold text-neutral-900 dark:text-white">Contacto</div>
          <ul className="space-y-1 text-sm text-neutral-600 dark:text-neutral-300">
            <li>contacto@tumarca.com</li>
            <li>LatAm — Remoto</li>
          </ul>
          <div className="mt-4 text-xs text-neutral-500 dark:text-neutral-400">© {new Date().getFullYear()} Tu Marca. Todos los derechos reservados.</div>
        </div>
      </div>
    </footer>
  )
}