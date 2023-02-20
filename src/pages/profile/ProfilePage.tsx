import React, { useEffect, useState } from "react";
import { kinopoiskApi, useGetFilmsByIdsQuery } from "../../API/kinopoiskAPI";
import { FilmCard } from "../../components/filmCard/FilmCard";
import { Loader } from "../../components/loader/Loader";
import { FilmDetailed } from "../../types/types";

export function ProfilePage() {
  const [succesState, setSuccesState] = useState<FilmDetailed[]>([])
  const testIds  = localStorage.getItem('favFilms') ? JSON.parse(localStorage.getItem('favFilms')!) : []
  const {data, isFetching, refetch} = useGetFilmsByIdsQuery(testIds)
  

  // if(isLoading || isFetching) return <Loader />
  if(1){
    console.log(data)
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
