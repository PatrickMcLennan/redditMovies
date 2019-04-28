import {
  IMovieDumpRequest,
  IServerResponse,
  IMovieDocument,
  Movie,
  Timestamp
} from '../utils';

export const postMovieDump = async (
  req: IMovieDumpRequest,
  res: IServerResponse
) => {
  const { movies, timestamp }: IMovieDumpRequest = req.body;

  const oldMovies = await Movie.find({});
  if (oldMovies.length >= 1) {
    await oldMovies.forEach(
      (oldMovie: IMovieDocument): Promise<IMovieDocument> => oldMovie.remove()
    );
  }
  movies.forEach(
    async (newMovie: IMovieDocument): Promise<IMovieDocument> => {
      return await new Movie(newMovie).save();
    }
  );
  return res.send({
    success: true,
    message: 'New movies have been saved successfully'
  });
};
