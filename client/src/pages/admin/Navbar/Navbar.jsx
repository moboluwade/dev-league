import { Link } from 'react-router-dom'
import { LogoutUser } from '../../../store/userSlice'
import { useDispatch } from 'react-redux'

const Navbar = ({ setNavActive, navActive }) => {
  const dispatch = useDispatch()

  const handleLogout = async () => {
    await dispatch(LogoutUser(true))
  }

  //this logic is already handled by the general check for isLoggedIn in admin
  // useEffect(() => {
  //     // !isLoggedIn && navigate("/")
  // }, [isLoggedIn, navigate])

  return (
    <div
      className={`max-w-[16rem] pt-6 bg-black md:sticky ${navActive ? 'absolute ' : 'absolute -left-96'
        }  top-0 h-full`}
    >
      <div className="flex flex-row items-center justify-start w-full gap-12 px-10 mb-8 text-white">
        <button onClick={() => setNavActive(!navActive)}>
          <img width={40} height={40} src="/admin/menu.svg" alt="menu" />
        </button>
        <img width={50} height={40} src="/Union.svg" alt="logo" />
      </div>

      <div className="flex flex-col items-center w-full gap-4 mb-8 text-white">
        {/* main buttons */}
        <Link to="create/blog">
          <button className="text-lg gap-2 flex flex-row justify-start pl-4 items-center text-white rounded-md w-[12rem] h-[3rem] bg-text-dev-orange">
            <img width={20} height={10} src="/admin/add.svg" alt="add button" />
            <div className="font-semibold">New Blog</div>
          </button>
        </Link>
        <Link to="create/event">
          <button className="text-lg gap-2 flex flex-row justify-start pl-4 items-center text-white rounded-md w-[12rem] h-[3rem] bg-text-dev-orange">
            <img width={20} height={10} src="/admin/add.svg" alt="add button" />
            <p className="font-semibold">New Event</p>
          </button>
        </Link>
      </div>

      <div className="flex flex-col items-center w-full gap-4 mb-6 font-semibold text-white">
        <Link to="allpost">
          <button className="text-md flex justify-between flex-row px-4 items-center text-white rounded-md w-[13rem] h-[3rem] ">
            <div className="flex flex-row items-center gap-2">
              <img width={15} height={10} src="/admin/article.svg" alt="" />
              <p className="font-semibold">All posts</p>
            </div>
            <img width={20} height={10} src="/admin/chevron-up.svg" alt="" />
          </button>
        </Link>
        <button className="text-md flex justify-between flex-row px-4 items-center text-white rounded-md w-[13rem] h-[3rem] ">
          <div className="flex flex-row items-center gap-2">
            <img width={15} height={10} src="/admin/article.svg" alt="" />
            <p className="font-semibold">Manage blog</p>
          </div>
          <img width={20} height={10} src="/admin/chevron-up.svg" alt="" />
        </button>
        <button className="text-md justify-between flex flex-row px-4 items-center text-white rounded-md w-[13rem] h-[3rem] ">
          <div className="flex flex-row items-center gap-2">
            <img width={15} height={10} src="/admin/article.svg" alt="" />
            <p className="font-semibold">Manage events</p>
          </div>

          <img width={20} height={10} src="/admin/chevron-up.svg" alt="" />
        </button>
      </div>

      <div className="flex flex-row flex-wrap items-center w-full gap-4 mb-8 text-xs text-gray-400 font-sm px-14">
        <p>Terms of Service</p>
        <p>Privacy</p>
        <p>Current Policy</p>
      </div>

      <button
        onClick={handleLogout}
        className="mx-auto text-lg flex flex-row justify-center px-4 gap-2 items-center text-text-dev-orange rounded-md w-[12rem] h-[3rem] bg-white"
      >
        <img width={25} height={10} src="/admin/logout.svg" alt="" />
        <div className="font-semibold">Logout</div>
      </button>
    </div>
  )
}

export default Navbar
