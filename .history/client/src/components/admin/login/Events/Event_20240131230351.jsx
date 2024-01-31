import { CiSearch } from 'react-icons/ci'
import { FaRegEdit } from 'react-icons/fa'
const Event = () => {
  return (
    <div className="flex flex-col gap-6 items-center mx-auto my-12 font-Inter">
      <div className="flex justify-between md:gap-20 md:gap-2">
        <div className="flex justify-between bg-[#E2DEDC] w-[42rem] rounded-md">
          <div className="flex gap-2 items-center px-4 py-3 text-xl">
            <CiSearch />
            <input
              type="text"
              className="outline-none border-none bg-[#E2DEDC] focus:outline-none focus:border-none block w-60"
              placeholder="Search or type here"
            />
          </div>
          <button className="bg-primary500 px-4 py-3 text-xl rounded-md">
            <span className="text-white font-semibold">Search</span>
          </button>
        </div>
        <div className="flex items-center gap-4">
          <FaRegEdit />
          <img src="/admin.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Event
