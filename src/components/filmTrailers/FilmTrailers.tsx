import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { useGetFilmVideosQuery } from '../../API/kinopoiskAPI'
import { Video } from '../../types/types'
import { Loader } from '../loader/Loader'

function filterVideos(videos: Video[]): Video[] {
  return videos.filter((e) => e.site === 'YOUTUBE').map((e) => {
    // eslint-disable-next-line no-useless-escape
    const regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/
    const match = e.url.match(regExp)
    return match ? {...e, id: match[2]} : e
  })
}

export function FilmTrailers({ID} : {ID : string}) {
  const {data: videos, isLoading: videoLoad, isSuccess} = useGetFilmVideosQuery(ID)
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 0 },
      items: 1,
    },

  }

  if(videoLoad || !videos || !isSuccess) return <Loader />
  const filteredVideos = filterVideos(videos.items)
  if(filteredVideos.length === 0){
    return <></>
  }
  return (
        <div className="flex flex-col gap-4 bg-neutral-700 p-4 rounded-lg">
          <div className="flex flex-col gap-4">
      <Carousel className="" responsive={responsive} showDots>
        {filteredVideos.slice(0, 3).map((video) => (
          <div key={video.name}>
            <div className="flex gap-1 items-baseline">
              <h1 className="text-2xl font-bold">
                {video.name}
              </h1>
            </div>
            <div className="rounded-lg overflow-hidden w-full h-full">

              <iframe title={video.name} width="100%" className="aspect-video" src={`https://www.youtube.com/embed/${video.id}`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
            </div>

          </div>
        ))}
      </Carousel>
    </div>
        </div>
            
  )
}
