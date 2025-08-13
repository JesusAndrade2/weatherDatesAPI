import {
  maxLength,
  maxValue,
  minLength,
  minValue,
  number,
  object,
  pipe,
  safeParse,
  string,
} from 'valibot';

export const WeatherDataSchema = object({
  temperature: pipe(
    number('Invalid temperature, must be a number'),
    minValue(-273.15, 'Temperatura cannot be less than 273.15°C')
  ),

  humidity: pipe(
    number('invalid humidity, must be a number'),
    minValue(0, 'Humidity cannot be less than 0')
  ),
});

export class addWeatherDto {
  constructor(
    public readonly temperatura: number,
    public readonly humidity: number
  ) {}

  static execute(input: { [key: string]: any }): [string?, addWeatherDto?] {
    if (!('temperature' in input)) {
      return ['temperature is required'];
    }

    if (!('humidity' in input)) {
      return ['Humidity is required'];
    }

    const result = safeParse(WeatherDataSchema, input);

    if (!result.success) {
      const error = result.issues[0]?.message ?? 'validation failed';
      return [error];
    }

    const { temperature, humidity } = result.output as {
      temperature: number;
      humidity: number;
    };

    return [undefined, new addWeatherDto(temperature, humidity)];
  }
}
