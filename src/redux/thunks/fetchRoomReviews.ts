import { createAsyncThunk } from "@reduxjs/toolkit";
import { RoomReviews } from "../../types";
import { axiosRequest, prodUrlGenerator, urlGenerator } from "../../utils/util";
import { RequestType } from "../../utils/enums";

interface FetchRoomReviewsProps {
    url: string;
}

export const fetchRoomReviews = createAsyncThunk(
    'roomReviews/fetch',
    async ({ url }: FetchRoomReviewsProps): Promise<RoomReviews[]> => {
        const isProduction = process.env.NODE_ENV === "production";
        if (isProduction) {
            const response = await axiosRequest(prodUrlGenerator(url), RequestType.GET)
            return response.data as RoomReviews[];
        }
        const response = await axiosRequest(urlGenerator(url), RequestType.GET)
        console.log(response.data);
        return response.data as RoomReviews[];
    }
);