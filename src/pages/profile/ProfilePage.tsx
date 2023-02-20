import React, { useEffect, useState } from "react";
import { kinopoiskApi, useGetFilmsByIdsQuery } from "../../API/kinopoiskAPI";
import { FilmCard } from "../../components/filmCard/FilmCard";
import { Loader } from "../../components/loader/Loader";
import { FilmDetailed } from "../../types/types";

export function ProfilePage() {
  const [succesState, setSuccesState] = useState<FilmDetailed[]>([])
  const testIds = [...new Set(['548', '627',  '762', '324', '371', '405', '435', '448', '482', '1573', '1932', '2217', '2747', '2885', '3225', '3755', '3755', '4062', '4076', '4179', '4593', '4593', '4593', '4688', '5330', '5499', '6065', '6403', '6877', '6878', '6879', '6880', '6881', '6882', '6883', '6884', '6885', '6886', '6887', '40156', '56631', '60684', '61249', '77417', '77417', '77417', '77418', '77711', '80414', '87365', '87454', '94249', '94249', '94249', '94249', '94249', '94600', '95210', '95210'])] 
  
  const {data, isFetching, refetch} = useGetFilmsByIdsQuery([testIds[succesState.length]])
  setTimeout(()=>{
    if(!isFetching && data && succesState.length<testIds.length){
     refetch()
     setSuccesState([...new Set([...succesState, ...data])]) 
    }else{
      console.log(data, succesState)
    }
  })
  
  // if(isLoading || isFetching) return <Loader />
  if(1){
    console.log(succesState)
    const filtered = succesState.filter((e)=>e!==undefined && (e.nameRu) && (e.year) &&(e.ratingKinopoisk))
    return (
      <div className="flex justify-center mb-4 flex-wrap">
        {filtered.map((film) => (
          <FilmCard
            key={film.kinopoiskId}
            name={film.nameRu}
            year={film.year}
            rating={film.ratingKinopoisk}
            img={film.posterUrlPreview}
            id={film.kinopoiskId}
            genres={film.genres}
          />
        ))}
      </div>
    )
  }else return  <div>Неудача</div>
}
