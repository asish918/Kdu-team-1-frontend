import { createAsyncThunk } from "@reduxjs/toolkit";
import { HotelProperties } from "../../types";
import axios from "axios";
import { axiosRequest, prodUrlGenerator, urlGenerator } from "../../utils/util";

export const fetchPropertyConfig = createAsyncThunk(
    'hotelProperty/fetch',
    async (): Promise<HotelProperties> => {
        const isProduction = process.env.NODE_ENV === "production";
        if (isProduction) {
            const response = await axios.get(prodUrlGenerator(`${process.env.CONFIG_PATH}`))
            return response.data as HotelProperties;
        }
        const response = await axiosRequest(urlGenerator(`${process.env.CONFIG_PATH}`))
        return response.data as HotelProperties;
    }
);