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

const RoomResultContainer = styled.div`
  padding-inline: 20px;

  @media (max-width: 570px) {
    padding-inline: 0px;
  }
`

const RoomResultFlexContainer = styled.div`
  display: flex;
  width: 100%;

  @media (max-width: 570px) {
    flex-wrap: wrap;
  }
`

const AccordionContainer = styled.div`
  flex-basis: 20%;

  @media (max-width: 570px) {
    flex-basis: 95%;
  }
`

const RoomResultPanelContainer = styled.div`
  flex-basis: 80%;

  @media (max-width: 570px) {
    flex-basis: 100%;
  }
`

function RoomResultsPage({ onSearch }: RoomResultsPageProps) {
  const [searchParams, setSearchParams] = useState({ dateRange: [new Date(), new Date()], beds: 1 });

  const handleSearch = (params: { dateRange: Date[]; beds: number }) => {
    setSearchParams(params);
    onSearch(params);
  };

  return (
    <div>
      <Banner imageUrl="https://picsum.photos/200/200" />
      <RoomResultContainer>
        <Stepper />
        <SearchForm onSearch={handleSearch} />
        <RoomResultFlexContainer>
          <AccordionContainer>
            <AccordionWithCheckboxes />
          </AccordionContainer>
          <RoomResultPanelContainer>
            <RoomResultsPanel />
          </RoomResultPanelContainer>
        </RoomResultFlexContainer>
      </RoomResultContainer>
    </div >
  );
}

export default RoomResultsPage;


