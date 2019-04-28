export interface IMovie {
  movieTitle: string;
  movieHref: string;
  movieThumbnail: string;
}

export interface IServerResponse extends Response {
  success: boolean;
  message: string;
}

export interface IGetMoviesResponse extends IServerResponse {
  movies: IMovie[];
}
