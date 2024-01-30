import { FaBars } from 'react-icons/fa6'
import { FaPlusCircle } from 'react-icons/fa'
import { IoIosArrowForward } from 'react-icons/io'
import { Link } from 'react-router-dom'

const SideNavbar = () => {
  return (
    <div className="w-96 bg-[#14171F] font-Inter">
      <div className="flex flex-col ml-20 my-16 gap-4">
        <div className="flex items-center gap-16 mb-20">
          <FaBars className="text-3xl text-white" />
          <Link to="/">
            <img
              src="/Union (1).svg"
              alt="logo"
              className="md:w-16 w-auto h-[2.5rem] md:h-auto ml-1 md:ml-0"
            />
          </Link>
        </div>
        <div className="bg-primary500 w-60 p-4 text-white flex items-center justify-start gap-2 rounded-md text-xl cursor-pointer">
          <FaPlusCircle />
          <h2>New Blog</h2>
        </div>
        <div className="bg-primary500 w-60 p-4 text-white flex items-center justify-start gap-2 rounded-md text-xl cursor-pointer">
          <FaPlusCircle />
          <h2>New Event</h2>
        </div>
        <div className="flex flex-col mt-8 text-sm">
          <div className="flex items-center justify-between w-60 text-white p-4 gap-4 rounded-md cursor-pointer">
            <div className="flex items-center gap-4">
              <img src="/file.png" alt="" />
              <h1>All posts</h1>
            </div>
            <IoIosArrowForward />
          </div>
          <div className="flex items-center justify-between w-60 text-white p-4 gap-4 rounded-md cursor-pointer">
            <div className="flex items-center gap-4">
              <img src="/file.png" alt="" />
              <h1>Manage blog</h1>
            </div>
            <IoIosArrowForward />
          </div>
          <div className="flex items-center justify-between w-60 text-white p-4 gap-4 rounded-md cursor-pointer">
            <div className="flex items-center gap-4">
              <img src="/file.png" alt="" />
              <h1>Manage events</h1>
            </div>
            <IoIosArrowForward />
          </div>
        </div>
        <div className="text-[#FAFAF9] w-60 flex flex-wrap gap-6 gap-x-2 text-sm my-12">
          <span>Terms of service</span>
          <span>Privacy</span>
          <span>Content Policy</span>
        </div>
        <div className="bg-[#FAFAF9] text-primary500 w-60 p-4 flex items-center justify-center gap-2 rounded-md cursor-pointer">
          <img src="/logout.svg" alt="" />
          <p className="font-bold">Logout</p>
        </div>
      </div>
    </div>
  )
}

export default SideNavbar
