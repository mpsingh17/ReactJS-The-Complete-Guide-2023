import { json, redirect, useRouteLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem";

const EventsDetailsPage = () => {
  const data = useRouteLoaderData("event-details");

  return (
    <>
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

export async function deleteEventAction({ params, request }) {
  const eventId = params.eventId;

  const response = await fetch(`http://localhost:8080/events/${eventId}`, {
    method: request.method,
  });

  if (!response.ok) {
    throw json({ message: "Couldn't delete event." }, { status: 500 });
  } else {
    return redirect("/events");
  }
}
