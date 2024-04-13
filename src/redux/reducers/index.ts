import { combineReducers } from '@reduxjs/toolkit';
import propertyConfigReducer from './propertyConfigReducer';
import propertyListReducer from './propertyListReducer';
import calendarReducer from './calendarReducer';
import intelReducer from './intelReducer';
import searchFormReducer from './searchFormReducer';
import navigationReducer from './navigationReducer';
import filterSortReducer from './filterSortReducer';
import roomResultReducer from './roomResultReducer';
import promoReducer from './promoReducer';
import itenaryReducer from './itenaryReducer';
import checkoutFormReducer from './checkoutFormReducer';
import bookingConfirmation from './bookingConfirmation';
import bookingDetailsReducer from './bookingDetailsReducer';
import roomReviewReducer from './roomReviewReducer';

const rootReducer = combineReducers({
    propertyConfig: propertyConfigReducer,
    propertyList: propertyListReducer,
    calendar: calendarReducer,
    intel: intelReducer,
    searchForm: searchFormReducer,
    appNavigation: navigationReducer,
    filterState: filterSortReducer,
    roomResult: roomResultReducer,
    promoCode: promoReducer,
    itenary: itenaryReducer,
    checkoutForm: checkoutFormReducer,
    confirmationBooking: bookingConfirmation,
    bookingDetails: bookingDetailsReducer,
    roomReviews: roomReviewReducer
});

export default rootReducer;
