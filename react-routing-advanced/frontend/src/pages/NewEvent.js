import EventForm from "../components/EventForm";
import { json, redirect } from "react-router-dom";

const NewEventPage = () => {
  return <EventForm />;
};

export default NewEventPage;

export const action = async ({ request, params }) => {
  const data = await request.formData();

  const eventDataToSubmit = {
    title: data.get("title"),
    image: data.get("image"),
    date: data.get("date"),
    description: data.get("description"),
  };

  const response = await fetch("http://localhost:8080/events", {
    method: "POST",
    headers: {
      "COntent-Type": "application/json",
    },
    body: JSON.stringify(eventDataToSubmit),
  });

  if (response.status === 422) {
    console.log(response.status);
    return response;
  }

  if (!response.ok) {
    throw json({ message: "Could not save event." }, { status: 500 });
  } else {
    return redirect("/events");
  }
};
