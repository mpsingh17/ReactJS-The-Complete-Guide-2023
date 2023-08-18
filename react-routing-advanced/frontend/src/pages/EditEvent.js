import { useRouteLoaderData } from "react-router-dom";
import EventForm from "../components/EventForm";

const EditEventPage = () => {
  const data = useRouteLoaderData("event-details");
  const event = data.event;

  return (
    <>
      <EventForm event={event} />
    </>
  );
};

export default EditEventPage;
