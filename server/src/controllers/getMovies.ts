import { IMovie, Movie, IServerResponse } from '../utils';

export const getMovies = async (req: Request, res: IServerResponse) => {
  const allMovies: IMovie[] | any = await Movie.find({});

  return res.send({
    success: true,
    message: 'All good',
    movies: allMovies
  });
};
