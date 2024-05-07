import { useRef, useState } from "react"
import { MarkCalendar } from "./svg"
import { useEffect } from "react"

const DateEnd = () => {
  //manages individual inputs for date, month and year input tags
  const [endDate, setEndDate] = useState('')
  const [endDateMonth, setEndDateMonth] = useState('')
  const [endDateYear, setEndDateYear] = useState('')

  // manages state for the Calendar widget 
  const [selectDate, setSelectDate] = useState('')
  const [year, month, day] = selectDate.split("-")

  // allows the real calendar input widget (which is hidden) to be targeted.
  const calEndRef = useRef(null)
  const handleCalendarStartClick = () => {
    // calls the calendar widget.
    calEndRef.current.showPicker()
  }

  // handles individual input state change for date, montha and year input tags.
  const handleDateChange = (value) => {
    value > 31 ? setEndDate(31) : setEndDate(value)
    value < 0 ? setEndDate(0) : setEndDate(value)
  }
  const handleDateMonthChange = (value) => {
    value > 31 ? setEndDateMonth(31) : value < 0 ? setEndDateMonth(0) : setEndDateMonth(value)
  }
  const handleDateYearChange = (value) => {
    value > 31 ? setEndDateYear(31) : value < 0 ? setEndDateYear(0) : setEndDateYear(value)
  }

  // updates date, month and year state based on calendar widget
  useEffect(() => {
    setEndDate(day)
  }, [selectDate, day])

  useEffect(() => {
    setEndDateMonth(month)
  }, [selectDate, month])

  useEffect(() => {
    setEndDateYear(year.slice(-2))
  }, [selectDate, year])


  return (
    <div className="flex flex-col pt-4">
      <label className="pb-1 font-bold" htmlFor="event-title">Event End Date</label>
      <div className=" h-fit border-[1.5px] bg-[#E2DEDC] border-[#292422] rounded-md flex flex-row w-full max-w-[36rem]">
        <div className="bg-[#E2DEDC] placeholder:text-black placeholder:font-semibold pl-4 h-12 outline-none rounded-md w-[88%] flex flex-row items-center font-semibold">
          <input
            disabled
            max={31}
            maxLength={2}
            type="number"
            placeholder="18"
            onChange={(e) => { handleDateChange(e.target.value) }}
            value={endDate}
            className="p-0 m-0 border-none outline-none w-fit max-w-[1.3rem] h-fit bg-inherit placeholder:text-black"
          />
          <span>/</span>
          <input
            disabled
            max={12}
            maxLength={2}
            type="number"
            placeholder="20"
            onChange={(e) => { handleDateMonthChange(e.target.value) }}
            value={endDateMonth}
            className=" w-fit max-w-[1.3rem] p-0 m-0 border-none outline-none w- h-fit bg-inherit placeholder:text-black"
          />
          <span>/</span>
          <input
            disabled
            max={99}
            maxLength={2}
            type="number"
            placeholder="24"
            onChange={(e) => { handleDateYearChange(e.target.value) }}
            value={endDateYear}
            className=" w-fit max-w-[1.3rem] p-0 m-0 border-none outline-none h-fit bg-inherit placeholder:text-black"
          />
        </div>
        <label onClick={handleCalendarStartClick} className="flex flex-col items-center justify-center w-6 px-6 border-l border-black" htmlFor="calendar"><MarkCalendar /></label>
        <input
          ref={calEndRef}
          onChange={(e) => setSelectDate(e.target.value)}
          value={selectDate}
          className="invisible w-0 h-0"
          type="date" name="" id="calendar" />
      </div>
    </div>
  )
}

export default DateEnd