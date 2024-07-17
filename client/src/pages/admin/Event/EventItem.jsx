import { RxDotFilled } from "react-icons/rx";
import Banner from "../../../../public/event-image.png";
import CreateEvent from "./EventForm";
import { useState } from "react";

const EventItem = ({ eventItem }) => {
  const [showEdit, setShowEdit] = useState(false);
  const { eventTitle, id, eventTagline, type: eventType } = eventItem;

  return (
    <div key={eventItem.id}>
      <div className="flex  flex-col gap-6 justify-center items-center max-w-full">
        <div className="flex gap-6 flex-col max-w-[75rem]">
          <div className="flex gap-2 px-2 py-4 border-2 rounded-md md:px-4 border-neutral400 md:gap-4 w-full">
            <div className="flex flex-col items-center justify-center px-4 py-3 lg:px-8 lg:py-6 text-white bg-primary500">
              <span className="text-2xl font-bold md:text-5xl">07</span>
              <span className="text-lg uppercase md:text-2xl">08</span>
            </div>
            <div>
              <img className="h-[100%] hidden lg:inline " src={Banner} />
            </div>
            <div className="flex flex-col  md:w-full gap-2 py-4">
              <div className="flex md:items-center justify-between w-5/6 md:w-full">
                <div className="flex flex-col md:flex-row flex-wrap md:items-center gap-2 mb-1 md:justify-between md:mb-3">
                  <h2 className="font-bold text-neutral900 text-sm md:text-xl">
                    {eventTitle}
                  </h2>
                  <div className="flex items-center justify-center py-1 pl-2 pr-4 text-white rounded-full bg-neutral800 w-20">
                    <RxDotFilled />
                    <span className="text-sm">Virtual</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 self-start">
                  <span>Qawi</span>
                  <img src="/adminImg.png" alt="" />
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="flex flex-col min-w-0 gap-1">
                  <p className="text-sm md:text-xl text-neutral600 w-3/4 md:w-full  line-clamp-1">
                    {eventTagline}
                  </p>
                  <div className="flex items-center gap-2 md:gap-4">
                    <p className="text-neutral600 text-sm md:text-md">Date:</p>
                    <p className="text-primary500 text-sm md:text-md">
                      Jan 16, 2024
                    </p>
                  </div>
                </div>
                <div className="flex items-center self-end justify-start md:justify-end  gap-3 mt-6 cursor-pointer w-full">
                  <img
                    src="/edit2.png"
                    alt=""
                    onClick={() => setShowEdit(!showEdit)}
                  />
                  <img src="/search.png" alt="" />
                  <img src="/delete2.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto flex justify-center w-[80%]">
        {showEdit && (
          <CreateEvent
            eventToEdit={{ eventTitle, id, eventTagline, eventType }}
          />
        )}
      </div>
    </div>
  );
};

export default EventItem;
