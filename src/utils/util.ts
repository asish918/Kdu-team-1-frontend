export function urlGenerator(path: string) {
  return `${process.env.BACKEND_HOST}:${process.env.BACKEND_PORT}/${path}`;
}

export function parseDateString(dateString: string): Date {
  const [year, month, day] = dateString.split('-').map(Number);
  return new Date(year, month - 1, day);
}
