import { Application, Request, Response } from 'express';

export interface IAppRoutes {
  app: Application;
}

export const initRoutes = ({ app }: IAppRoutes) => {
  // Add hb routes
  app.get('/hb', (_: Request, res: Response) => {
    res.status(200).json({
      code: 0,
      message: 'Server alive!',
    });
  });

  // TODO: Add Error handlers (May be middleware)
};
