import React from 'react'

export function FramedBlock({ title, children }: {title:string, children: string | JSX.Element}) {
  return (
    <div className="bg-neutral-800 rounded-lg">
      <div className="bg-neutral-900 py-2 px-4 rounded-t-lg">
        {title}
      </div>
      <div className="p-4">
        {children}
      </div>
    </div>
  )
}
