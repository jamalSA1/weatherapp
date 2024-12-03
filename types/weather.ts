export type Weather = {
  city: { name: string };
  list: {
    weather: { description: string; main: string }[], main: {
      temp: number,
      feels_like: number,
      temp_min: number,
      temp_max: number,
      pressure: number,
      sea_level: number,
      grnd_level: number,
      humidity: number,
      temp_kf: number
    },
    clouds: { all: number };
  }[];

};