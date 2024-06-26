import { store } from "./redux/store";
import { useEffect } from "react";
import { fetchPropertyConfig } from "./redux/thunks/fetchPropertyConfig";
import { fetchPropertyList } from "./redux/thunks/fetchPropertyList";
import { fetchCalendarDates } from "./redux/thunks/fetchCalendarDates";
import { fetchExchangeRates } from "./redux/thunks/fetchExchangeRates";
import AppProvider from "./providers/AppProvider";
import { Outlet } from "react-router-dom";

export async function loader() {
  store.dispatch(fetchPropertyConfig());
  store.dispatch(fetchPropertyList());
  store.dispatch(fetchCalendarDates());
  store.dispatch(fetchExchangeRates());
  return null;
}

function App() {
  return (
    <AppProvider>
      <Outlet />
    </AppProvider>

  );
}

export default App;
