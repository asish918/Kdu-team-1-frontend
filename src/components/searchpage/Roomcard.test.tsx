import { render, screen } from '@testing-library/react';
import RoomCard from './Roomcard';
import AppProvider from '../../providers/AppProvider';
import { BrowserRouter } from 'react-router-dom';

test('renders RoomCard component', () => {
  const mockRoom = {
    room_type_name: 'Deluxe Suite',
    area_in_square_feet: 500,
    average_rate: 150,
    double_bed: 2,
    max_capacity: 4,
    single_bed: 2,
    rating: 4.5,
    reviews: ['Great room!', 'Comfortable stay.'],
    lowResImages: ['image1.jpg', 'image2.jpg'],
  };

  render(
    <BrowserRouter>
      <AppProvider>
        <RoomCard room_type_id={0} highResImages={[]} promotionType={{
          promotion_description: '',
          promotion_id: '',
          promotion_title: '',
          price_factor: 0
        }} {...mockRoom} />
      </AppProvider>
    </BrowserRouter>
  );


  const roomTypeNameElement = screen.getByText(/Deluxe Suite/i);
  expect(roomTypeNameElement);


  const averageRateElement = screen.getByText(/per night/i);
  expect(averageRateElement);


  const selectRoomButton = screen.getByText(/Select Room/i);
  expect(selectRoomButton);

});
