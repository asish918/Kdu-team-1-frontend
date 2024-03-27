import { createAsyncThunk } from "@reduxjs/toolkit";
import { Property } from "../../types";
import { axiosRequest, prodUrlGenerator, urlGenerator } from "../../utils/util";
import { RequestType } from "../../utils/enums";

export const fetchPropertyList = createAsyncThunk(
    'propertyList/fetch',
    async (): Promise<Property[]> => {
        const isProduction = process.env.NODE_ENV === "production";
        if (isProduction) {
            const response = await axiosRequest(prodUrlGenerator(`${process.env.FETCH_PROPERTIES}`), RequestType.GET)
            return response.data.data.listProperties as Property[];
        }
        const response = await axiosRequest(urlGenerator(`${process.env.FETCH_PROPERTIES}`), RequestType.GET)
        return response.data.data.listProperties as Property[];
    }
);