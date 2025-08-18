import React from 'react'

export default function ActionCard({ icon: Icon, label }) {
  return (
    <div className="group rounded-2xl border border-neutral-200 bg-white p-4 text-center shadow-sm transition hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900">
      <Icon className="mx-auto h-5 w-5" />
      <div className="mt-2 text-sm text-neutral-700 dark:text-neutral-200">{label}</div>
    </div>
  )
}