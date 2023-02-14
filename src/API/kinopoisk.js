const token = 'a2810fed-e498-4fe2-a69a-b14b641fa617'
export const TOP_250_BEST_FILMS = 'TOP_250_BEST_FILMS'
export const TOP_100_POPULAR_FILMS = 'TOP_100_POPULAR_FILMS'
export const TOP_AWAIT_FILMS = 'TOP_AWAIT_FILMS'
const tokenInLs = localStorage.setItem('token', 'a2810fed-e498-4fe2-a69a-b14b641fa617')

export class Kinopoisk {
  constructor(data) {
    this.token = data.token
    this.user_id = data.user_id
  }

  static async fetchGetFilms(page, order, keyword, country, ratingFrom, yearFrom, yearTo) {
    const fetchFilms = await fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films?page=${page}&order=${order}&keyword=${keyword}&countries=${country}&ratingFrom=${ratingFrom}&yearFrom=${yearFrom}&yearTo=${yearTo}`, {
      method: 'GET',
      headers: {
        'X-API-KEY': token,
        'Content-Type': 'application/json',
      },
    })
    const films = await fetchFilms.json()
    return films
  }

  static async fetchGetFilmsTop(page, type) {
    const fetchFilms = await fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=${type}&page=${page}`, {
      method: 'GET',
      headers: {
        'X-API-KEY': token,
        'Content-Type': 'application/json',
      },
    })
    const films = await fetchFilms.json()
    return { data: films }
  }

  static async fetchGetActorsFromFilm() {
    const fetchActorsFromFilm = await fetch('https://kinopoiskapiunofficial.tech/api/v1/staff', {
      method: 'GET',
      headers: {
        'X-API-KEY': token,
        'Content-Type': 'application/json',
      },
    })
    const actors = await fetchActorsFromFilm.json()
    return actors
  }

  static async fetchGetActorsFromFilmById(id) {
    const fetchActorFromFilmById = await fetch(`https://kinopoiskapiunofficial.tech/api/v1/staff/${id}`, {
      method: 'GET',
      headers: {
        'X-API-KEY': token,
        'Content-Type': 'application/json',
      },
    })
    const actor = await fetchActorFromFilmById.json()
    return actor
  }

  static async fetchGetActorByName(name, page) {
    const fetchActor = await fetch(`https://kinopoiskapiunofficial.tech/api/v1/persons?name=${name}&page=${page}`, {
      method: 'GET',
      headers: {
        'X-API-KEY': token,
        'Content-Type': 'application/json',
      },
    })
    const actor = await fetchActor.json()
    return actor
  }
}

export const api = new Kinopoisk({
  user_id: localStorage.getItem('id'),
  token,
})

// вот мой коммит, проверим работу  я просто коммент накинул
