import { generateUploadButton } from "@uploadthing/react";
import EventForm from "./EventForm";

export const UploadButton = generateUploadButton();

const NewEvent = () => {
  return (
    <div className=" py-2  flex flex-col justify-start px-4 items-left md:p-12 ">
      <h2 className="pb-8 text-4xl font-bold">Event Management</h2>
      <EventForm />
    </div>
  );
};

export default NewEvent;
