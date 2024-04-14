import RoomResultsPage from '../components/searchpage/RoomResultpage';
import Footer from '../components/layout/Footer';
import { useEffect } from 'react';
import ReactGA from 'react-ga4';

const SearchPage = () => {
   useEffect(() => {
      ReactGA.send({ hitType: "pageview", page: `${window.location.pathname}`, title: "RoomResults Page Visit" });
   }, [])

   return (
      <div>
         <RoomResultsPage />
         <Footer sticky={false} />
      </div>
   );
};

export default SearchPage;
