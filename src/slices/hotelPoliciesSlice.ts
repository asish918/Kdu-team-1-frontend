// slices/hotelPoliciesSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

interface HotelPolicies {
 max_guests: number;
 guests: {
    adults: boolean;
    children: boolean;
    teens:boolean;
 };
 max_rooms: number;
 wheelchair:boolean;
 bannerImageUrl:string;
}

// Define  async thunk action
export const fetchHotelPolicies = createAsyncThunk(
 'hotelPolicies/fetch',
 async () => {
    // Simulate fetching hotel policies from an API
    const hotelPolicies: HotelPolicies = {
      max_guests: 6,
      guests: {
        adults: true,
        children: true,
        teens:true,
      },
      max_rooms: 7,
      wheelchair: true,
      bannerImageUrl: "https://picsum.photos/200/200",
    };
    return hotelPolicies;
 }
);

// Define  slice
const hotelPoliciesSlice = createSlice({
 name: 'hotelPolicies',
 initialState: {
    policies: {
      max_guests: 1, // Intial value
      guests: {
        adults: true, // Intial value
        children: true,
        teens:true, // Intial value
      },
      max_rooms: 1, // Intial value
      wheelchair:true,
      bannerImageUrl:"",
    },
 },
 reducers: {},
 extraReducers: (builder) => {
    builder.addCase(fetchHotelPolicies.fulfilled, (state, action: PayloadAction<HotelPolicies>) => {
      state.policies = action.payload;
    });
 },
});

export default hotelPoliciesSlice.reducer;

