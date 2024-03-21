import { useState } from "react";
import DateStart from "../DateStart"
import DateEnd from "../DateEnd";
import TimeStart from "../TimeStart";
import TimeEnd from "../TimeEnd";

const ManageEvent = () => {
  const [selectedLocation, setSelectedLocation] = useState(null)

  const handleLocationChange = (event) => {
    setSelectedLocation(event.target.value)
  }



  return (
    <div className="w-fit ">
      <div className="flex flex-col justify-start px-4 pt-4 pb-16 items-left md:pl-8 md:pt-20 md:pb-28">
        <h2 className="pb-8 text-4xl font-bold">Event Management</h2>
        <div className="flex flex-col justify-center">
          <div className="flex flex-col pt-4">
            <label className="pb-1 font-bold" htmlFor="event-title">Event Title</label>
            <input className="border-[1.5px] border-[#292422] placeholder:text-[#9F918B] pl-4 w-full h-10 outline-none rounded-md" placeholder="Event Title" type="text" name="event-title" id="event-title" />
          </div>
          <div className="flex flex-col pt-4">
            <label className="pb-1 font-bold" htmlFor="event-tagline">Event Tagline</label>
            <input className="border-[1.5px] border-[#292422] placeholder:text-[#9F918B] pl-4 w-full placeholder:text-start h-24 outline-none rounded-md" placeholder="Break in to Tech in 2024 seamlessly.............................." type="text" name="event-tagline" id="event-tagline" />
          </div>
          <div className="flex flex-col pt-4">
            <label className="pb-1 font-bold" htmlFor="event-location">Event Location</label>
            <div className="flex flex-row justify-center md:justify-start content-center border-[1.5px] border-[#292422] placeholder:text-[#9F918B] pl-4 py-4 w-full placeholder:text-start h-fit gap-6 outline-none rounded-md" name="event-location" id="event-location" >
              <label className={`px-3 flex flex-row items-center gap-1 pt-[0.125rem] pb-[0.125rem] text-white border h-fit rounded-2xl ${selectedLocation === "virtual" ? "bg-text-dev-orange" : "bg-[#D4CECB] text-[#9F918B]"} `}>
                <input
                  className={`w-2 h-2 bg-white rounded-full appearance-none  ${selectedLocation === "virtual" ? "bg-white" : "bg-[#9F918B]"}`}
                  type="radio"
                  value="virtual"
                  checked={selectedLocation === "virtual"}
                  onChange={handleLocationChange}
                />
                <span>Virtual</span>
              </label>
              <label className={`px-3 flex flex-row items-center gap-1 pt-[0.125rem] pb-[0.125rem] text-white border h-fit rounded-2xl ${selectedLocation === "onsite" ? "bg-text-dev-orange" : "bg-[#D4CECB] text-[#9F918B]"}`}>
                <input
                  className={`w-2 h-2 bg-white rounded-full appearance-none  ${selectedLocation === "onsite" ? "bg-white" : "bg-[#9F918B]"}`}
                  type="radio"
                  value="onsite"
                  checked={selectedLocation === "onsite"}
                  onChange={handleLocationChange}
                />
                <span>
                  Onsite
                </span>
              </label>
            </div>
            <div className="pb-8"></div>

            <DateStart />
            <DateEnd />

            <TimeStart />
            <TimeEnd />


            <div className="flex flex-col pt-4">
              <label className="pb-1 font-bold" htmlFor="event-title">Choose Event Banner</label>

              <label
                htmlFor="file-input"
                className=" h-fit border-[1.5px] bg-[#E2DEDC] border-[#292422] rounded-md flex flex-row items-center w-full "
              >
                <div className="bg-white placeholder:text-black w-full placeholder:font-semibold pl-4 h-12 outline-none rounded-md rounded-r-none border-r-[1px] border-black flex flex-col justify-center">
                  <span className="text-[#9F918B] font-bold"> Choose file </span>
                  {/* <button className="flex flex-row content-center justify-center w-full border-l border-black"></button> */}
                </div>
                <span className="px-2 font-bold w-fit">Browse</span>
                <input className="hidden" id="file-input" type="file" />
              </label>


              {/* <label htmlFor="" className="bg-white placeholder:text-black placeholder:font-semibold pl-4 h-12 outline-none rounded-md rounded-r-none min-w-[88%] " id="event-title">
                  Choose File
                </label> */}
              {/* <button className="flex flex-row content-center justify-center w-full border-l border-black"><input type="file" placeholder="Browse" className="m-auto font-bold text-black w-fit h-fit" /></button> */}
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default ManageEvent
