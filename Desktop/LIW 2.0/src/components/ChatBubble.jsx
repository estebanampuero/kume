import React from 'react'

export default function ChatBubble({ author, text, right = false, accent = false }) {
  return (
    <div className={`flex ${right ? 'justify-end' : 'justify-start'}`}>
      <div className={`max-w-[85%] rounded-2xl border px-4 py-3 text-sm shadow-sm ${
        right
          ? 'border-indigo-200 bg-gradient-to-r from-indigo-50 to-cyan-50 dark:border-indigo-900/40 dark:from-indigo-950/40 dark:to-cyan-950/30'
          : 'border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900'
      }`}>
        <div className="mb-1 text-[10px] uppercase tracking-wide text-neutral-500 dark:text-neutral-400">{author}</div>
        <div className="text-neutral-800 dark:text-neutral-100">{text}</div>
        {accent && <div className="mt-2 h-1 w-12 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400" />}
      </div>
    </div>
  )
}