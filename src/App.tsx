import styled from "styled-components";
import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import Content from "./components/Content";
import axios from "axios";
import { ROOMS_QUERY } from "./graphql/queries";
import AppProvider from "./providers/AppProvider";
import SearchForm from "./components/SearchForm";
import LandingPage from "./components/LandingPage";

const StyledP = styled.p`
  text-align: center;
`;

function App() {
  // const { data, loading, error } = useQuery(ROOMS_QUERY);
  // const [apiText, setApi] = useState("");

  // useEffect(() => {
  //   axios
  //     .get(`${process.env.API_URL}`)
  //     .then((res) => {
  //       console.log(res.data);
  //       setApi(res.data);
  //     })
  //     .catch((error) => console.log(error));
  // }, []);

  // useEffect(() => {
  //   if (!loading) {
  //     console.log(data);
  //   }

  //   if (error) {
  //     throw error;
  //   }
  // }, [loading, error]);

  return (
    <AppProvider>
      {/* <StyledP>{apiText}</StyledP> */}
      {/* <Content /> */}
      {/* <SearchForm /> */}
      <LandingPage/>
    </AppProvider>
  );
}

export default App;
