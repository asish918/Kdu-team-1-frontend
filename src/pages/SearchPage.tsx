import RoomResultsPage from '../components/searchpage/RoomResultpage';
import Footer from '../components/layout/Footer';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';

const SearchPage = () => {
   const location = useLocation();
   // Define the onSearch function
   const handleSearch = () => {
      const queryParams = queryString.parse(location.search);
      console.log(queryParams);
   };

   return (
      <div>
         <RoomResultsPage onSearch={handleSearch} />
         <Footer sticky={false} />
      </div>
   );
};

export default SearchPage;
