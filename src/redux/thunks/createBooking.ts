import { createAsyncThunk } from "@reduxjs/toolkit";
import { BookingRequest } from "../../types";
import { axiosRequest, prodUrlGenerator, urlGenerator } from "../../utils/util";
import { RequestType } from "../../utils/enums";

interface CreateBookingProps {
    url: string;
    requestBody: BookingRequest;
}

export const createBooking = createAsyncThunk(
    'createBooking/request',
    async ({ url, requestBody }: CreateBookingProps): Promise<string> => {
        const isProduction = process.env.NODE_ENV === "production";
        if (isProduction) {
            const response = await axiosRequest(prodUrlGenerator(url), RequestType.POST, requestBody)
            return response.data;
        }
        const response = await axiosRequest(urlGenerator(url), RequestType.POST, requestBody)
        console.log(response.data);
        return response.data;
    }
);