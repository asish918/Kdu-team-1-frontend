import { createAsyncThunk } from "@reduxjs/toolkit";
import { BookingDetails } from "../../types";
import { axiosRequest, prodUrlGenerator, urlGenerator } from "../../utils/util";
import { RequestType } from "../../utils/enums";

interface FetchBookingProps {
    url: string;
}

export const fetchBookingDetails = createAsyncThunk(
    'bookingDetails/fetch',
    async ({ url }: FetchBookingProps): Promise<BookingDetails> => {
        const isProduction = process.env.NODE_ENV === "production";
        if (isProduction) {
            const response = await axiosRequest(prodUrlGenerator(url), RequestType.GET)
            return response.data as BookingDetails;
        }
        const response = await axiosRequest(urlGenerator(url), RequestType.GET)
        console.log(response.data);
        return response.data as BookingDetails;
    }
);