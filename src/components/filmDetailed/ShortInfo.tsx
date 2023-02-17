import React from "react";

export function ShortInfo({ title, children }: {title: string, children: string | JSX.Element | JSX.Element[]}) {
  return (
    <div className="flex flex-col items-center">
      {children}
      <span className="text-sm">{title}</span>
    </div>
  )
}
