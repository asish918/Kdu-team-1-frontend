import { createAsyncThunk } from "@reduxjs/toolkit";
import { RoomResult, RoomResultRequestBody } from "../../types";
import { axiosRequest, prodUrlGenerator, urlGenerator } from "../../utils/util";
import { RequestType } from "../../utils/enums";

interface FetchRoomResultProps {
    url: string;
    requestBody: RoomResultRequestBody;
}

export const fetchRoomResult = createAsyncThunk(
    'roomResult/fetch',
    async ({ url, requestBody }: FetchRoomResultProps): Promise<RoomResult> => {
        const isProduction = process.env.NODE_ENV === "production";
        if (isProduction) {
            const response = await axiosRequest(prodUrlGenerator(url), RequestType.POST, requestBody)
            return response.data as RoomResult;
        }
        const response = await axiosRequest(urlGenerator(url), RequestType.POST, requestBody)
        console.log(response.data);
        return response.data as RoomResult;
    }
);