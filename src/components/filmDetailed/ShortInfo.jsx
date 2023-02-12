export function ShortInfo({ title, children }) {
  return (
    <div className="flex flex-col items-center">
      {children}
      <span className="text-sm">{title}</span>
    </div>
  )
}
