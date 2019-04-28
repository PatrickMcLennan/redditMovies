import {
  IMovieDumpRequest,
  IServerResponse,
  ITimestampDocument,
  IMovieDocument,
  Movie,
  Timestamp
} from '../utils';

export const postMovieDump = async (
  req: IMovieDumpRequest,
  res: IServerResponse
) => {
  const { movies, timestamp }: IMovieDumpRequest = req.body;

  const oldMovies: IMovieDocument[] = await Movie.find({});
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

  const oldTimestamp: ITimestampDocument = await Timestamp.findOne({});
  if (oldTimestamp) {
    oldTimestamp.remove();
  }
  const newTimestamp = await new Timestamp(timestamp).save();

  return res.send({
    success: true,
    message: `The movies were updated on ${newTimestamp}`
  });
};
