import {
  IMovieDumpRequest,
  IServerResponse,
  IMovieDocument,
  Movie
} from '../utils';

export const postMovieDump = async (
  req: IMovieDumpRequest,
  res: IServerResponse
) => {
  const newMovies: IMovieDocument[] = req.body;

  const allMovies = await Movie.find({});
  if (allMovies.length >= 1) {
    await allMovies.forEach(
      (oldMovie: IMovieDocument): Promise<IMovieDocument> => oldMovie.remove()
    );
  }
  newMovies.forEach(
    async (newMovie: IMovieDocument): Promise<IMovieDocument> => {
      return await new Movie(newMovie).save();
    }
  );
  return res.send({
    success: true,
    message: 'New movies have been saved successfully'
  });
};
