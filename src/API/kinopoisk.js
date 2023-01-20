const token = 'QCZ222H-G48M6H1-GF5EB9G-GRDGM91'

class Kinopoisk {
  constructor(data) {
    this.token = data.token
    this.user_id = data.user_id
  }
}

export const api = new Kinopoisk({
  user_id: localStorage.getItem('id'),
  token,
})

// вот мой коммит, проверим работу  я просто коммент накинул
