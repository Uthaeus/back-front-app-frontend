import { useState, useEffect, useContext } from "react";
import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";

import RootLayout from "./pages/root-layout";
import HomePage from "./pages/home";
import ErrorPage from "./pages/error";
import Meetups from "./pages/meetups";
import { MeetupContext } from "./store/meetup-context";
import MeetupDetail from "./components/meetup/meetupDetail";
import NewMeetup from "./components/meetup/new-meetup";
import EditMeetup from "./components/meetup/edit-meetup";

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
      },
      {
        path: "/meetups/:meetupId",
        element: <MeetupDetail />
      },
      {
        path: "/meetups/:meetupId/edit",
        element: <EditMeetup />
      },
      {
        path: "/meetup/new",
        element: <NewMeetup />
      }
    ]
  }
]);

function App() {
  const meetCtx = useContext(MeetupContext);

  useEffect(() => {
    fetch("http://localhost:3000/meetups")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        meetCtx.initializeMeetups(data);
      })
      .catch((error) => {
        console.log("useEffect App error", error);
      });
  }, []);

  return <RouterProvider router={router} />
}

export default App;
