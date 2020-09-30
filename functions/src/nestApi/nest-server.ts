// Express
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';

// NestJs
import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import { AppModule } from './app.module';

export const NestServer: express.Express = express();
/* Express middleware. */
NestServer.use(bodyParser.json());
NestServer.use(bodyParser.urlencoded({ extended: false }));
NestServer.use(cors());
/* End of express middleware. */

const startNestApplication = async (expressInstance: express.Express) => {

    const app = await NestFactory.create(AppModule, new ExpressAdapter(expressInstance));

    await app.init();
};

void startNestApplication(NestServer);