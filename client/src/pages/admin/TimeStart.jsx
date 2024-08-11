import { useRef, useState, useEffect } from 'react'
import { MarkTimer } from './svg'

const TimeStart = ({ setStartMinute, setStartHour}) => {
    //manages individual inputs for hour and minute input tags
    const [meridian, setMeridaian] = useState('PM')
    const [showStartHour, setShowStartHour] = useState(0)


    // manages state for the Clock widget 
    const [selectTime, setSelectTime] = useState('00:00')
    const [hour, minute] = selectTime.split(":")

    // allows the real timer input widget (which is hidden) to be targeted.
    const timerStartRef = useRef(null)
    const handleTimeStartClick = () => {
        // calls the calstartar widget.
        timerStartRef.current.showPicker()
    }


    // updates date, month and year state based on calstartar widget

    useEffect(() => {
        const handleHourConversion = (value) => {
            value < 13 && setShowStartHour(value)
            const x = value - 12
            const edit = String(x).padStart(2, '0');

            value > 12 && setShowStartHour(edit)
        }

        //pm and hour does not correlate
        !isNaN(hour) && handleHourConversion(hour)
        // if hour is between 0 and 11 inclusive set to 'AM'
        hour < 12 && setMeridaian('AM')
        // if hour is between 12 and 23 inclusive set to 'PM'
        hour > 11 && hour < 24 && setMeridaian('PM')
    }, [hour, meridian, setStartHour])

    useEffect(() => {
        setStartMinute(minute)      
    }, [minute, setStartMinute])
    
    useEffect(() => {
        setStartHour(hour)
    }, [setStartHour, hour])

    return (
        <div className="flex flex-col pt-4">
            <label className="pb-1 font-bold" htmlFor="event-title">Event Start Time</label>
            <div className=" h-fit border-[1.5px] bg-[#E2DEDC] border-[#292422] rounded-md flex flex-row w-full max-w-[36rem]">
                <div className="bg-[#E2DEDC] placeholder:text-black placeholder:font-semibold pl-4 h-12 outline-none rounded-md w-[88%] flex flex-row items-center font-semibold">
                    <input
                        disabled
                        maxLength={2}
                        max={23}
                        value={showStartHour}
                        type="text"
                        placeholder="18"
                        className="p-0 m-0 border-none outline-none w-fit max-w-[1.3rem] h-fit bg-inherit placeholder:text-black"
                    />
                    <span>:</span>
                    <input
                        disabled
                        maxLength={2}
                        max={59}
                        value={minute}
                        type="text"
                        placeholder="20"
                        className=" w-fit max-w-[1.3rem] p-0 m-0 border-none outline-none w- h-fit bg-inherit placeholder:text-black"
                    />
                    <input
                        disabled
                        className=" pl-1 w-fit max-w-[1.9rem] p-0 m-0 border-none outline-none w- h-fit bg-inherit placeholder:text-black"
                        maxLength={2}
                        type="text"
                        value={meridian}
                        placeholder="AM" />
                </div>
                <button
                type='button'
                    onClick={handleTimeStartClick}
                    className="flex flex-col items-center justify-center w-6 px-6 border-l border-black"><MarkTimer /></button>
                <input
                    ref={timerStartRef}
                    onChange={(e) => { setSelectTime(e.target.value)}}
                    value={selectTime}
                    className="w-0 h-0 "
                    type="time" name="" id="clock" />
            </div>
        </div>
    )
}

export default TimeStart