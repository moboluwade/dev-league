import { useEffect, useRef, useState } from "react"
import { MarkTimer } from "./svg"

const TimeEnd = () => {
    //manages individual inputs for hour and minute input tags
    const [endHour, setEndHour] = useState('')
    const [endMinute, setEndMinute] = useState('')

    // manages state for the Clock widget 
    const [selectTime, setSelectTime] = useState('')
    const [hour, minute] = selectTime.split(":")

    // allows the real timer input widget (which is hidden) to be targeted.
    const timerStartRef = useRef(null)
    const handleTimeStartClick = () => {
        // calls the calendar widget.
        timerStartRef.current.showPicker()
    }

    // handles individual input state change for hour and minute input tags.
    const handleHourChange = (value) => {
        value > 23 ? setEndHour(0) : setEndHour(value)
        value < 0 ? setEndHour(0) : setEndHour(value)
    }
    const handleMinuteChange = (value) => {
        value > 59 ? setEndMinute(0) : value < 0 ? setEndMinute(0) : setEndMinute(value)
    }

    // updates date, month and year state based on calendar widget
    useEffect(() => {
        setEndHour(hour)
    }, [hour])

    useEffect(() => {
        setEndMinute(minute)
    }, [minute])

    return (
        <div className="flex flex-col pt-4">
            <label className="pb-1 font-bold" htmlFor="event-title">Event End Time</label>
            <div className=" h-fit border-[1.5px] bg-[#E2DEDC] border-[#292422] rounded-md flex flex-row w-full max-w-[36rem]">
                {/* <input className="bg-[#E2DEDC] placeholder:text-black placeholder:font-semibold pl-4 h-12 outline-none rounded-md w-[88%] " placeholder="01:00 PM" type="text" name="event-title" id="event-title" /> */}
                <div className="bg-[#E2DEDC] placeholder:text-black placeholder:font-semibold pl-4 h-12 outline-none rounded-md w-[88%] flex flex-row items-center font-semibold">
                    <input
                        maxLength={2}
                        max={23}
                        onChange={handleHourChange}
                        value={endHour}
                        type="text"
                        placeholder="18"
                        className="p-0 m-0 border-none outline-none w-fit max-w-[1.3rem] h-fit bg-inherit placeholder:text-black"
                    />
                    <span>:</span>
                    <input
                        maxLength={2}
                        max={59}
                        onChange={handleMinuteChange}
                        value={endMinute}
                        type="text"
                        placeholder="20"
                        className=" w-fit max-w-[1.3rem] p-0 m-0 border-none outline-none w- h-fit bg-inherit placeholder:text-black"
                    />
                    <input
                        className=" pl-1 w-fit max-w-[1.9rem] p-0 m-0 border-none outline-none w- h-fit bg-inherit placeholder:text-black"
                        maxLength={2}
                        type="text"
                        placeholder="AM" />
                </div>
                <button
                    onClick={handleTimeStartClick}
                    className="flex flex-col items-center justify-center w-6 px-6 border-l border-black"><MarkTimer /></button>
                <input
                    ref={timerStartRef}
                    onChange={(e) => { setSelectTime(e.target.value) }}
                    value={selectTime}
                    className="w-0 h-0 "
                    type="time" name="" id="clock" />
            </div>
        </div >
    )
}

export default TimeEnd