import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

import ErrorPage from './pages/ErrorPage.tsx';
// import { sentryConfig } from './utils/sentryConfig.ts';

const client = new ApolloClient({
  uri: `${process.env.GRAPHQL_URL}`,
  cache: new InMemoryCache()
});

// Check if the environment is production
const isProduction = process.env.NODE_ENV === 'production';

if (isProduction) {
  // sentryConfig();
}


// React Router DOM Router Config
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  </React.StrictMode>,
);
