import { CiSearch } from 'react-icons/ci'
import { FaRegEdit } from 'react-icons/fa'
import { RxDotFilled } from 'react-icons/rx'
import { eventsCard } from '../../../utils/eventsCard'

const AllPost = () => {
  return (
    <div className="flex flex-col items-center gap-2 md:gap-6 mx-auto my-12 font-Inter">
      <div className="flex justify-center md:justify-between items-center gap-2 md:gap-20 w-full md:w-[52.95rem] mb-8">
        <div className="flex justify-between bg-[#E2DEDC] w-[14rem] md:w-[32rem] lg:w-[42rem] rounded-md">
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
      <div className="flex flex-col gap-6 px-4 justify-center items-center w-[22.5rem] lg:w-full">
        <div className="flex gap-6 flex-col w-full md:w-[52.95rem]">
          {eventsCard.map((card) => {
            return (
              <div
                key={card.id}
                className="flex gap-2 px-2 py-4 border-2 rounded-md md:px-4 border-neutral400 md:gap-4 w-full"
              >
                <div className="flex flex-col items-center justify-center px-8 py-6 text-white bg-primary500">
                  <span className="text-2xl font-bold md:text-5xl">
                    {card.day}
                  </span>
                  <span className="text-lg uppercase md:text-2xl">
                    {card.month}
                  </span>
                </div>
                <div className="flex flex-col w-80 md:w-full gap-2 py-4">
                  <div className="flex md:items-center justify-between w-5/6 md:w-full">
                    <div className="flex flex-col md:flex-row flex-wrap md:items-center gap-2 mb-1 md:justify-between md:mb-3">
                      <h2 className="font-bold text-neutral900 text-sm md:text-xl">
                        Why Techies Need Law
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
                    <div className="flex flex-col gap-1">
                      <span className="text-sm md:text-xl text-neutral600 w-3/4 md:w-full">
                        How do you create compelling presentations......
                      </span>
                      <div className="flex items-center gap-2 md:gap-4">
                        <p className="text-neutral600 text-sm md:text-md">
                          {card.type}
                        </p>
                        <p className="text-primary500 text-sm md:text-md">
                          {card.date}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center self-end justify-start md:justify-end  gap-3 mt-6 cursor-pointer w-full">
                      <img src="/edit2.png" alt="" />
                      <img src="/search.png" alt="" />
                      <img src="/delete2.png" alt="" />
                    </div>
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

export default AllPost
