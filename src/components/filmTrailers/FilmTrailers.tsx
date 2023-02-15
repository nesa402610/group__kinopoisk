import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

export function filterVideos(videos:any){
  const ids = videos.filter((e: { site: string }) => e.site === 'YOUTUBE').map((e: { url: string }) => {
    // eslint-disable-next-line no-useless-escape
    const regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/
    const match = e.url.match(regExp)
    // @ts-ignore
    return { ...e, id: match[2] }
  })
  return ids
}

export function FilmTrailers({ ids }: any) {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 0 },
      items: 1,
    },

  }
  // @ts-ignore
  return (
    <div className="flex flex-col gap-4">
      <Carousel className="" responsive={responsive}>
        {ids.map((id: any) => (
          <div key={id.name}>
            <div className="flex gap-1 items-baseline">
              <h1 className="text-2xl font-bold">
                {id.name}
              </h1>
            </div>
            <div className="rounded-lg overflow-hidden w-full h-full">

              <iframe title={id.name} width="100%" className="aspect-video" src={`https://www.youtube.com/embed/${id.id}`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
            </div>

          </div>
        ))}
      </Carousel>
    </div>
  )
}
