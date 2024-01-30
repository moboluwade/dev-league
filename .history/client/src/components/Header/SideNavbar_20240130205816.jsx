import { FaBars } from 'react-icons/fa6'
import { FaPlusCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const SideNavbar = () => {
  return (
    <div className="w-80 bg-[#14171F] h-[100vh]">
      <div className="flex flex-col items-center justify-center mx-auto my-24">
        <div className="flex justy-center items-center gap-16 mb-28">
          <FaBars className="text-3xl text-white" />
          <Link to="/">
            <img
              src="/Union (1).svg"
              alt="logo"
              className="md:w-16 w-auto h-[2.5rem] md:h-auto ml-1 md:ml-0"
            />
          </Link>
        </div>
        <div className="bg-primary500 w-48 p-4 text-white flex items-center justify-start gap-2 rounded-md text-xl">
          <FaPlusCircle />
          <h2>New Blog</h2>
        </div>
      </div>
    </div>
  )
}

export default SideNavbar
