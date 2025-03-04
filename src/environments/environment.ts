export interface Environment {
  production: boolean;
  apiUrl: string;
  apiKey: string;
  rapidApiHost: string;
}

declare global {
  interface Window {
    process: any;
  }
}

export const environment: Environment = {
  production: true,
  apiUrl: 'https://cricbuzz-cricket.p.rapidapi.com',
  apiKey: window['process']?.env?.RAPIDAPI_KEY || '6f76cd915amshdea56ca8f6f621fp18c111jsnc1b12020e1c5',
  rapidApiHost: window['process']?.env?.RAPIDAPI_HOST || 'cricbuzz-cricket.p.rapidapi.com'
};