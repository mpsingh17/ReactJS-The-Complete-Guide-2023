import { json, useLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem";

const EventsDetailsPage = () => {
  const data = useLoaderData();

  return (
    <>
      <h1>Events Details Page.</h1>
      <EventItem event={data.event} />
    </>
  );
};

export default EventsDetailsPage;

export async function eventDetailsLoader({ request, params }) {
  const eventId = params.eventId;

  const response = await fetch(`http://localhost:8080/events/${eventId}`);

  if (!response.ok) {
    throw json(
      { message: "Couldn't fetch details for selected events." },
      { status: 500 }
    );
  } else {
    return response;
  }
}
