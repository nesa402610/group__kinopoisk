export function HomepageCard({
  name, year, rating, img, id, genres,
}) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg w-1/5 bg-black m-2">
      <img className="w-full" src={img} alt="Sunset in the mountains" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-400 text-base">
          ID:
          {' '}
          {id}
        </p>
        <p className="text-gray-400 text-base">
          Год:
          {' '}
          {year}
        </p>
        <p className="text-gray-400 text-base">
          Рейтинг:
          {' '}
          {rating}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        {genres.map((genre) => <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{genre.genre}</span>)}

      </div>
    </div>
  )
}
