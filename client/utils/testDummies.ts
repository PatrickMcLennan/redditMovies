import { IMovie } from './clientDictionary';

export const emptyMovie: IMovie = {
  movieTitle: '',
  movieHref: '',
  movieThumbnail: ''
};

export const emptyMovieArray: IMovie[] = [
  {
    movieTitle: 'Fake 1 title',
    movieHref: 'Fake 1 href',
    movieThumbnail: 'Fake 1 thumbnail'
  },
  {
    movieTitle: 'Fake 2 title',
    movieHref: 'Fake 2 href',
    movieThumbnail: 'Fake 2 thumbnail'
  },
  {
    movieTitle: 'Fake 3 title',
    movieHref: 'Fake 3 href',
    movieThumbnail: 'Fake 3 thumbnail'
  }
];
