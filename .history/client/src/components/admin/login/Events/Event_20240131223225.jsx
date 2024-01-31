import { CiSearch } from 'react-icons/ci'
const Event = () => {
  return (
    <div className="flex items-center justify-center mx-auto">
      <div className="flex flex-col gap-6">
        <div className="flex justify-between bg-[#E2DEDC] px-4 py-2">
          <div className="flex gap-2">
            <CiSearch />
            <input type="text" />
          </div>
          <div>
            <span>Search</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Event
