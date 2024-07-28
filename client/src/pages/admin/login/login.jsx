import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { LoginUser } from '../../../store/userSlice'
import { useNavigate } from 'react-router-dom'
import { useMutation, useQuery } from '@tanstack/react-query'
import axios from 'axios'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  // Use the useSelector hook to access state from the Redux store

  const [showDiv, setShowDiv] = useState(false);
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const validateToken = useQuery({
    // validates if admin is already loggedIn
    queryKey: 'validate-token',
    queryFn: async () => {
      const res = axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/admin/validate`, { withCredentials: 'include' })
      return res
    }
  })

  useEffect(() => {
    // navigate to admin route if already logged In
    validateToken.isSuccess && navigate('/admin')
  }, [validateToken.isSuccess, navigate])

  const loginMutation = useMutation({
    mutationKey: ['login'],
    mutationFn: async ({ email, password }) => {
      const res = axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/admin/login`, { email: email, password: password }, { withCredentials: 'include' })
      return res
    }
  })


  useEffect(() => {
    loginMutation.isSuccess && dispatch(LoginUser(true))
  }, [loginMutation.isSuccess, dispatch])

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const feedback = loginMutation.mutateAsync({ email: email, password: password })
      loginMutation.isSuccess && console.log(feedback)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    loginMutation.isSuccess && navigate("/admin")
  }, [loginMutation.isSuccess, navigate])

  useEffect(() => {
    loginMutation.isError && setShowDiv(true)
  }, [loginMutation.isError]);

  useEffect(() => {
    if (loginMutation.isError) {
      const timeout = setTimeout(() => {
        setShowDiv(false);
      }, 2000);

      // Clean up the timeout when the component unmounts or when showDiv changes
      return () => clearTimeout(timeout);
    }

    // Return an empty cleanup function if loginMutation is not in error state
    return () => { };
  }, [loginMutation.isError])

  const routeToSignup = () => {
    navigate("/signup")
  }

  return (
    <div className="my-20">
      <div className="glass sm:mx-auto max-w-[600px] px-4 py-14 mx-8  sm:p-16">
        <h2 className="text-[28px] font-semibold text-center mb-5">
          Login as Admin
        </h2>
        {/* login form */}

        <form
          className='relative'
          onSubmit={handleLogin}
        >
          <label className="font-normal text-base block mb-2 text-[rgba(52, 64, 84, 1)]">
            Email
          </label>
          <input
            className="block py-3 px-4 rounded-lg w-full focus:ring-0 border-2 focus:outline-none focus:border-[#D1E9FF]  border-gray-300"
            type="text"
            placeholder="balamia@gmail.com"
            value={email}
            onChange={(e) => { setEmail(e.target.value) }}
          />
          <div className="flex justify-center mt-6 mb-2">
            <label className="font-normal text-base text-[rgba(52, 64, 84, 1)]">
              Password
            </label>
            <a className="ml-auto text-[#1570EF] invisible">Forget ?</a>
          </div>
          <div className="flex items-center">
            <input
              className="block py-3 px-4 rounded-lg w-full focus:ring-0 border-2 focus:outline-none focus:border-[#D1E9FF]  border-gray-300"
              type={`${showPassword ? 'text' : 'password'}`}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => { setPassword(e.target.value) }}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="-ml-10 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {!showPassword ? (
                <>
                  <path
                    d="M12 5.25C4.5 5.25 1.5 12 1.5 12C1.5 12 4.5 18.75 12 18.75C19.5 18.75 22.5 12 22.5 12C22.5 12 19.5 5.25 12 5.25Z"
                    stroke="#98A2B3"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 15.75C14.0711 15.75 15.75 14.0711 15.75 12C15.75 9.92893 14.0711 8.25 12 8.25C9.92893 8.25 8.25 9.92893 8.25 12C8.25 14.0711 9.92893 15.75 12 15.75Z"
                    stroke="#98A2B3"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </>
              ) : (
                <path
                  stroke="#98A2B3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M4 14c-.5-.6-.9-1.3-1-2 0-1 4-6 9-6m7.6 3.8A5 5 0 0 1 21 12c0 1-3 6-9 6h-1m-6 1L19 5m-4 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              )}
            </svg>
          </div>

          <div className='relative h-fit'>
            <div className='absolute flex flex-row justify-center w-full px-2 text-xs text-white rounded-md bg-text-dev-faded-base top-2 h-fit'>
              {showDiv && "! email and password is invalid"}
            </div>
          </div>

          <button
            type='submit'
            className="bg-[#FD4F13] hover:bg-[#FD4F30] transition text-[#fff] mt-8 w-full text-center p-4 text-base font-semibold rounded-lg"
          >
            Login
          </button>

          <div className="flex flex-col items-center w-full pt-8 ">
            <div className="flex flex-row ">
              <span className=" text-text-dev-faded-base">New admin? </span> <span>🤭</span>
            </div>
            <button
              type='button'
              onClick={routeToSignup}
              className="bg-[#fff] hover:bg-[#EBEDEF] border-text-dev-orange border-2 transition text-text-dev-orange mt-8 w-full text-center p-4 text-base font-semibold rounded-lg"
            >
              Signup
            </button>
          </div>
        </form>

      </div>
    </div>
  )
}

export default Login
