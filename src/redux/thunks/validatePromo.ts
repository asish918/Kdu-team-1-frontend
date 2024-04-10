import { createAsyncThunk } from "@reduxjs/toolkit";
import { PromotionType } from "../../types";
import { axiosRequest, prodUrlGenerator, urlGenerator } from "../../utils/util";
import { RequestType } from "../../utils/enums";

export const validatePromoCode = createAsyncThunk(
    'validatePromo/fetch',
    async (url: string): Promise<PromotionType> => {
        const isProduction = process.env.NODE_ENV === "production";
        if (isProduction) {
            const response = await axiosRequest(prodUrlGenerator(url), RequestType.GET)
            return response.data as PromotionType;
        }
        const response = await axiosRequest(urlGenerator(url), RequestType.GET)
        console.log(response.data);
        return response.data as PromotionType;
    }
);