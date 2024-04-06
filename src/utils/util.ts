import axios from "axios";
import { SearchFormState } from "../redux/reducers/searchFormReducer";
import { RequestType } from "./enums";
import { RoomResultRequestBody } from "../types";
import { FilterSortState } from "../redux/reducers/filterSortReducer";
import { persistor } from "../redux/store";

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

export function axiosRequest(url: string, request: RequestType, body?: object) {
  switch (request) {
    case RequestType.GET:
      return axios.get(url, config);
      break;
    case RequestType.POST:
      return axios.post(url, body, config);
  }
}

export function parseDateString(dateString: string): Date {
  const [year, month, day] = dateString.split('-').map(Number);
  return new Date(year, month - 1, day);
}

export function generateDescription(adults: number, children: number, teens: number): string {
  const parts = [];

  if (adults > 0) {
    parts.push(`${adults} Adult${adults > 1 ? 's' : ''}`);
  }

  if (children > 0) {
    parts.push(`${children} Children`);
  }

  if (teens > 0) {
    parts.push(`${teens} Teen${teens > 1 ? 's' : ''}`);
  }

  return parts.join(' ');
}

export function itenaryDateFormat(start: string, end: string): string {
  const startDate = new Date(start);
  const endDate = new Date(end);

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December'
  ];

  const startMonth = months[startDate.getMonth()];
  const endMonth = months[endDate.getMonth()];

  const startDay = startDate.getDate();
  const endDay = endDate.getDate();

  const year = startDate.getFullYear();

  return `${startMonth} ${startDay} - ${endMonth} ${endDay}, ${year}`;
}

export function convertStatesToQueryString(searchParams: SearchFormState, filterParams: FilterSortState): string {
  const queryParams = new URLSearchParams();

  const startDate: Date = new Date(searchParams.startDate!);
  startDate.setUTCHours(0, 0, 0);
  const endDate: Date = new Date(searchParams.endDate!);
  endDate.setUTCHours(0, 0, 0);

  queryParams.set('startDate', startDate.toISOString());
  queryParams.set('endDate', endDate.toISOString());

  queryParams.set('adults', searchParams.adults.toString());
  queryParams.set('numberOfRooms', searchParams.numberOfRooms.toString());
  queryParams.set('totalGuests', searchParams.totalGuests.toString());
  queryParams.set('teens', searchParams.teens.toString());
  queryParams.set('kids', searchParams.kids.toString());
  queryParams.set('beds', searchParams.beds.toString());

  queryParams.set('propertyId', '1');

  if (filterParams.bedTypes !== null) {
    queryParams.set('bedTypes', filterParams.bedTypes.join(','));
  }

  if (filterParams.roomTypes !== null) {
    queryParams.set('roomTypes', filterParams.roomTypes.join(','));
  }


  queryParams.set('priceSort', filterParams.priceSort.toString());

  return queryParams.toString();
}

export function requestBodyGenerator(searchParams: SearchFormState, filterParams: FilterSortState): RoomResultRequestBody {
  const startDate: Date = new Date(searchParams.startDate!);
  startDate.setUTCHours(0, 0, 0);
  const endDate: Date = new Date(searchParams.endDate!);
  endDate.setUTCHours(0, 0, 0);

  const requestBody: RoomResultRequestBody = {
    startDate: startDate.toISOString(),
    endDate: endDate.toISOString(),
    beds: searchParams.beds.toString(),
    rooms: searchParams.numberOfRooms.toString(),
    propertyId: "1",
    totalGuests: searchParams.totalGuests.toString(),
    roomTypes: filterParams.roomTypes ? filterParams.roomTypes : [],
    bedTypes: filterParams.bedTypes ? filterParams.bedTypes : [],
    priceSort: filterParams.priceSort,
    isKDUMember: true,
    isMilitary: filterParams.military ? filterParams.military : false,
    isSeniorCitizen: filterParams.seniorCitizen ? filterParams.seniorCitizen : false,
  }

  return requestBody;
}

export function bedTypeTextGenerator(doubleBed: number, singleBed: number): string {
  if (doubleBed === 0 && singleBed === 0) {
    return "No beds available";
  } else if (doubleBed === 0) {
    return `${singleBed} singles`;
  } else if (singleBed === 0) {
    return `${doubleBed} doubles`;
  } else {
    return `${doubleBed} doubles and ${singleBed} singles`;
  }
}

export const generateRoomTypeNumbers = (roomTypes: string[]): number[] => {
  const roomTypeMap: { [key: string]: number } = {
    GrandDeluxe: 1,
    SuperDeluxe: 2,
    FamilyDeluxe: 3,
    CoupleSuite: 4,
    GardenSuite: 5,
    StandardSuite: 6
  };

  const roomTypeNumbers: number[] = [];

  for (const roomType of roomTypes) {
    const mappedNumber = roomTypeMap[roomType];
    if (mappedNumber !== undefined) {
      roomTypeNumbers.push(mappedNumber);
    }
  }

  return roomTypeNumbers;
};

export function roomCardNameGenerator(input: string): string {
  return input.replace(/_/g, ' ');
}

export function checkLocalStorageForKey(key: string): boolean {
  try {
    const item = localStorage.getItem(key);
    return item !== null;
  } catch (error) {
    console.error('Error checking local storage:', error);
    return false;
  }
}

export function clearLocalStorage() {
  try {
    persistor.purge();
  } catch (error) {
    console.log("Error in clearing local storage");
  }
}

export function capitalize(str: string): string {
  return str.toString().charAt(0).toUpperCase() + str.toString().slice(1);
}

export function itenaryDates(start: string, end: string, rates: number[]): { date: string; rate: number }[] {
  const startDate = new Date(start);
  const endDate = new Date(end);

  const formattedDates: { date: string; rate: number }[] = [];

  const currentDate = new Date(startDate);
  while (currentDate <= endDate) {
    const formattedDate = currentDate.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'long',
      day: 'numeric',
      year: '2-digit'
    });

    console.log(rates);

    const index = (currentDate.getTime() - startDate.getTime()) / (24 * 60 * 60 * 1000);
    const rate = rates[Math.floor(index)];

    formattedDates.push({ date: formattedDate, rate: rate });

    currentDate.setDate(currentDate.getDate() + 1);
  }

  return formattedDates;
}

export function calculateTotal(rates: number[], rooms: number) {
  const total = rates.reduce((acc, rate) => acc + rate, 0);
  const totalPrice = total * rooms;

  return totalPrice;
}