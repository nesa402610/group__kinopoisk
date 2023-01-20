const token = 'QCZ222H-G48M6H1-GF5EB9G-GRDGM91'
export class Kinopoisk {
  constructor(data) {
    this.token = data.token
    this.user_id = data.user_id
  }

  static async fetchGetGilms() {
    const fetchFilms = await fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_250_BEST_FILMS', {
      method: 'GET',
      headers: {
        'X-API-KEY': 'a2810fed-e498-4fe2-a69a-b14b641fa617',
        'Content-Type': 'application/json',
      },
    })
    const films = await fetchFilms.json()
    return films
  }
}

export const api = new Kinopoisk({
  user_id: localStorage.getItem('id'),
  token,
})
