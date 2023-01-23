export function AboutPage() {
  const authors = [
    {
      name: 'Феррис Аргайл',
      info: 'инфа',
    },
    {
      name: 'Владимир Матвеев',
      info: 'инфа',
    },
  ]
  return (
    <div className="w-full container">
      <div>
        <h1 className="text-2xl font-bold text-center my-4">Над проектом работали</h1>
        <div className="flex gap-4">
          {authors.map((author) => (
            <div className="bg-neutral-700 p-4 flex-1 rounded-lg">
              <h2 className="font-bold">{author.name}</h2>
              <div>
                {author.info}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
