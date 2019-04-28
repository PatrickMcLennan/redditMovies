import reddit from './reddit';
import fetch from 'node-fetch';

import {
  IMovie,
  IServerResponse,
  IMovieDumpRequest,
  ITimestamp,
  ITimestampDocument
} from '../utils/serverDictionary';

const sendToMongo: Function = async (
  movies: IMovieDumpRequest['movies'],
  timestamp: IMovieDumpRequest['timestamp']
): Promise<any> =>
  await fetch('http://localhost:4000/movieDump', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ movies, timestamp })
  })
    .then((rawResponse: any) => rawResponse.json())
    .then(
      (responseStatus: IServerResponse): void => console.log(responseStatus)
    )
    .catch(
      (errorResponse: IServerResponse): void => console.error(errorResponse)
    );

(async (): Promise<Function> => {
  const now: Date = new Date();
  const day: string = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ][now.getDay()];
  const date = now.getDate();
  await reddit.initialize('fullmoviesongoogle');
  const resultsGoogle: IMovie[] = await reddit.getResults(10);
  console.log('Google subreddit scraped...');

  await reddit.initialize('Fullmoviesonvimeo');
  const resultsVimeo: IMovie[] = await reddit.getResults(10);
  console.log('Vimeo subreddit scraped...');
  console.log('Sending movie array to Mongo...');

  const timestamp: ITimestampDocument['timestamp'] = `${day} ${date}`;

  return sendToMongo([...resultsGoogle, ...resultsVimeo], timestamp);
})();
