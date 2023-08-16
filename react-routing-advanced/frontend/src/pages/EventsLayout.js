import { Outlet } from "react-router-dom";
import EventsNavigation from "../components/EventsNavigation";

const EventsLayout = () => {
  return (
    <>
      <h1>Events Layout</h1>
      <EventsNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default EventsLayout;
