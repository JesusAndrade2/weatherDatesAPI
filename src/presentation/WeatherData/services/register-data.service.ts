import { WeatherData } from '../../../data';
import { addWeatherDto, CustomError } from '../../../domain';

export class RegisterDataService {
  constructor() {}

  async execute(data: addWeatherDto) {
    const weatherData = new WeatherData();
    weatherData.temperature = data.temperatura;
    weatherData.humidity = data.humidity;

    try {
      await weatherData.save();
      return {
        message: 'weather data has been saved succesfully',
      };
    } catch (error) {
      throw CustomError.internalServerError('failed to save data');
    }
  }
}
