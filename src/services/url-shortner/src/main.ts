import { initApp } from './app';
import { initRoutes } from './routes';
import { logger } from './utils';

function bootstrap() {
  //TODO: DB Conn

  //TODO: Redis conn

  // create an express application.
  const app = initApp({
    port: 5555,
  });

  // Routes
  initRoutes({ app });
}

(function () {
  try {
    bootstrap();
  } catch (e) {
    logger.fatal('Failed to bootstrap the `url-shortner` service: ', e);
  }
})();
