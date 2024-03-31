import { Outlet, useNavigate } from 'react-router-dom'
import { Navbar } from './Navbar'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const Admin = () => {
  // this boolean logic should only affect mobile
  const [navActive, setNavActive] = useState(false)
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn)

  const navigate = useNavigate()
  useEffect(() => {
    !isLoggedIn && navigate('/admin/login')
  }, [isLoggedIn, navigate])

  return (
    <div className="flex flex-col w-full h-screen overflow-y-scroll md:flex-row">
      <Navbar setNavActive={setNavActive} navActive={navActive} />
      <button
        className={`${
          navActive ? 'hidden' : 'relative top-4 left-4 md:pb-12'
        } md:hidden`}
        onClick={() => setNavActive(!navActive)}
      >
        <img
          className="p-2 bg-[#FD4F13] rounded-full w-fit h-fit "
          src="/admin/menu.svg"
          alt="menu"
        />
      </button>
      <Outlet />
    </div>
  )
}

export default Admin
