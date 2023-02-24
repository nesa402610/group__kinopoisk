import React from "react";
import { useGetFilmsByIdsQuery } from "../../API/kinopoiskAPI";
import { FilmCard } from "../../components/filmCard/FilmCard";
import { Loader } from "../../components/loader/Loader";
import { useAppSelector } from "../../store/store";

export function ProfilePage() {
  const testIds  = localStorage.getItem('favFilms') ? JSON.parse(localStorage.getItem('favFilms')!) : []
  const {data, isFetching, isLoading} = useGetFilmsByIdsQuery(testIds)
  const {favourite} = useAppSelector(state => state.films)

  if(isLoading || isFetching) return <Loader />
  if(data){
    const filtered = data.filter((e)=>e!==undefined && (e.nameRu) && (e.year) &&(e.ratingKinopoisk) && (favourite.includes(e.kinopoiskId)))
    return (
      <div>
        <h1 className="text-3xl text-center m-4">{testIds.length>0 ? 'Избранные фильмы' : 'Избранные фильмы отсутствуют'}</h1>
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
      </div>
      
    )
  }else return  <div>Неудача</div>
}
