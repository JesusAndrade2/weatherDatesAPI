import { Router } from 'express';
import { envs } from '../../config';
import { WeatherDataController } from './controller';
import { RegisterDataService } from './services/register-data.service';

export class WeatherDataRoutes {
  static get routes(): Router {
    const router = Router();

    const registerDataService = new RegisterDataService();

    const weatherDataController = new WeatherDataController(
      registerDataService
    );

    router.post('/', weatherDataController.registerData);

    return router;
  }
}
