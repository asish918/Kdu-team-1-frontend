import React, { useState } from 'react';
import Banner from './Banner';
import Stepper from './Stepper';
import SearchForm from './Searchbox';
import RoomResultsPanel from './Roompanel';
import AccordionWithCheckboxes from './Roomfilter';
import styled from 'styled-components';

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
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div style={{ flex: '0 0 20%', overflow: 'auto' }}>
          <AccordionWithCheckboxes />
        </div>
        <div style={{ flex: '0 0 80%', overflow: 'auto' }}>
          <RoomResultsPanel />
        </div>
      </div>

    </div>
  );
}

export default RoomResultsPage;


