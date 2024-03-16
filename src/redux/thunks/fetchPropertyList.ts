import { createAsyncThunk } from "@reduxjs/toolkit";
import { Property } from "../../types";
import axios from "axios";
import { urlGenerator } from "../../utils/util";

export const fetchPropertyList = createAsyncThunk(
    'propertyList/fetch',
    async (): Promise<Property[]> => {
        const response = await axios.get(urlGenerator(`${process.env.FETCH_PROPERTIES}`))
        return response.data.data.listProperties as Property[];
    }
);