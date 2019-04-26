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

export interface IRedditScrape {
  movieTitle: string;
  movieHref: string;
  movieThumbnail: string;
}

export interface IRedditScrapeDocument extends Document {
  movies: IRedditScrape[];
}

export interface IMovieDumpRequest extends Request {
  movies: IRedditScrape[];
}
