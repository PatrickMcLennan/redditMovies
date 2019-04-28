import { default as express } from 'express';
import compression from 'compression';
import { connect } from 'mongoose';
import cors from 'cors';
import * as dotenv from 'dotenv';
import { json } from 'body-parser';

import { postMovieDump, getMovies } from './controllers';

import { mongoConfig } from './utils/configs';

dotenv.config();
const PORT: string | number = process.env.PORT || 4000;
const app: express.Application = express();

app.use(compression());
app.use(cors());
app.use(json());

app.post('/movieDump', postMovieDump);
app.get('/getMovies', getMovies);

app.listen(
  PORT,
  (): void => {
    connect(
      process.env.MONGO,
      mongoConfig
    )
      .then((): void => console.log('Mongo Connected'))
      .catch(
        (err: string): void => console.error(`MONGO IS NOT RUNNING -- ${err}`)
      );
    console.log(`The server is running on Port ${PORT}`);
  }
);
