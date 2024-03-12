// src/slices/authSlice.ts
import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
  isLoggedIn: boolean;
  price: number;
  currency: string;
}

const initialState: AuthState = {
  isLoggedIn: false,
  price: 100,
  currency: "USD",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state) => {
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.isLoggedIn = false;
    },
    setActiveCurrency: (state, action) => {
      state.currency = action.payload;

      switch (action.payload) {
        case "USD":
          state.price = 100;
          break;

        case "INR":
          state.price = 8000;
          break;

        case "EUR":
          state.price = 93;
      }
    },
  },
});

export const { login, logout, setActiveCurrency } = authSlice.actions;
export default authSlice.reducer;
