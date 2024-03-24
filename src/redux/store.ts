// src/store.ts
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/authReducer";
import propertyConfigReducer from './reducers/propertyConfigReducer';
import propertyListReducer from "./reducers/propertyListReducer";
import calendarReducer from "./reducers/calendarReducer";
import intelReducer from "./reducers/intelReducer";
import searchFormReducer from "./reducers/searchFormReducer";
import navigationReducer from "./reducers/navigationReducer";
import filterSortReducer from "./reducers/filterSortReducer";
import roomResultReducer from "./reducers/roomResultReducer";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    propertyConfig: propertyConfigReducer,
    propertyList: propertyListReducer,
    calendar: calendarReducer,
    intel: intelReducer,
    searchForm: searchFormReducer,
    appNavigation: navigationReducer,
    filterState: filterSortReducer,
    roomResult: roomResultReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
