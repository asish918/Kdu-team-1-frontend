import LandingPage from "./pages/LandingPage";
import { AppDispatch, store } from "./redux/store";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchPropertyConfig } from "./redux/thunks/fetchPropertyConfig";
import { fetchPropertyList } from "./redux/thunks/fetchPropertyList";
import { fetchCalendarDates } from "./redux/thunks/fetchCalendarDates";
import { fetchExchangeRates } from "./redux/thunks/fetchExchangeRates";
import SearchPage from "./pages/SearchPage";
import AppProvider from "./providers/AppProvider";

function App() {

  useEffect(() => {
    store.dispatch(fetchPropertyConfig());
    store.dispatch(fetchPropertyList());
    store.dispatch(fetchCalendarDates());
    store.dispatch(fetchExchangeRates());
  }, [])

  return (
    <AppProvider>
      <SearchPage />
      <LandingPage />
    </AppProvider>
  );
}

export default App;
