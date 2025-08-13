import { Request, Response } from 'express';
import { handleError } from '../common/handleError';
import { addWeatherDto } from '../../domain';
import { RegisterDataService } from './services/register-data.service';

export class WeatherDataController {
  constructor(private readonly registerDataService: RegisterDataService) {}

  registerData = (req: Request, res: Response) => {
    const [error, data] = addWeatherDto.execute(req.body);

    if (error) {
      return res.status(422).json({
        status: 'validate error',
        message: error,
      });
    }
    this.registerDataService
      .execute(data!)
      .then((result) => res.status(201).json(result))
      .catch((error) => handleError(error, res));
  };
}
