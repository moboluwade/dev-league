import { useEffect, useState } from "react";
import DateStart from "../DateStart"
import DateEnd from "../DateEnd";
import TimeStart from "../TimeStart";
import TimeEnd from "../TimeEnd";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

import { generateUploadButton } from "@uploadthing/react";

export const UploadButton = generateUploadButton();

const CreateEvent = () => {
  // state management
  const [selectedLocation, setSelectedLocation] = useState(null)
  const [finalStartDate, setFinalStartDate] = useState('')
  const [finalEndDate, setFinalEndDate] = useState('')
  const [eventTitle, setEventTitle] = useState('')
  const [eventTagline, setEventTagline] = useState('')
  const [bannerImage, setBannerImage] = useState()

  const [bannerImageName, setBannerImageName] = useState(null)

  const [startDate, setStartDate] = useState('')
  const [startDateMonth, setStartDateMonth] = useState('')
  const [startDateYear, setStartDateYear] = useState('')

  const [endDate, setEndDate] = useState('')
  const [endDateMonth, setEndDateMonth] = useState('')
  const [endDateYear, setEndDateYear] = useState('')

  // states for managing endHour
  const [endHour, setEndHour] = useState('')
  const [endMinute, setEndMinute] = useState('')
  // states for managing startHour
  const [startHour, setStartHour] = useState('')
  const [startMinute, setStartMinute] = useState('')



  useEffect(() => {
    const date = new Date(startDateYear, startDateMonth, startDate, startHour, startMinute)
    setFinalStartDate(date)
  }, [startDateYear, startDateMonth, startDate, startHour, startMinute])

  useEffect(() => {
    const date = new Date(endDateYear, endDateMonth, endDate, endHour, endMinute)
    setFinalEndDate(date)
  }, [endDateYear, endDateMonth, endDate, endHour, endMinute])

  const handleLocationChange = (event) => {
    setSelectedLocation(event.target.value)
  }


  const createEvent = useMutation({
    mutationKey: 'create-event',
    mutationFn: async (newEvent) => {

      const res = axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/events`, newEvent, {
        withCredentials: 'include'
      })
      return res
    }
  })


  const handleFormSubmit = (e) => {
    e.preventDefault()
    createEvent.mutate({
      startDate: finalStartDate,
      endDate: finalEndDate,
      title: eventTitle,
      description: eventTagline,
      eventType: selectedLocation,
      eventBanner: bannerImage,
      eventBannerName: bannerImageName
    })
  }

  const handleChange = (e) => {
    setBannerImageName(e.target.files[0].name)
    const reader = new FileReader()
    reader.readAsDataURL(e.target.files[0])
    reader.onload = () => {
      setBannerImage(reader.result)
    }
  }


  return (
    <div className="w-full ">
      <form
        onSubmit={handleFormSubmit}
        className="flex flex-col justify-start px-4 pt-4 pb-16 items-left md:pl-8 md:pt-20 md:pb-28">
        <h2 className="pb-8 text-4xl font-bold">Event Management</h2>
        <div className="flex flex-col justify-center">
          <div className="flex flex-col pt-4">
            <label className="pb-1 font-bold" htmlFor="event-title">Event Title</label>
            <input
              onChange={(e) => { setEventTitle(e.target.value) }}
              value={eventTitle}
              required
              className="border-[1.5px] border-[#292422] placeholder:text-[#9F918B] pl-4 w-full max-w-[36rem] h-10 outline-none rounded-md" placeholder="Event Title" type="text" name="event-title" id="event-title" />
          </div>
          <div className="flex flex-col pt-4">
            <label className="pb-1 font-bold" htmlFor="event-tagline">Event Tagline</label>
            <input
              onChange={(e) => { setEventTagline(e.target.value) }}
              value={eventTagline}
              required
              className="border-[1.5px] border-[#292422] placeholder:text-[#9F918B] pl-4 w-full max-w-[36rem] placeholder:text-start h-24 outline-none rounded-md" placeholder="Break in to Tech in 2024 seamlessly.............................." type="text" name="event-tagline" id="event-tagline" />
          </div>
          <div className="flex flex-col pt-4">
            <label className="pb-1 font-bold" htmlFor="event-location">Event Location</label>
            <div className="flex flex-row justify-center md:justify-start content-center border-[1.5px] border-[#292422] placeholder:text-[#9F918B] pl-4 py-4 w-full max-w-[36rem] placeholder:text-start h-fit gap-6 outline-none rounded-md" name="event-location" id="event-location" >
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

            <DateStart setStartDate={setStartDate} startDate={startDate} setStartDateMonth={setStartDateMonth} startDateMonth={startDateMonth} setStartDateYear={setStartDateYear} startDateYear={startDateYear} />
            <DateEnd setEndDate={setEndDate} endDate={endDate} setEndDateMonth={setEndDateMonth} endDateMonth={endDateMonth} setEndDateYear={setEndDateYear} endDateYear={endDateYear} />

            <TimeStart setStartHour={setStartHour} setStartMinute={setStartMinute} />
            <TimeEnd setEndHour={setEndHour} setEndMinute={setEndMinute} />


            {/* add event image */}
            <div className="flex flex-col pt-4">
              <label className="pb-1 font-bold" htmlFor="event-title">Choose Event Banner</label>
              <label
                htmlFor="file-input"
                className=" h-fit border-[1.5px] bg-[#E2DEDC] border-[#292422] rounded-md flex flex-row items-center w-full max-w-[36rem]"
              >
                <div className="bg-white placeholder:text-black w-full placeholder:font-semibold pl-4 h-12 outline-none rounded-md rounded-r-none border-r-[1px] border-black flex flex-col justify-center">
                  <span className="text-[#9F918B] font-bold">{bannerImageName ? bannerImageName : "Choose file"}</span>
                  {/* <button className="flex flex-row content-center justify-center w-full border-l border-black"></button> */}
                </div>
                <span className="px-2 font-bold w-fit">Browse</span>
                <input
                  name="file-input"
                  onChange={(e) => { handleChange(e) }}
                  accept="image/*"
                  className="hidden" id="file-input" type="file" />
              </label>
            </div>
          </div>
        </div>

        <div className="flex flex-row justify-end w-full pt-4 max-w-[36rem]">
          <button
            type="submit"
            className="px-3 py-2 text-xl font-semibold tracking-wide text-white rounded-lg bg-text-dev-orange" >
            {createEvent.isPending ? "Pending" : createEvent.isSuccess ? "Saved" : createEvent.isError ? "Failed": "Submit"}
          </button>
        </div>
      </form>
    </div >
  )
}

export default CreateEvent
