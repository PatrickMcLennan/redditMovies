import {
  IMovieDumpRequest,
  IServerResponse,
  IRedditScrape,
  IRedditScrapeDocument,
  Movie
} from '../utils';

export const postMovieDump = async (
  req: IMovieDumpRequest,
  res: IServerResponse
) => {
  const newMovies: IRedditScrapeDocument[] = req.body;

  const allMovies = await Movie.find({});
  if (allMovies.length >= 1) {
    await allMovies.forEach(
      (oldMovie: IRedditScrapeDocument): Promise<IRedditScrapeDocument> =>
        oldMovie.remove()
    );
  }
  newMovies.forEach(
    async (newMovie: IRedditScrapeDocument): Promise<IRedditScrapeDocument> => {
      return await new Movie(newMovie).save();
    }
  );
  res.send({
    success: true,
    message: 'New movies have been saved successfully'
  });
};
