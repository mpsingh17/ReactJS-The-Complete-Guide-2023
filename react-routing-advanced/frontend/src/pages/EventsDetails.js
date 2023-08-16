import { Link, useParams } from "react-router-dom";

const EventsDetailsPage = () => {
  const params = useParams();

  return (
    <>
      <Link to=".." relative="path">
        Back to events
      </Link>
      <h1>Events Details Page.</h1>
      <p>You selecetd {params.eventId}</p>
    </>
  );
};

export default EventsDetailsPage;
