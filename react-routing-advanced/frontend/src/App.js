import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";
import EventsPage, { eventsLoader } from "./pages/Events";
import EventsDetailsPage, {
  eventDetailsLoader,
  deleteEventAction,
} from "./pages/EventsDetails";
import NewEventPage from "./pages/NewEvent";
import { action as addEditEventAction } from "./components/EventForm";
import EditEventPage from "./pages/EditEvent";
import EventsLayout from "./pages/EventsLayout";
import ErrorPage from "./pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "events",
        element: <EventsLayout />,
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: eventsLoader,
          },
          {
            path: ":eventId",
            id: "event-details",
            loader: eventDetailsLoader,
            children: [
              {
                index: true,
                element: <EventsDetailsPage />,
                action: deleteEventAction,
              },
              {
                path: "edit",
                element: <EditEventPage />,
                action: addEditEventAction,
              },
            ],
          },
          {
            path: "new",
            element: <NewEventPage />,
            action: addEditEventAction,
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
