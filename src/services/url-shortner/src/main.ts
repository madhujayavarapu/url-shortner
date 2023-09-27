import { initApp } from './app';
import { initRoutes } from './routes';

(async function () {
  //TODO: DB Conn

  //TODO: Redis conn

  // create an express application.
  const app = await initApp({
    port: 5555,
  });

  // Routes
  initRoutes({ app });
})();
