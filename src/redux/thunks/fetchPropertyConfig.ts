import { createAsyncThunk } from "@reduxjs/toolkit";
import { HotelProperties } from "../../types";
import axios from "axios";
import { urlGenerator } from "../../utils/util";

export const fetchPropertyConfig = createAsyncThunk(
    'hotelProperty/fetch',
    async (): Promise<HotelProperties> => {
        const response = await axios.get(urlGenerator(`${process.env.CONFIG_PATH}`))
        return response.data as HotelProperties;
    }
);