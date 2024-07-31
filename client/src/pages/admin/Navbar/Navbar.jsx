import { useQuery } from '@tanstack/react-query'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

const Navbar = ({ setNavActive, navActive }) => {

  const [logout, setLogout] = useState(false)


  const logoutQuery = useQuery({
    queryKey: ['logout'],
    queryFn: async () => {
      const res = axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/admin/logout`, { text: "placeholder" },
        {
          withCredentials: 'include'
        }
      )
      return res
    },
    enabled: logout
  })

  const navigate = useNavigate()

  // logout click-> activate query -> query res -> navigate
  useEffect(() => {
    logoutQuery.isSuccess && navigate('/')
  }, [logoutQuery, navigate])

  useEffect(() => {
    console.log(logout)
  }, [logout])
  // const handleLogout = async () => {

  //   logoutQuery.isSuccess && dispatch(LogoutUser(true))
  // }

  // personal account
  // manage blogs
  // manage events
  //

  return (
    <div
      className={`max-w-[16rem] pt-6 bg-black md:sticky transition-transform ease-in-out duration-500 z-50 ${navActive ? 'fixed -left-0' : 'fixed -left-96'
        }  top-0 h-full `}
    >
      <div className="flex flex-row items-center justify-start w-full gap-12 px-10 mb-6 text-white">
        <button onClick={() => setNavActive(!navActive)}>
          <img width={40} height={40} src="/admin/menu.svg" alt="menu" />
        </button>
        <img width={50} height={40} src="/Union.svg" alt="logo" />
      </div>

      <div className="flex flex-col items-center w-full gap-4 mb-4 text-white">
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
        <Link to="manage">
          <button className="text-md flex justify-between flex-row px-4 items-center text-white rounded-md w-[13rem] h-[3rem] ">
            <div className="flex flex-row items-center gap-2">
              <img width={15} height={10} src="/admin/article.svg" alt="" />
              <p className="font-semibold">Profile</p>
            </div>
            <img width={20} height={10} src="/admin/chevron-up.svg" alt="" />
          </button>
        </Link>
        <button disabled className="text-md flex justify-between flex-row px-4 items-center text-white rounded-md w-[13rem] h-[3rem] opacity-30">
          <div className="flex flex-row items-center gap-2">
            <img width={15} height={10} src="/admin/article.svg" alt="" />
            <p className="font-semibold">Manage blog</p>
          </div>
          <img width={20} height={10} src="/admin/chevron-up.svg" alt="" />
        </button>
        <button disabled className="text-md justify-between flex flex-row px-4 items-center text-white rounded-md w-[13rem] h-[3rem] opacity-30 ">
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
        onClick={() => { setLogout(true) }}
        className="mx-auto text-lg flex flex-row justify-center px-4 gap-2 items-center text-text-dev-orange rounded-md w-[12rem] h-[3rem] bg-white"
      >
        <img width={25} height={10} src="/admin/logout.svg" alt="" />
        <div className="font-semibold">Logout</div>
      </button>
    </div>
  )
}

export default Navbar
