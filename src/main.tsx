import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { createBrowserRouter } from 'react-router-dom';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     errorElement: <ErrorPage />,
//     children: [
//       {
//         path: "/",
//         element: <Dashboard />
//       },
//       {
//         path: "/stock-info/:stockSymbol",
//         element: <StockInfo />
//       },
//       {
//         path: "/portfolio",
//         element: <Portfolio />
//       },
//       {
//         path: "/summarizer",
//         element: <Summarizer />
//       },
//     ]
//   },
// ]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
