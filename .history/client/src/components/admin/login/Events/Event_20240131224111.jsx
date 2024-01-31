import { CiSearch } from 'react-icons/ci'
import { FaRegEdit } from 'react-icons/fa'
const Event = () => {
  return (
    <div className="flex flex-col gap-6 items-center justify-center mx-auto">
      <div className="flex justify-between">
        <div className="flex justify-between bg-[#E2DEDC] px-4 py-2">
          <div className="flex gap-2">
            <CiSearch />
            <input type="text" className="outline-none border-none" />
          </div>
          <div>
            <span>Search</span>
          </div>
        </div>
        <div>
          <FaRegEdit />
        </div>
      </div>
    </div>
  )
}

export default Event
