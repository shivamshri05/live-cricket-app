export interface Environment {
  production: boolean;
  apiUrl: string;
  apiKey: any;
  rapidApiHost: string;
}

export const environment: Environment = {
  production: false,
  apiUrl: 'https://cricbuzz-cricket.p.rapidapi.com',
  apiKey: process.env['RAPIDAPI_KEY'],
  rapidApiHost: 'cricbuzz-cricket.p.rapidapi.com'
};