import React from 'react';
import RoomResultsPage from '../components/searchpage/RoomResultpage';
import Footer from '../components/layout/Footer';

const SearchPage = () => {
   // Define the onSearch function
   const handleSearch = (params: { dateRange: Date[]; beds: number }) => {
      // Implement the logic to handle the search parameters
      console.log(params);
   };

   return (
      <div>
         <RoomResultsPage onSearch={handleSearch} />
         <Footer sticky={false} />
      </div>
   );
};

export default SearchPage;
