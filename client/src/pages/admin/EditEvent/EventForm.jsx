import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import DateStart from "../DateStart";
import DateEnd from "../DateEnd";
import TimeStart from "../TimeStart";
import TimeEnd from "../TimeEnd";

import { generateUploadButton } from "@uploadthing/react";
import { useEditEvent } from "./useEditEvent";
// import { useDeleteEvent } from "./useDeleteEvent";
import Modal from "../../../components/ui/Modal";
// import ConfirmDelete from "../../../components/ui/ConfirmDelete";

export const UploadButton = generateUploadButton();

const EventForm = ({ eventToEdit }) => {
  // state management
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [finalStartDate, setFinalStartDate] = useState("");
  const [finalEndDate, setFinalEndDate] = useState("");
  const [bannerImage, setBannerImage] = useState();
  const [bannerImageName, setBannerImageName] = useState(null);

  const [startDate, setStartDate] = useState("");
  const [startDateMonth, setStartDateMonth] = useState("");
  const [startDateYear, setStartDateYear] = useState("");
  const [endDate, setEndDate] = useState("");
  const [endDateMonth, setEndDateMonth] = useState("");
  const [endDateYear, setEndDateYear] = useState("");
  const [endHour, setEndHour] = useState("");
  const [endMinute, setEndMinute] = useState("");
  const [startHour, setStartHour] = useState("");
  const [startMinute, setStartMinute] = useState("");

  useEffect(() => {
    const date = new Date(
      startDateYear,
      startDateMonth,
      startDate,
      startHour,
      startMinute
    );
    setFinalStartDate(date);
  }, [startDateYear, startDateMonth, startDate, startHour, startMinute]);

  useEffect(() => {
    const date = new Date(
      endDateYear,
      endDateMonth,
      endDate,
      endHour,
      endMinute
    );
    setFinalEndDate(date);
    // console.log("End Date updated:", date);
  }, [endDateYear, endDateMonth, endDate, endHour, endMinute]);

  const handleLocationChange = (event) => {
    setSelectedLocation(event.target.value);
  };

  const handleChange = (e) => {
    setBannerImageName(e.target.files[0].name);
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      setBannerImage(reader.result);
      // console.log("Banner Image updated:", reader.result);
    };
  };

  // Check if we are editing or creating a new event through Id
  const { id: eventId, ...editValues } = eventToEdit || {};

  // This will return true if we are editing only
  const isEditSession = Boolean(eventId);

  // React-hook-form to set the default value of input field in edit session
  const { register, handleSubmit, setValue } = useForm({
    defaultValues: isEditSession ? editValues : "",
  });

  // The custom hook for creating and editing event

  const { isEditing, editEvent, isSuccess } = useEditEvent();
  // const { isDeleting, deleteEvent } = useDeleteEvent();

  useEffect(() => {
    // Set the default value for eventType radio based on editValues.eventType
    if (editValues.eventType) {
      setValue("eventType", editValues.eventType);
      setSelectedLocation(editValues.eventType); // Update state as well
    }
  }, [editValues.eventType, setValue]);

  const handleFormSubmit = (data) => {
    if (isEditSession) {
      editEvent({
        newEventDataData: {
          startDate: finalStartDate,
          endDate: finalEndDate,
          title: data.title,
          description: data.description,
          eventType: data.eventType,
          eventBanner: bannerImage,
          eventBannerName: bannerImageName,
        },
        eventId,
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      className="flex flex-col justify-start w-full"
    >
      <div className="flex flex-col justify-center">
        <div className="flex flex-col pt-4">
          <label className="pb-1 font-bold" htmlFor="event-title">
            Event Title
          </label>
          <input
            {...register("title", { required: "This field is required" })}
            className="border-[1.5px] border-[#292422] placeholder:text-[#9F918B] pl-4 max-w-[36rem] h-10 outline-none rounded-md"
            placeholder="Event Title"
            type="text"
            name="title"
            id="title"
          />
        </div>
        <div className="flex flex-col pt-4">
          <label className="pb-1 font-bold" htmlFor="description">
            Event Tagline
          </label>
          <textarea
            {...register("description", {
              required: "This field is required",
            })}
            className="border-[1.5px] h-[10rem] border-[#292422] placeholder:text-[#9F918B] px-4 max-w-[36rem] placeholder:text-start resize-none py-4 outline-none rounded-md"
            placeholder="Break in to Tech in 2024 seamlessly..."
            name="description"
            id="description"
          />
        </div>
        <div className="flex flex-col pt-4">
          <label className="pb-1 font-bold" htmlFor="event-location">
            Event Location
          </label>
          <div
            className="flex flex-row justify-center md:justify-start content-center border-[1.5px] border-[#292422] placeholder:text-[#9F918B] pl-4 py-4 max-w-[36rem] placeholder:text-start h-fit gap-6 outline-none rounded-md"
            name="event-location"
            id="event-location"
          >
            <label
              className={`px-3 flex flex-row items-center gap-1 pt-[0.125rem] pb-[0.125rem] text-white border h-fit rounded-2xl ${
                selectedLocation === "virtual"
                  ? "bg-text-dev-orange"
                  : "bg-[#D4CECB] text-[#9F918B]"
              } `}
            >
              <input
                {...register("eventType")}
                className={`w-2 h-2 bg-white rounded-full appearance-none ${
                  selectedLocation === "virtual" ? "bg-white" : "bg-[#9F918B]"
                }`}
                type="radio"
                value="virtual"
                checked={selectedLocation === "virtual"}
                onChange={handleLocationChange}
              />
              <span>Virtual</span>
            </label>
            <label
              className={`px-3 flex flex-row items-center gap-1 pt-[0.125rem] pb-[0.125rem] text-white border h-fit rounded-2xl ${
                selectedLocation === "onsite"
                  ? "bg-text-dev-orange"
                  : "bg-[#D4CECB] text-[#9F918B]"
              }`}
            >
              <input
                {...register("eventType")}
                className={`w-2 h-2 bg-white rounded-full appearance-none ${
                  selectedLocation === "onsite" ? "bg-white" : "bg-[#9F918B]"
                }`}
                type="radio"
                value="onsite"
                checked={selectedLocation === "onsite"}
                onChange={handleLocationChange}
              />
              <span>Onsite</span>
            </label>
          </div>
          <div className="pb-8"></div>

          <DateStart
            setStartDate={setStartDate}
            startDate={startDate}
            setStartDateMonth={setStartDateMonth}
            startDateMonth={startDateMonth}
            setStartDateYear={setStartDateYear}
            startDateYear={startDateYear}
          />
          <DateEnd
            setEndDate={setEndDate}
            endDate={endDate}
            setEndDateMonth={setEndDateMonth}
            endDateMonth={endDateMonth}
            setEndDateYear={setEndDateYear}
            endDateYear={endDateYear}
          />

          <TimeStart
            setStartHour={setStartHour}
            setStartMinute={setStartMinute}
          />
          <TimeEnd setEndHour={setEndHour} setEndMinute={setEndMinute} />

          {/* add event image */}
          <div className="flex flex-col pt-4">
            <label className="pb-1 font-bold" htmlFor="event-title">
              Choose Event Banner
            </label>
            <label
              htmlFor="file-input"
              className="h-fit border-[1.5px] bg-[#E2DEDC] border-[#292422] rounded-md flex flex-row items-center max-w-[36rem]"
            >
              <div className="bg-white w-full placeholder:text-black placeholder:font-semibold pl-4 h-12 outline-none rounded-md rounded-r-none border-r-[1px] border-black flex flex-col justify-center">
                <span className="text-[#9F918B] font-bold">
                  {bannerImageName ? bannerImageName : "Choose file"}
                </span>
              </div>
              <span className="px-2 font-bold w-fit">Browse</span>
              <input
                name="file-input"
                onChange={(e) => {
                  handleChange(e);
                }}
                accept="image/*"
                className="hidden"
                id="file-input"
                type="file"
              />
            </label>
          </div>
        </div>
      </div>

      <Modal>
        <div className="flex flex-row items-center justify-end max-w-[36rem] gap-4 pt-4 mb-20">
          {/* <Modal.Open opens={eventId}>
            <button
              type="button"
              className="px-6 py-2 text-xl font-semibold tracking-wide text-white bg-red-700 rounded-lg "
            >
              {isDeleting ? "Deleting..." : "Delete"}
            </button>
          </Modal.Open> */}
          <button
            disabled={isEditing}
            type="submit"
            className="px-6 py-2 text-xl font-semibold tracking-wide text-white rounded-lg bg-text-dev-orange"
          >
            {/* {isEditing ? "Loading" : "Edit"} */}
            {isSuccess ? "Edited" : isEditing ? "Loading" : "Edit"}
          </button>

          {/* <Modal.Window name={eventId}>
            <ConfirmDelete
              disabled={isDeleting}
              resourceName="event"
              onConfirm={(eventId) => deleteEvent(eventId)}
            />
          </Modal.Window> */}
        </div>
      </Modal>
    </form>
  );
};

export default EventForm;
