import { CiSearch } from 'react-icons/ci'
import { FaRegEdit } from 'react-icons/fa'
import { RxDotFilled } from 'react-icons/rx'
import { eventsCard } from '../../../utils/eventsCard'

const Event = () => {
  return (
    <div className="flex flex-col gap-6 items-center mx-auto my-12 font-Inter">
      <div className="flex justify-between items-center md:gap-20 md:gap-2">
        <div className="flex justify-between bg-[#E2DEDC] w-[42rem] rounded-md">
          <div className="flex gap-2 items-center px-6 py-3">
            <CiSearch className="text-xl" />
            <input
              type="text"
              className="outline-none border-none bg-[#E2DEDC] focus:outline-none focus:border-none block w-60"
              placeholder="Search or type here"
            />
          </div>
          <button className="bg-primary500 px-4 py-3 rounded-md">
            <span className="text-white text-lg font-semibold">Search</span>
          </button>
        </div>
        <div className="flex items-center gap-4">
          <FaRegEdit className="text-[#9CA1B6] text-3xl" />
          <img src="/admin.png" alt="" />
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <div className="flex gap-6 flex-col w-[52.94rem]">
          {eventsCard.map((card) => {
            return (
              <div
                key={card.id}
                className="py-4 px-2 md:px-6 border-2 rounded-md border-neutral400 flex gap-2 md:gap-8"
              >
                <div className="px-8 py-6 text-white flex items-center justify-center flex-col bg-primary500">
                  <span className="text-2xl md:text-5xl font-bold">
                    {card.day}
                  </span>
                  <span className="text-lg uppercase md:text-2xl">
                    {card.month}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex md:justify-between flex-wrap items-center gap-2 md:gap-4 mb-1 md:mb-3">
                    <h2 className="text-neutral900 text-md md:text-xl font-bold">
                      Why Techies Need Law
                    </h2>
                    <div className="text-white flex items-center justify-center pl-2 pr-4 py-1 rounded-full bg-neutral800">
                      <RxDotFilled />
                      <span className="text-sm">Virtual</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>Qawi</span>
                    <img src="/admin.png" alt="" />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Event
