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

export interface FilmsForActor {
  filmId: number;
  nameRu: string;
  nameEn: string;
  rating: string;
  general: boolean;
  description?: string;
  professionKey: string;
}

export interface FamilyForActor {
  personId?: number;
  name?: string;
  divorced?: boolean;
  divorcedReason?: string;
  sex?: string;
  children?: number;
  webUrl?: string;
  relation?: string;
}


export interface ActorByID {
  personId: number;
  webUrl: string;
  nameRu: string;
  nameEn: string;
  sex: string;
  posterUrl: string;
  growth: number;
  birthday: string;
  death?: string | null;
  age: number;
  birthplace: string;
  deathplace?: string | null;
  spouses: FamilyForActor[] | null;
  hasAwards: number;
  profession: string;
  facts: string[] | null;
  films: FilmsForActor[];
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
  nameOriginal?: string;
  year?: string;
  filmLength?: string;
  countries?: Country[];
  genres?: Genre[];
  rating?: string;
  ratingVoteCount?: number;
  posterUrl: string;
  posterUrlPreview: string;
  ratingChange?: string;
  relationType?: string;
}

export interface FilmSimilar {
  filmId: number;
  nameRu: string;
  nameEn: string;
  nameOriginal: string;
  posterUrl: string;
  posterUrlPreview: string;
  relationType: string;
}

export interface SimilarFilms {
  total: number;
  items: FilmTop[];
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

export interface IPhoto {
  imageUrl: string;
  previewUrl: string;
}

export interface IPhotos {
  total: number;
  totalPages: number;
  items: IPhoto[];
}