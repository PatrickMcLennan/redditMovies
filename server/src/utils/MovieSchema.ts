import { IMovieDocument } from './serverDictionary';
import { Schema, Model, model } from 'mongoose';

const MovieSchema: Schema<IMovieDocument> = new Schema({
  movieTitle: {
    type: String,
    required: 'Each movie needs a title'
  },
  movieHref: {
    type: String,
    required: 'Each movie needs a href'
  },
  movieThumbnail: {
    type: String,
    required: 'Each movie needs a thumbnail link'
  }
});

export const Movie: Model<IMovieDocument> = model<IMovieDocument>(
  'Movie',
  MovieSchema
);
