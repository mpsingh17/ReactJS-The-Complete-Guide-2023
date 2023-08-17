import EventsList from "../components/EventsList";
import { useLoaderData } from "react-router-dom";

const EventsPage = () => {
  const data = useLoaderData();
  const events = data.events;

  return (
    <>
      <EventsList events={events} />
    </>
  );
};

export default EventsPage;

export const eventsLoader = async () => {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    // TODO: Deal with incorrect response.
  } else {
    /**
     * Instead of extracting data from the response, React Router allows us to return the
     * response directly, and then extract data using useLoaderData hook.
     */
    return response;
  }
};
