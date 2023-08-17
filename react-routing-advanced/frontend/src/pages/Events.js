import EventsList from "../components/EventsList";
import { useLoaderData } from "react-router-dom";

const EventsPage = () => {
  const data = useLoaderData();

  if (data.isError) {
    return <p>{data.message}</p>;
  }

  const events = data.events;

  return <EventsList events={events} />;
};

export default EventsPage;

export const eventsLoader = async () => {
  const response = await fetch("http://localhost:8080/eventss");

  if (!response.ok) {
    /**
     * If response is not ok then throw an error. The error will be handled by the React Router.
     */
    throw new Error();
  } else {
    /**
     * Instead of extracting data from the response, React Router allows us to return the
     * response directly, and then extract data using useLoaderData hook.
     */
    return response;
  }
};
