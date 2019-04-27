export interface IMovie {
  movieTitle: string;
  movieHref: string;
  movieThumbnail: string;
}

export interface IGetMoviesResponse extends Response {
  movies: IMovie[];
}
