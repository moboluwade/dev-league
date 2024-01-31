import { CiSearch } from 'react-icons/ci'
const Event = () => {
  return (
    <div className="flex items-center justify-center mx-auto">
      <div className="flex flex-col gap-6">
        <div>
          <CiSearch />
          <input type="text" />
          <div>
            <span>Search</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Event
