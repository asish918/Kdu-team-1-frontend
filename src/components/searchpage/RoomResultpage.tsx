import { useEffect } from 'react';
import Banner from './Banner';
import Stepper from './Stepper';
import SearchForm from './Searchbox';
import RoomResultsPanel from './Roompanel';
import AccordionWithCheckboxes from './Roomfilter';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import { convertSearchParamsToQueryString, requestBodyGenerator } from '../../utils/util';
import { searchFieldFormValidator, validateFilters } from '../../utils/validator';
import { setAdults, setBeds, setEndDatePick, setKids, setNumberOfRooms, setStartDatePick, setTeens, setTotalGuests } from '../../redux/reducers/searchFormReducer';
import { RoomResultRequestBody } from '../../types';
import { fetchRoomResult } from '../../redux/thunks/fetchRoomResults';
import { setBedTypes, setRoomTypes } from '../../redux/reducers/filterSortReducer';

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

  @media (max-width: 768px) {
    flex-basis: 100%;
  }
`

function RoomResultsPage({ onSearch }: RoomResultsPageProps) {
  const propertyConfig = useSelector((state: RootState) => state.propertyConfig.property)
  const searchFormProps = useSelector((state: RootState) => state.searchForm);
  const filterSortProps = useSelector((state: RootState) => state.filterState);
  const currentPage = useSelector((state: RootState) => state.roomResult.page);
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const queryParams = queryString.parse(location.search);

    if (!validateFilters(filterSortProps)) {
      return;
    }

    if (!searchFieldFormValidator(queryParams)) throw new Error("Invalid Request")

    dispatch(setStartDatePick(new Date(queryParams.startDate)));
    dispatch(setEndDatePick(new Date(queryParams.endDate)));
    dispatch(setAdults(parseInt(queryParams.adults)));
    dispatch(setBeds(parseInt(queryParams.beds)));
    dispatch(setKids(parseInt(queryParams.kids)));
    dispatch(setTeens(parseInt(queryParams.teens)));
    dispatch(setNumberOfRooms(parseInt(queryParams.numberOfRooms)));
    dispatch(setTotalGuests(parseInt(queryParams.totalGuests)));

    const requestBody: RoomResultRequestBody = {
      startDate: "2024-03-01T00:00:00.000Z",
      endDate: "2024-03-02T00:00:00.000Z",
      beds: "0",
      rooms: "1",
      propertyId: "1",
      totalGuests: "2",
      roomTypes: [],
      priceSort: true,
      bedTypes: []
    }

    dispatch(fetchRoomResult({
      url: `api/roomresult/search?page=${currentPage}&size=2`,
      requestBody
    }));
  }, [currentPage])


  useEffect(() => {
    if (validateFilters(filterSortProps)) {
      return;
    }

    const requestBody: RoomResultRequestBody = requestBodyGenerator(searchFormProps, filterSortProps);

    dispatch(fetchRoomResult({
      url: `api/roomresult/search?page=${currentPage}&size=2`,
      requestBody
    }));

  }, [filterSortProps, currentPage])


  const handleSearch = () => {
    const searchParams = convertSearchParamsToQueryString(searchFormProps);
    const requestBody: RoomResultRequestBody = requestBodyGenerator(searchFormProps, filterSortProps);
    dispatch(fetchRoomResult({
      url: `api/roomresult/search?page=${currentPage}&size=2`,
      requestBody
    }));
    dispatch(setBedTypes(null));
    dispatch(setRoomTypes(null));
    navigate(`/room-result?${searchParams}`);
  }

  return (
    <div>
      <Banner imageUrl={propertyConfig.bannerImageUrl} />
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


