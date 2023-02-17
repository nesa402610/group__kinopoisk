export interface Country {
  country: string;
}

export interface Genre {
  genre: string;
}
export interface IActorByFilmId {
  staffId: number;
  nameRu: string;
  nameEn: string;
  description: string;
  posterUrl: string;
  professionText: string;
  professionKey: string;
}

export interface FilmCatalog {
  kinopoiskId: number;
  imdbId: string;
  nameRu: string;
  nameEn?: string;
  nameOriginal: string;
  countries: Country[];
  genres: Genre[];
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
  nameEn: string | null;
  year: string;
  filmLength: string;
  countries: Country[];
  genres: Genre[];
  rating: string;
  ratingVoteCount: number;
  posterUrl: string;
  posterUrlPreview: string;
  ratingChange?: string;
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

export interface Actor {
  kinopoiskId: number;
  webUrl: string;
  nameRu: string;
  nameEn: string;
  sex: string;
  posterUrl: string;
}


export interface Actors {
  total: number;
  items: Actor[];
}

export interface Video {
  url: string;
  name: string;
  site: string;
  id?: string;
}

export interface Videos {
  total: number;
  items: Video[];
}

export interface FilmDetailed {
  kinopoiskId: number;
  imdbId: string;
  nameRu: string;
  nameEn?: string;
  nameOriginal: string;
  posterUrl: string;
  posterUrlPreview: string;
  coverUrl: string;
  logoUrl: string;
  reviewsCount: number;
  ratingGoodReview: number;
  ratingGoodReviewVoteCount: number;
  ratingKinopoisk: number;
  ratingKinopoiskVoteCount: number;
  ratingImdb: number;
  ratingImdbVoteCount: number;
  ratingFilmCritics: number;
  ratingFilmCriticsVoteCount: number;
  ratingAwait?: string;
  ratingAwaitCount: number;
  ratingRfCritics?: string;
  ratingRfCriticsVoteCount: number;
  webUrl: string;
  year: number;
  filmLength: number;
  slogan: string;
  description: string;
  shortDescription: string;
  editorAnnotation?: string;
  isTicketsAvailable: boolean;
  productionStatus?: string;
  type: string;
  ratingMpaa: string;
  ratingAgeLimits: string;
  countries: Country[];
  genres: Genre[];
  startYear?: number;
  endYear?: number;
  serial: boolean;
  shortFilm: boolean;
  completed: boolean;
  hasImax: boolean;
  has3D: boolean;
  lastSync: Date;
}