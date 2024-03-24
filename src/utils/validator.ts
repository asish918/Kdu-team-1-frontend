import { FilterSortState } from "../redux/reducers/filterSortReducer";
import { SearchFormState } from "../redux/reducers/searchFormReducer";

export function searchFieldParamsValidator(params: SearchFormState): boolean {
    if (!params.endDate && !params.startDate) return false;
    return true;
}

export function searchFieldFormValidator(search: SearchFormState): boolean {
    if (!search.startDate || !search.endDate || !search.adults || !search.beds || !search.kids || !search.numberOfRooms || !search.teens || !search.totalGuests) return false;

    if (search.startDate! > search.endDate!) return false;
    if (search.kids + search.adults + search.teens > search.totalGuests) return false;
    if (search.adults < search.numberOfRooms) return false;
    if (search.kids < 0 || search.adults < 1 || search.teens < 0 || search.totalGuests < 0 || search.numberOfRooms < 1 || search.beds < 1) return false;

    return true;
}

export function validateFilters(filters: FilterSortState): boolean {
    return !filters.bedTypes && !filters.roomTypes;
} 