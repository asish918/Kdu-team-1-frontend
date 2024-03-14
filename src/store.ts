// src/store.ts
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import hotelPoliciesReducer from './slices/hotelPoliciesSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    hotelPolicies: hotelPoliciesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
