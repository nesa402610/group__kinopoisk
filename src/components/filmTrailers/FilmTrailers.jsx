import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

export function FilmTrailers({ videos }) {
  console.log(videos)
  const ids = videos.filter((e) => e.site === 'YOUTUBE').map((e) => {
    // eslint-disable-next-line no-useless-escape
    const regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/
    const match = e.url.match(regExp)
    return { ...e, id: match[2] }
  })
  console.log(ids)
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 0 },
      items: 1,
    },

  }
  return (
    <div className="flex flex-col gap-4">
      <Carousel className="" responsive={responsive}>
        {ids.map((e) => (
          <div key={e.name}>
            <div className="flex gap-1 items-baseline">
              <h1 className="text-2xl font-bold">
                {e.name}
              </h1>
            </div>
            <div className="rounded-lg overflow-hidden w-full h-full">

              <iframe title={e.name} width="100%" className="aspect-video" src={`https://www.youtube.com/embed/${e.id}`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
            </div>

          </div>
        ))}
      </Carousel>
    </div>
  )
}
