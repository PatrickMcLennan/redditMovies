import reddit from './reddit';
import fetch from 'node-fetch';

import { IRedditScrape, IServerResponse } from '../utils/serverDictionary';

const sendToMongo: Function = async (moviesArray: IRedditScrape[]): any =>
  await fetch('http://localhost:4000/movieDump', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(moviesArray)
  })
    .then((rawResponse: any) => rawResponse.json())
    .then(
      (responseStatus: IServerResponse): void => console.log(responseStatus)
    )
    .catch(
      (errorResponse: IServerResponse): void => console.error(errorResponse)
    );

(async (): Promise<Function> => {
  await reddit.initialize('fullmoviesongoogle');
  const resultsGoogle: IRedditScrape[] = await reddit.getResults(10);
  console.log('Google subreddit scraped...');

  await reddit.initialize('Fullmoviesonvimeo');
  const resultsVimeo: IRedditScrape[] = await reddit.getResults(10);
  console.log('Vimeo subreddit scraped...');
  console.log('Sending movie array to Mongo...');

  return sendToMongo([...resultsGoogle, ...resultsVimeo]);
})();
