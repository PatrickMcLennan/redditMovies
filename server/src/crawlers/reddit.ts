import puppeteer from 'puppeteer';

import { IMovie } from '../utils/serverDictionary';

const SUBREDDIT_URL: Function = (subReddit: string): string =>
  `https://old.reddit.com/r/${subReddit}/`;

const self: any = {
  browser: null,
  page: null,
  initialize: async (subReddit: string): Promise<puppeteer.Browser> => {
    self.browser = await puppeteer.launch({ headless: true });
    self.page = await self.browser.newPage();

    return await self.page.goto(
      SUBREDDIT_URL(subReddit, { waitUntil: 'networkidle0' })
    );
  },

  getResults: async (results: number): Promise<IMovie[]> => {
    const elements: HTMLDivElement[] = await self.page.$$(
      '#siteTable > div[class*="thing"]'
    );
    let movies: IMovie[] = [];

    elements.forEach(
      async (element: any): Promise<any> => {
        const movieTitle: IMovie['movieTitle'] = await element.$eval(
          'p[class="title"]',
          (node: HTMLParagraphElement): IMovie['movieTitle'] =>
            node.innerText
              .trim()
              .split(' ')
              .filter((word: string): boolean => word !== '(drive.google.com)')
              .join(' ')
        );
        const movieHref: IMovie['movieHref'] = await element.$eval(
          'a[data-event-action="title"]',
          (node: HTMLAnchorElement): IMovie['movieHref'] => node.href.trim()
        );
        const movieThumbnail: IMovie['movieThumbnail'] = await element.$eval(
          'a[data-event-action="thumbnail"]',
          (node: HTMLAnchorElement): IMovie['movieThumbnail'] | any => {
            const children: any = node.childNodes;

            return children.length === 0
              ? 'placeholder'
              : children[0].src.trim();
          }
        );
        movies.push({ movieTitle, movieHref, movieThumbnail });
      }
    );
    return movies;
  }
};

export default self;
