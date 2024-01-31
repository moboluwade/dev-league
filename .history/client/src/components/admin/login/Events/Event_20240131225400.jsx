import { CiSearch } from 'react-icons/ci'
import { FaRegEdit } from 'react-icons/fa'
const Event = () => {
  return (
    <div className="flex flex-col gap-6 items-center mx-auto my-12 font-Inter">
      <div className="flex justify-between">
        <div className="flex justify-between bg-[#E2DEDC] p-4 w-[42rem]">
          <div className="flex gap-2 items-center">
            <CiSearch />
            <input
              type="text"
              className="outline-none border-none bg-[#E2DEDC] focus:outline-none focus:border-none"
              placeholder="Search or type here"
            />
          </div>
          <button className="bg-primary500">
            <span className="text-white">Search</span>
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
