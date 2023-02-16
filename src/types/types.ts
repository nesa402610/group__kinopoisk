export interface FilmCatalog {
  kinopoiskId: number;
  imdbId: string;
  nameRu: string;
  nameEn?: string;
  nameOriginal: string;
  countries: string[];
  genres: string[];
  ratingKinopoisk: number;
  ratingImdb?: number;
  year: number;
  type: string;
  posterUrl: string;
  posterUrlPreview: string;
}

export interface FilmTop {
  filmId: number;
  nameRu: string;
  nameEn?: string;
  year: string;
  filmLength: string;
  countries: string[];
  genres: string[];
  rating: string;
  ratingVoteCount: number;
  posterUrl: string;
  posterUrlPreview: string;
  ratingChange?: any;
}

export interface Films {
  total?: number;
  totalPages?: number;
  pagesCount?: number;
  items?: FilmCatalog[];
  films?: FilmTop[];
}

export interface FilterParams {
  page:number,
  order?:string,
  keyword?: string,
  country?:string,
  ratingFrom?: number,
  yearFrom?:string,
  yearTo?: string
}
