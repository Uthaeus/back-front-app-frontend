
import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";

import RootLayout from "./pages/root-layout";
import HomePage from "./pages/home";
import ErrorPage from "./pages/error";
import Meetups from "./pages/meetups";
import MeetupDetail from "./components/meetup/meetupDetail";
import NewMeetup from "./components/meetup/new-meetup";
import EditMeetup from "./components/meetup/edit-meetup";
import AuthPage from "./components/auth/auth";
import Login from "./components/auth/login";
import Signup from "./components/auth/signup";

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
  },
  {
    path: "/auth",
    element: <AuthPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/signup",
        element: <Signup />
      }
    ]
  }
]);

function App() {

  return <RouterProvider router={router} />
}

export default App;
