import { CiSearch } from 'react-icons/ci'
const Event = () => {
  return (
    <div className="flex justify-center mx-auto">
      <div>
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
