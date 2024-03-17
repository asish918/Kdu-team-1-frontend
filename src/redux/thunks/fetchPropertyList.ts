import { createAsyncThunk } from "@reduxjs/toolkit";
import { Property } from "../../types";
import axios from "axios";
import { prodUrlGenerator, urlGenerator } from "../../utils/util";

export const fetchPropertyList = createAsyncThunk(
    'propertyList/fetch',
    async (): Promise<Property[]> => {
        const isProduction = process.env.NODE_ENV === "production";
        if (isProduction) {
            const response = await axios.get(prodUrlGenerator(`${process.env.FETCH_PROPERTIES}`))
            return response.data.data.listProperties as Property[];
        }
        const response = await axios.get(urlGenerator(`${process.env.FETCH_PROPERTIES}`))
        return response.data.data.listProperties as Property[];
    }
);