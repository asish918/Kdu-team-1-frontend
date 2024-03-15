import styled from "styled-components";
import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import Content from "./components/Content";
import axios from "axios";
import { ROOMS_QUERY } from "./graphql/queries";
import AppProvider from "./providers/AppProvider";
import SearchForm from "./components/SearchForm";
import LandingPage from "./components/LandingPage";
import { DatePicker } from "./components/datepicker/DatePicker";

const StyledP = styled.p`
  text-align: center;
`;

function App() {
  return (
    <AppProvider>
      <LandingPage />
    </AppProvider>
  );
}

export default App;
