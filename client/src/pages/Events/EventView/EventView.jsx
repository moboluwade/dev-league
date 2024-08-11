import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Events = () => {
  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)
  const [eventType, setEventType] = useState(null)

  const { eventId } = useParams()

  const { data } = useQuery({
    queryKey: ['event-details'],
    queryFn: async () => {
      const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/events/${eventId}`)
      const event = await response.data
      const eventRes = await event.Event
      return eventRes
    }
  })

  useEffect(() => {
    data && setStartDate(new Date(data.startDate))
    data && setEndDate(new Date(data.endDate))
    data && setEventType(data.eventType)
  }, [data])

  const calculateEventPassed = () => {
    let eventState
    startDate && new Date < startDate && (eventState = 'UPCOMING')
    startDate && new Date > startDate && new Date < endDate && (eventState = 'ONGOING')
    startDate && new Date > startDate && (eventState = 'PASSED')
    console.log(new Date, "current date")
    endDate && console.log(endDate, "future date")
    return eventState
  }
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const monthsOfTheYear = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];

  const calculateDate = () => {
    const dayIndex = startDate ? startDate.getDay() : null;
    let text = daysOfWeek[dayIndex]
    const time = startDate ? startDate.getDate() : null;
    const month = startDate ? monthsOfTheYear[startDate.getMonth()] : null;
    const year = startDate ? startDate.getFullYear() : null;
    console.log(dayIndex)
    // const month = monthsOfTheYear[startDate.getMonth()]

    return text + " " + time + " " + month + " " + year
  }

  const calculateTime = () => {
    let finalhour, hour, minute, meridian
    if (startDate) {
      hour = startDate.getHours().toString().padStart(2, '0');
      minute = startDate.getMinutes().toString().padStart(2, '0'); // Pad minute with leading zero
      hour < 12 && (meridian = 'AM')
      hour > 11 && hour < 24 && (meridian = 'PM')
      hour === 24 && (meridian = 'AM')
      finalhour = (hour % 12 || 12).toString(); // Convert to 12-hour format and pad with leading zero if needed
    }
    return finalhour + ':' + minute + ' ' + meridian
  }

  return (
    <div className='min-h-[30rem]'>
      {
        data && (
          <div>
            <div
              className="px-4 lg:px-16 max-w-screen-2xl mx-auto py-28 bg-no-repeat bg-center bg-[#FFF6F3]"
              style={{ backgroundImage: "url('/events_bg.png')" }}
            >
              <div className="flex flex-col items-center justify-center gap-4 md:gap-6">
                <div className="px-2 py-1 bg-white border rounded-md border-1 border-gray600">
                  <span className="text-sm uppercase text-neutral600">{eventType ? eventType : "VIRTUAL"}</span>
                </div>
                <h1 className="text-2xl font-bold md:text-4xl text-neutral900">
                  {data && data.title}
                </h1>
                {startDate &&
                  <div className="flex items-center justify-center gap-4 px-2 py-1 bg-white border rounded-md border-1 border-gray600">
                    <span className="text-sm text-neutral600">{calculateEventPassed()}</span>
                    <span className="text-sm text-neutral600">{calculateDate()}</span>
                    <span className="text-sm text-neutral600">{calculateTime()}</span>
                  </div>
                }
              </div>
            </div>
            <div className="flex flex-col flex-wrap items-center justify-center gap-4 mx-auto mt-6 md:mt-24 max-w-screen-2xl">
              <h1 className="mb-4 text-4xl font-semibold text-primary500">
                Overview
              </h1>
              <div className="px-4 lg:w-2/5 md:px-6">
                <p className="mb-8 text-center text-md text-neutral600 md:text-start">
                  {data && data.description}
                </p>
              </div>

              <div className="flex flex-col items-center justify-center gap-4 mt-4 md:gap-8 md:mt-12">
                {/* <h2 className="mb-2 text-3xl font-bold md:mb-4">Session Details</h2> */}
                <div className="flex flex-col items-center justify-center gap-4 px-2 py-4 mx-4 mb-10 border-2 md:px-6 md:mx-auto md:py-8 bg-lightPink rounded-3xl border-primary500">
                  <div className="flex flex-wrap items-center justify-center gap-8">
                    {/* UI for later, when admins and speakers are configured */}

                    {/* <div className="flex flex-col gap-8 md:flex-row">
                <div>
                  <img src="/person1.png" alt="" />
                  <div className="flex flex-col items-center gap-1 py-1 text-center">
                    <h4 className="text-sm/[17px] font-bold">Eleanor Pena</h4>
                    <p className="text-sm/[17px]">Sony</p>
                    <p className="text-sm/[17px]">Marketing Coordinator</p>
                  </div>
                </div>
                <div>
                  <img src="/person2.png" alt="" />
                  <div className="flex flex-col items-center gap-1 pt-1 text-center">
                    <h4 className="text-sm/[17px] font-bold">Guy Hawkins</h4>
                    <p className="text-sm/[17px]">The Walt Disney Company</p>
                    <p className="text-sm/[17px]">Web Designer</p>
                  </div>
                </div>
              </div> */}
                    <div className="flex flex-col justify-center gap-4 md:ml-16 md:mr-12">
                      <h2 className="text-2xl font-bold text-center text-neutral900 md:text-center">
                        Meeting Details
                      </h2>
                      <div className="flex flex-col items-center justify-center gap-2 md:grid-cols-2 md:grid h-fit">
                        {data &&
                          <div className='flex flex-col items-center justify-end w-64 h-full pt-2 overflow-hidden max-h-64'>
                            <img className='w-64 rounded-lg' src={data.imageUrl} alt="" width={200} height={200} />
                          </div>
                        }
                        <div className="flex flex-col items-center md:items-start">
                          <span className="pt-2 text-lg font-bold text-center text-neutral900 md:text-center">Have you registered on Luma?</span>
                          <a
                            href="https:twitter.com/devleague23"
                            className="text-sm font-semibold underline underline-offset-2 hover:underline-offset-1 hover:text-text-dev-orange text-grey700"
                          >
                            https:twitter.com/devleague23
                          </a>
                          <span className="pt-2 text-lg font-bold text-center text-neutral900 md:text-center">Dev League on Twitter</span>
                          <a
                            href="https:twitter.com/devleague23"
                            className="text-sm font-semibold underline underline-offset-2 hover:underline-offset-1 hover:text-text-dev-orange text-grey700"
                          >
                            https:twitter.com/devleague23
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


        )
      }
    </div>
  )
}

export default Events
