export function FilmCardSmall({
  name, year, rating, img, id, genres,
}) {
  return (
    <div className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-black m-2 cursor-pointer relative h-72">
      <img className="w-full" src={img} alt="" />
      <div className="absolute bottom-0 text-white text-base w-full bg-black bg-opacity-80 text-sm p-2">
        {/* <div className="font-bold text-xl mb-2">{name}</div> */}
        {/* <p className="text-gray-400 text-base">
          ID:
          {' '}
          {id}
        </p> */}
        <p className="font-bold text-center m-1">{name}</p>
        <p>
          Год:
          {' '}
          {year}
        </p>
        <p>
          Рейтинг:
          {' '}
          {rating}
        </p>
      </div>
    </div>
  )
}
