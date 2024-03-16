import { createAsyncThunk } from "@reduxjs/toolkit";
import { DateList } from "../../types";
import axios from "axios"; 
import { urlGenerator } from "../../utils/util";

export const fetchCalendarDates = createAsyncThunk(
    'calendarDates/fetch',
    async (): Promise<DateList[]> => {
        const response = await axios.get(urlGenerator(`${process.env.FETCH_MIN_RATES}`))
        return response.data as DateList[];
    }
);