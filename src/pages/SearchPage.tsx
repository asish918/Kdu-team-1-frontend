import RoomResultsPage from '../components/searchpage/RoomResultpage';
import Footer from '../components/layout/Footer';

const SearchPage = () => {

   return (
      <div>
         <RoomResultsPage />
         <Footer sticky={false} />
      </div>
   );
};

export default SearchPage;
