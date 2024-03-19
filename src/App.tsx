import LandingPage from "./pages/LandingPage";
import { AppDispatch } from "./redux/store";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchPropertyConfig } from "./redux/thunks/fetchPropertyConfig";
import { fetchPropertyList } from "./redux/thunks/fetchPropertyList";
import { fetchCalendarDates } from "./redux/thunks/fetchCalendarDates";
import { fetchExchangeRates } from "./redux/thunks/fetchExchangeRates";
import SearchPage from "./pages/SearchPage";

function App() {
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPropertyConfig());
    dispatch(fetchPropertyList());
    dispatch(fetchCalendarDates());
    dispatch(fetchExchangeRates());
  }, [])

  return (
    <SearchPage/>
  );
}

export default App;
