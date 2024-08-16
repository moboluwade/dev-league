
import { useParams } from "react-router-dom";
import EventForm from "./EventForm";
import { useEvent } from "./useEvent";

const EditEvent = () => {
  const { id } = useParams();

  const { isLoading, event } = useEvent({ id });

  if (isLoading) return;
  const {
    isEventOpen,
    title,
    description,
    type,
    startDate,
    eventType,
    endDate,
  } = event;

  return (
    <div className=" py-2  flex flex-col justify-start px-4 items-left md:p-12 w-full pb-10">
      <h2 className="pb-8 text-4xl font-bold">Event Management</h2>
      <EventForm
        eventToEdit={{
          id,
          isEventOpen,
          title,
          description,
          type,
          startDate,
          endDate,
          eventType,
        }}
      />
    </div>
  );
};

export default EditEvent;
