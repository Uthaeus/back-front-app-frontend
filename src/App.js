import { useState, useEffect, createContext } from "react";
import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";

import RootLayout from "./pages/root-layout";
import HomePage from "./pages/home";
import ErrorPage from "./pages/error";
import Meetups from "./pages/meetups";
import { MeetupContext } from "./store/meetup-context";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: "/meetups",
        element: <Meetups />
      }
    ]
  }
]);

function App() {
  const meetCtx = createContext(MeetupContext);

  useEffect(() => {
    fetch("localhost:3000/meetups")
      .then((response) => {
        console.log("useEffect App response", response);
        return response.json();
      })
      .then((data) => {
        console.log("useEffect App data", data);
        meetCtx.initializeMeetups(data);
      })
      .catch((error) => {
        console.log("useEffect App error", error);
      });
  }, [meetCtx]);

  return <RouterProvider router={router} />
}

export default App;
