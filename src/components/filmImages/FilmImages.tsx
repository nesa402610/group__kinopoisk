import React from 'react'
import Carousel from 'react-multi-carousel';
import { useGetPhotosByFilmIdQuery } from "../../API/kinopoiskAPI";
import { Loader } from '../loader/Loader';

export function FilmImages({ID} : {ID  :string }){
  const {data, isLoading, isSuccess} = useGetPhotosByFilmIdQuery(ID)
  console.log(data)
  const responsive = {
    desktop: {
      breakpoint: { max: 10000, min: 1024 },
      items: 1,
    },
  }
if(!data || isLoading || !isSuccess){
  return <Loader />}
const items = data.items
return (
  <div className='flex flex-col w-full'>
    <Carousel
        responsive={responsive}
        infinite
        autoPlay
        autoPlaySpeed={3000}
        showDots
      >
        {items.slice(0, 5).map((image) => 
          <div className='flex justify-center items-center h-72'>
            <img src={image.previewUrl} alt={image.previewUrl} className='object-contain h-full' />
          </div>
        )}
      </Carousel>
  </div>
)
}