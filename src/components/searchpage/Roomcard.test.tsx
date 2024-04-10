import { render, screen } from '@testing-library/react';
import RoomCard from './Roomcard';
import AppProvider from '../../providers/AppProvider';
import { BrowserRouter } from 'react-router-dom';
import { Authenticator } from "@aws-amplify/ui-react";
test('renders RoomCard component', () => {
  const mockRoom = {
    roomTypeName: 'Deluxe Suite',
    areaInSquareFeet: 500,
    averageRate: 150,
    doubleBed: 2,
    maxCapacity: 4,
    singleBed: 2,
    rating: 4.5,
    reviews: ['Great room!', 'Comfortable stay.'],
    lowResImages: ['image1.jpg', 'image2.jpg'],
    highResImages: [],
    validPromotions: [],
    amenities: [],
    description: '',
    roomTypeId: 0,
    bestPromotion: {
      promotion_description: '',
      promotion_id: '',
      promotion_title: '',
      price_factor: 0
    },
    rates: []
  };

  render(
    <Authenticator.Provider> 
    <BrowserRouter>
      <AppProvider>
      <RoomCard {...mockRoom} />
      </AppProvider>
    </BrowserRouter>
    </Authenticator.Provider> 
  );


  const roomTypeNameElement = screen.getByText(/Deluxe Suite/i);
  expect(roomTypeNameElement);


  const averageRateElement = screen.getByText(/per night/i);
  expect(averageRateElement);


  const selectRoomButton = screen.getByText(/Select Room/i);
  expect(selectRoomButton);

});
