import React, { useState } from 'react';
import Banner from './Banner'; 
import Stepper from './Stepper'; 
import SearchForm from './Searchbox'; 
import RoomResultsPanel from './Roompanel';


// Define the type for the onSearch function
interface RoomResultsPageProps {
 onSearch: (params: { dateRange: Date[]; beds: number }) => void;
}

function RoomResultsPage({ onSearch }: RoomResultsPageProps) {
 const [searchParams, setSearchParams] = useState({ dateRange: [new Date(), new Date()], beds: 1 });

 const handleSearch = (params: { dateRange: Date[]; beds: number }) => {
    setSearchParams(params);
    onSearch(params);
 };

 return (
    <div>
      <Banner imageUrl="https://picsum.photos/200/200" />
      <Stepper  />
      <SearchForm onSearch={handleSearch} />
      <RoomResultsPanel/>     
    </div>
 );
}

export default RoomResultsPage;

   
   