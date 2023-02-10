const token = 'a2810fed-e498-4fe2-a69a-b14b641fa617'
export const TOP_250_BEST_FILMS = 'TOP_250_BEST_FILMS'
export const TOP_100_POPULAR_FILMS = 'TOP_100_POPULAR_FILMS'
export const TOP_AWAIT_FILMS = 'TOP_AWAIT_FILMS'

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
}

export const api = new Kinopoisk({
  user_id: localStorage.getItem('id'),
  token,
})

// вот мой коммит, проверим работу  я просто коммент накинул
