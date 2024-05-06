import { Outlet, useNavigate } from 'react-router-dom'
import { Navbar } from './Navbar'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
// import AuthenticatedRoute from './AuthorizedRoute'
// import Login from './login/login'


const Admin = () => {
  // this boolean logic should only affect mobile
  const [navActive, setNavActive] = useState(false)
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn)

  const { data, isError, isSuccess } = useQuery({
    queryKey: 'validate-token',
    queryFn: async () => {
      const res = axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/admin/validate`, { withCredentials: 'inlcude' })
      return res
    }
  })

  // useEffect(() => {
  //   console.log('validate Token')
  //   console.log(validateToken.isFetched)
  // }, [validateToken.isFetched])


  const navigate = useNavigate()
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
            className={`${navActive ? 'hidden' : 'relative top-4 left-4 md:pb-12'
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
      }
    </div>
  )
}

export default Admin
