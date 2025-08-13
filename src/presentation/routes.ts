import { Router } from 'express';
import { WeatherDataRoutes } from './WeatherData/routes';

export class AppRoutes {
  static get routes(): Router {
    const router = Router();

    router.use('/api/v1', WeatherDataRoutes.routes);

    return router;
  }
}
