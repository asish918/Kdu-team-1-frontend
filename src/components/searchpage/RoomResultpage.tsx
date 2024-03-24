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
import { convertStatesToQueryString, requestBodyGenerator } from '../../utils/util';
import { searchFieldFormValidator, validateFilters } from '../../utils/validator';
import { setAdults, setBeds, setEndDatePick, setKids, setNumberOfRooms, setStartDatePick, setTeens, setTotalGuests } from '../../redux/reducers/searchFormReducer';
import { RoomResultRequestBody } from '../../types';
import { fetchRoomResult } from '../../redux/thunks/fetchRoomResults';
import { setBedTypes, setPriceSort, setRoomTypes } from '../../redux/reducers/filterSortReducer';

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
    const searchParams = new URLSearchParams(location.search);

    if (!validateFilters(filterSortProps)) {
      return;
    }

    if (!searchFieldFormValidator(searchParams)) throw new Error("Invalid Request");

    dispatch(setStartDatePick(new Date(searchParams.get('startDate')!)));
    dispatch(setEndDatePick(new Date(searchParams.get('endDate')!)));
    dispatch(setAdults(parseInt(searchParams.get('adults')!)));
    dispatch(setBeds(parseInt(searchParams.get('beds')!)));
    dispatch(setKids(parseInt(searchParams.get('kids')!)));
    dispatch(setTeens(parseInt(searchParams.get('teens')!)));
    dispatch(setNumberOfRooms(parseInt(searchParams.get('numberOfRooms')!)));
    dispatch(setTotalGuests(parseInt(searchParams.get('totalGuests')!)));

    if (!validateFilters(filterSortProps)) {
      const roomTypes = searchParams.getAll('roomTypes');
      const bedTypesString = searchParams.get('bedTypes') || '';
      const bedTypes = bedTypesString.split(',');
      dispatch(setBedTypes(bedTypes.length > 0 ? bedTypes : []));
      dispatch(setRoomTypes(roomTypes.length > 0 ? roomTypes : []));
    }

    dispatch(setPriceSort(searchParams.get('priceSort') === 'true'));

    const bedTypesString = searchParams.get('bedTypes') || '';
    const bedTypes = bedTypesString.split(',');

    const requestBody: RoomResultRequestBody = {
      startDate: searchParams.get('startDate')!,
      endDate: searchParams.get('endDate')!,
      beds: parseInt(searchParams.get('beds')!),
      rooms: parseInt(searchParams.get('numberOfRooms')!),
      propertyId: parseInt(searchParams.get('propertyId')!),
      totalGuests: parseInt(searchParams.get('totalGuests')!),
      roomTypes: searchParams.getAll('roomTypes').length > 0 ? searchParams.getAll('roomTypes') : [],
      priceSort: searchParams.get('priceSort') === 'true',
      bedTypes: bedTypes.length > 0 ? bedTypes : []
    };


    console.log(requestBody);

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
    const searchParams = convertStatesToQueryString(searchFormProps, filterSortProps);

    dispatch(fetchRoomResult({
      url: `api/roomresult/search?page=${currentPage}&size=2`,
      requestBody
    }));

    navigate(`/room-result?${searchParams}`);
  }, [filterSortProps, currentPage])


  const handleSearch = () => {
    const searchParams = convertStatesToQueryString(searchFormProps, filterSortProps);
    const requestBody: RoomResultRequestBody = requestBodyGenerator(searchFormProps, filterSortProps);
    dispatch(fetchRoomResult({
      url: `api/roomresult/search?page=${currentPage}&size=2`,
      requestBody
    }));
    navigate(`/room-result?${searchParams}`);
  }

  return (
    <div>
      <Banner imageUrl={propertyConfig.bannerImageUrl} />
      <Stepper />
      <RoomResultContainer>
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


