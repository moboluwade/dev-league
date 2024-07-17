import { CiSearch } from "react-icons/ci";
import { FaRegEdit } from "react-icons/fa";
import { demoEvents } from "../../../utils/demoEvents";
import EventItem from "./EventItem";

const AllEvent = () => {
  return (
    <div className="flex flex-col  items-center p-4 gap-2 md:gap-6 mx-auto lg:p-12 font-Inter">
      <div className="flex justify-center md:justify-between items-center gap-2 md:gap-20 w-full  mb-8">
        <div className="flex justify-between bg-[#E2DEDC]   lg:w-[42rem] rounded-md">
          <div className="flex items-center gap-2 px-6 py-3">
            <CiSearch className="text-sm md:text-xl" />
            <input
              type="text"
              className="outline-none border-none bg-[#E2DEDC] focus:outline-none focus:border-none block w-full md:w-40"
              placeholder="Search or type here"
            />
          </div>
          <button className="px-4 py-1 md:py-3 rounded-md bg-primary500">
            <span className="text-sm md:text-lg font-semibold text-white">
              Search
            </span>
          </button>
        </div>
        <div className="flex items-center gap-4">
          <FaRegEdit className="text-[#9CA1B6] text-lg md:text-3xl" />
          <img src="/admin.png" alt="" className="max-w-sm" />
        </div>
      </div>

      <div className="flex gap-6 flex-col w-full ">
        {demoEvents.map((demoEvent) => (
          <EventItem key={demoEvent.id} eventItem={demoEvent} />
        ))}
      </div>
    </div>
  );
};

export default AllEvent;
