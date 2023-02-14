import React from "react";

export function ShortInfo({ title, children }: any) {
  return (
    <div className="flex flex-col items-center">
      {children}
      <span className="text-sm">{title}</span>
    </div>
  )
}
