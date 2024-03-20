import React, { useState } from 'react';
import Banner from './Banner'; 
import Stepper from './Stepper'; 
import SearchForm from './Searchbox'; 
import RoomResultsPanel from './Roompanel';
import AccordionWithCheckboxes from './Roomfilter';

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
      <Stepper />
      <SearchForm onSearch={handleSearch} />
      <div style={{ display: 'flex', flexDirection: 'row' }}> {/* Wrap AccordionWithCheckboxes and RoomResultsPanel in a flex container */}
        <div style={{ flex: '0 0 20%', overflow: 'auto' }}> {/* 20% width for AccordionWithCheckboxes */}
          <AccordionWithCheckboxes />
        </div>
        <div style={{ flex: '0 0 80%', overflow: 'auto' }}> {/* 80% width for RoomResultsPanel */}
          <RoomResultsPanel />
        </div>
      </div>
      
    </div>
 );
}

export default RoomResultsPage;

   
   