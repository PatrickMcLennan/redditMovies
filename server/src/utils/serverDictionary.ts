import { Document } from 'mongoose';
import { Request, Response } from 'express';
////////////////////////////////////////  CONSTANTS

////////////////////////////////////////  CLIENT

////////////////////////////////////////  SERVER
export interface IMongoConfig {
  useNewUrlParser: boolean;
  useCreateIndex: boolean;
}
export interface IServerResponse extends Response {
  success: boolean;
  message: string;
}

export interface IMovie {
  movieTitle: string;
  movieHref: string;
  movieThumbnail: string;
}

export interface ITimestamp {
  timestamp: string;
}

export interface ITimestampDocument extends Document {
  timestamp: string;
}

export interface IMovieDocument extends Document {
  movies: IMovie[];
}

export interface IMovieDumpRequest extends Request {
  movies: IMovieDocument[];
  timestamp: ITimestampDocument;
}

export interface IGetMoviesResponse extends IServerResponse {
  movies: [];
  timestamp: ITimestamp;
}
