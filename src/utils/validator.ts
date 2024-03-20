import { SearchFieldParams } from "../types";

export function searchFieldParamsValidator(params: SearchFieldParams): boolean {
    if (!params.endDate && !params.startDate) return false;
    return true;
}