import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Amplify } from 'aws-amplify';

import ErrorPage from "./pages/ErrorPage.tsx";
import { sentryConfig } from "./utils/sentryConfig.ts";
import { authConfig } from "./auth/authConfig.ts";
import LoginPage from "./pages/LoginPage.tsx";
import LandingPage from "./pages/LandingPage.tsx";
import SearchPage from "./pages/SearchPage.tsx";
import { Authenticator } from "@aws-amplify/ui-react";
import CheckoutPage from "./pages/CheckoutPage.tsx";
import FeedbackPage from "./pages/FeedbackPage.tsx";
import BasicErrorPage from "./pages/BasicErrorPage.tsx";
import ConfirmationPage from "./pages/ConfirmationPage.tsx";
import MyBookingsPage from "./pages/MyBookingsPage.tsx";
import MapPage from "./pages/MapPage.tsx";
import ReactGA from "react-ga4";

Amplify.configure({
  Auth: authConfig
});

const TRACKING_ID = "G-6B896LFBRT";

ReactGA.initialize(TRACKING_ID, {
  gtagUrl: "https://www.googletagmanager.com/gtag/js?id=G-6B896LFBRT"
});

// Check if the environment is production
const isProduction = process.env.NODE_ENV === "production";

if (isProduction) {
  // sentryConfig();
}

// React Router DOM Router Config
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/room-result",
        element: <SearchPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/checkout",
        element: <CheckoutPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/confirmation",
        element: <ConfirmationPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/my-bookings",
        element: <MyBookingsPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/maps",
        element: <MapPage />,
        errorElement: <ErrorPage />,
      },
    ]
  },
  {
    path: "/feedback",
    element: <FeedbackPage />,
    errorElement: <BasicErrorPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
    errorElement: <ErrorPage />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Authenticator.Provider>
      <RouterProvider router={router} />
    </Authenticator.Provider>
  </React.StrictMode>,
);
