import axios from "axios";

const config = {
  headers: {
    'X-Api-Key': `${process.env.X_API_KEY}`
  }
};

export function urlGenerator(path: string) {
  return `${process.env.BACKEND_HOST}:${process.env.BACKEND_PORT}/${path}`;
}

export function prodUrlGenerator(path: string) {
  return `${process.env.BACKEND_URL}/${path}`
}

export function axiosRequest(url: string) {
  return axios.get(url, config);
}

export function parseDateString(dateString: string): Date {
  const [year, month, day] = dateString.split('-').map(Number);
  return new Date(year, month - 1, day);
}
