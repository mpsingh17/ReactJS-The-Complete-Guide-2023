import EventsList from "../components/EventsList";
import { useLoaderData } from "react-router-dom";

const EventsPage = () => {
  const events = useLoaderData();

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
    const resData = await response.json();
    return resData.events;
  }
};
