import { Outlet, useNavigate } from 'react-router-dom'
import { Navbar } from './Navbar'
import { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
// import AuthenticatedRoute from './AuthorizedRoute'
// import Login from './login/login'


const Admin = () => {
  // this boolean logic should only affect mobile
  const [navActive, setNavActive] = useState(false)


  const navigate = useNavigate()


  const { isError, isSuccess } = useQuery({
    queryKey: ['validate-tokenz'],
    queryFn: async () => {
      const res = axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/admin/validate`, { withCredentials: 'include' })
      return res
    }
  })


  useEffect(() => {

    isError && navigate('/login')

  }, [isError, navigate])


  return (
    <div className="w-full h-screen">
      {
        isSuccess &&
        <div className='relative flex flex-col w-full h-screen overflow-y-scroll md:flex-row'>
          <Navbar setNavActive={setNavActive} navActive={navActive} />
          <button
            className={`${navActive ? 'hidden' : 'relative h-full z-40 bg-text-dev-light-orange top-4 left-4 '
              } md:hidden`}
            onClick={() => setNavActive(!navActive)}
          >
            <img
              className="p-2 bg-[#FD4F13] fixed rounded-full w-fit h-fit "
              src="/admin/menu.svg"
              alt="menu"
            />
          </button>
          <Outlet />
        </div>
      }
    </div>
  )
}

export default Admin
