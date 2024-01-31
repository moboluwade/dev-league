import { CiSearch } from 'react-icons/ci'
import { FaRegEdit } from 'react-icons/fa'
const Event = () => {
  return (
    <div className="flex flex-col gap-6 items-center mx-auto my-12">
      <div className="flex justify-between items-center">
        <div className="flex justify-between bg-[#E2DEDC] px-4 py-2">
          <div className="flex gap-2">
            <CiSearch />
            <input type="text" className="outline-none border-none" />
          </div>
          <button>
            <span>Search</span>
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
