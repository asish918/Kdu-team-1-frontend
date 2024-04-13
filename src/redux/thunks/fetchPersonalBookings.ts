import { createAsyncThunk } from "@reduxjs/toolkit";
import { PersonalBooking } from "../../types";
import { axiosRequest, prodUrlGenerator, urlGenerator } from "../../utils/util";
import { RequestType } from "../../utils/enums";

interface FetchPersonalBookingProps {
    url: string;
}

export const fetchPersonalBookings = createAsyncThunk(
    'personalBookingDetails/fetch',
    async ({ url }: FetchPersonalBookingProps): Promise<PersonalBooking[]> => {
        const isProduction = process.env.NODE_ENV === "production";
        if (isProduction) {
            const response = await axiosRequest(prodUrlGenerator(url), RequestType.GET)
            return response.data as PersonalBooking[];
        }
        const response = await axiosRequest(urlGenerator(url), RequestType.GET)
        console.log(response.data);
        return response.data as PersonalBooking[];
    }
);