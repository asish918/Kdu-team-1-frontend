import { FilterSortState } from "../redux/reducers/filterSortReducer";
import { SearchFormState } from "../redux/reducers/searchFormReducer";

export function searchFieldParamsValidator(params: SearchFormState): boolean {
    if (!params.endDate || !params.startDate) return false;
    return true;
}

export function searchFieldFormValidator(searchParams: URLSearchParams): boolean {
    const startDate = searchParams.get('startDate');
    const endDate = searchParams.get('endDate');
    const adults = parseInt(searchParams.get('adults') || '0');
    const beds = parseInt(searchParams.get('beds') || '0');
    const kids = parseInt(searchParams.get('kids') || '0');
    const numberOfRooms = parseInt(searchParams.get('numberOfRooms') || '0');
    const teens = parseInt(searchParams.get('teens') || '0');
    const totalGuests = parseInt(searchParams.get('totalGuests') || '0');

    if (startDate === null || endDate === null || adults === null || beds === null || kids === null || numberOfRooms === null || teens === null || totalGuests === null) return false;

    const startDateObj = new Date(startDate);
    const endDateObj = new Date(endDate);

    if (isNaN(startDateObj.getTime()) || isNaN(endDateObj.getTime()) || startDateObj > endDateObj) return false;

    if (kids + adults + teens > totalGuests) return false;
    if (adults < numberOfRooms) return false;
    if (kids < 0 || adults < 1 || teens < 0 || totalGuests < 0 || numberOfRooms < 1 || beds < 0) return false;

    return true;
}

export function validateFilters(filters: FilterSortState): boolean {
    return !filters.bedTypes && !filters.roomTypes;
} 