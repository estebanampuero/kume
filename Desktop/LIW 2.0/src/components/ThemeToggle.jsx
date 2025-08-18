import React from 'react'
import { Moon, Sun } from 'lucide-react'

export default function ThemeToggle() {
  const [dark, setDark] = React.useState(false)
  React.useEffect(() => {
    const stored = localStorage.getItem('theme')
    const prefers = window.matchMedia('(prefers-color-scheme: dark)').matches
    const isDark = stored ? stored === 'dark' : prefers
    setDark(isDark)
    document.documentElement.classList.toggle('dark', isDark)
  }, [])
  const toggle = () => {
    const next = !dark
    setDark(next)
    document.documentElement.classList.toggle('dark', next)
    localStorage.setItem('theme', next ? 'dark' : 'light')
  }
  return (
    <button
      onClick={toggle}
      className="inline-flex items-center gap-2 rounded-2xl border border-neutral-300/60 px-3 py-1.5 text-sm text-neutral-700 shadow-sm backdrop-blur-md transition hover:shadow dark:border-neutral-700 dark:text-neutral-200"
      aria-label="Cambiar tema"
    >
      {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
      <span>{dark ? 'Claro' : 'Oscuro'}</span>
    </button>
  )
}