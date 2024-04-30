import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const Events = () => {
  const id = useParams()

  const { data } = useQuery({
    queryKey: ['event-details'],
    queryFn: async () => {
      const response = axios.get(`/https://dev-league-backend.onrender.com/api/events/${id.event}`)
      const event = response.json()
      return event
    }
  })

  return (
    <div>
      <div
        className="px-4 lg:px-16 max-w-screen-2xl mx-auto py-28 bg-no-repeat bg-center bg-[#FFF6F3]"
        style={{ backgroundImage: "url('/events_bg.png')" }}
      >
        <div className="flex flex-col items-center justify-center gap-4 md:gap-6">
          <div className="px-2 py-1 bg-white border rounded-md border-1 border-gray600">
            <span className="text-sm text-neutral600">{data ? data.eventType : 'Virtual'}</span>
          </div>
          <h1 className="text-2xl font-bold md:text-4xl text-neutral900">
            {data ? data.title : 'Why Techies Need Law'}
          </h1>
          <div className="flex items-center justify-center gap-4 px-2 py-1 bg-white border rounded-md border-1 border-gray600">
            <span className="text-sm text-neutral600">{data && data.eventStatus === open ? 'UP COMING' : 'PASSED'}</span>
            <span className="text-sm text-neutral600">{data ? data.date : '01 June 2024'}</span>
            <span className="text-sm text-neutral600">8:30pm</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col flex-wrap items-center justify-center gap-4 mx-auto mt-6 md:mt-24 max-w-screen-2xl">
        <h1 className="mb-4 text-4xl font-semibold text-primary500">
          Overview
        </h1>
        <div className="px-4 lg:w-2/5 md:px-6">
          <p className="mb-8 text-center text-md text-neutral600 md:text-start">
            {data ?
              data.description
              :
              "In the dynamic world of technology, the synergy between techies and the law is indispensable. As architects of the digital frontier, techies constantly innovate, but the complexities of this realm necessitate legal frameworks. Intellectual property laws protect creative minds, fostering an environment where innovation can flourish securely. Data privacy laws act as guardians, ensuring responsible handling of personal information. Far from stifling creativity, these legal frameworks empower techies, offering a roadmap that guides responsible innovation and ethical conduct. The integration of law in technology is not a constraint; it is a foundation for a harmonious and thriving digital future."
            }

          </p>
        </div>

        <div className="flex flex-col items-center justify-center gap-4 mt-4 md:gap-8 md:mt-12">
          {/* <h2 className="mb-2 text-3xl font-bold md:mb-4">Session Details</h2> */}
          <div className="flex flex-col items-center justify-center gap-4 px-2 py-4 mx-4 mb-10 border-2 md:px-6 md:mx-auto md:py-8 bg-lightPink rounded-3xl border-primary500">
            <div className="flex flex-wrap items-center justify-center gap-8">
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
              <div className="flex flex-col gap-4 md:ml-16 md:mr-12">
                <h2 className="text-2xl font-bold text-center text-neutral900 md:text-start">
                  Meeting Details
                </h2>
                <div className="flex gap-2">
                  <img src="/lmp.png" alt="" />
                  <a
                    href="https:twitter.com/devleague23"
                    className="text-sm font-semibold no-underline text-grey700"
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
  )
}

export default Events
