import { useParams } from "react-router-dom";
import EventForm from "./EventForm";
import { useEvent } from "./useEvent";

const EditEvent = () => {
  const { id } = useParams();

  const { isLoading, event } = useEvent({ id });

  if (isLoading) return;
  const { isEventOpen, title, description, type, startDate } = event;

  console.log(event);

  return (
    <div className=" py-2  flex flex-col justify-start px-4 items-left md:p-12 ">
      <h2 className="pb-8 text-4xl font-bold">Event Management</h2>
      <EventForm
        eventToEdit={{ isEventOpen, title, description, type, startDate }}
      />
    </div>
  );
};

export default EditEvent;
