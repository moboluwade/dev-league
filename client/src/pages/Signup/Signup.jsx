import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { LoginUser } from "../../store/userSlice";

const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState("")
    const [passcode, setPasscode] = useState("")
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [currentFlow, setCurrentFlow] = useState(0)

    const [showDiv, setShowDiv] = useState(false);
    // const dispatch = useDispatch()
    // const navigate = useNavigate()

    const navigate = useNavigate()
    // DECLARE MUTATIONS
    const emailVerification = useMutation({
        mutationKey: ['email'],
        mutationFn: async ({ email }) => {
            console.log("email")
            const res = axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/admin/validate-email`, { email: email }, { withCredentials: 'include' })
            return res.data
        }
    })
    const passcodeVerification = useMutation({
        mutationKey: ['passcode'],
        mutationFn: async ({ passcode }) => {
            const res = axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/admin/validate-passcode`, { passcode: passcode }, { withCredentials: 'include' })
            return res
        }
    })
    const signupMutation = useMutation({
        mutationKey: ['signup'],
        mutationFn: async ({ password }) => {
            const res = axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/admin/signup`, { email: email, password: password }, { withCredentials: 'include' })
            return res
        }
    })
    useEffect(() => {
        // increases flow count if the request is successful
        emailVerification.isSuccess && setCurrentFlow(prev => ++prev)
        emailVerification.error && alert('Email is not registered by lead. Check email?')
        emailVerification.error && console.log(emailVerification.status, emailVerification.error)

    }, [emailVerification.isSuccess, emailVerification.error, emailVerification.status])

    useEffect(() => {
        // increases flow count if the request is successful
        passcodeVerification.isSuccess && setCurrentFlow(prev => ++prev)
        passcodeVerification.error && alert('You have entered the wrong passcode?')
        passcodeVerification.error && console.log(passcodeVerification.status, passcodeVerification.error)
    }, [passcodeVerification.isSuccess, passcodeVerification.error, passcodeVerification.status])

    useEffect(() => {
        // increases flow count if the request is successful
        signupMutation.isSuccess && navigate('/admin')
        signupMutation.error && alert('Signup could not complete')
        signupMutation.error && console.log(signupMutation.status, signupMutation.error)
    }, [navigate, signupMutation.isSuccess, signupMutation.error, signupMutation.status])

    // DECLARE EVENT HANDLERS AND HELPER FUNCTIONS
    const handleSignupFlow = () => {

        currentFlow === 0 && emailVerification.mutate({ email: email })
        currentFlow === 1 && passcodeVerification.mutate({ passcode: passcode })
    }
    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
        }
    }
    const handleSignup = async (event) => {
        event.preventDefault();
        console.log(confirmPassword);
        console.log(password);

        if (confirmPassword === password) {
            if (currentFlow === 2) {
                try {
                    const feedback = await signupMutation.mutateAsync({ email: email, password: password });
                    if (signupMutation.isSuccess) {
                        console.log(feedback);
                    }
                } catch (error) {
                    console.log(error);
                }
            }
        } else {
            setShowDiv(true);
        }
    }

    return (
        <div className="my-20">
            <div className="glass sm:mx-auto max-w-[600px] px-4 py-14 mx-8  sm:p-16">
                <h2 className="text-[28px] font-semibold text-center mb-5">
                    Signup as Admin
                </h2>

                <form
                    className='relative'
                    onKeyDown={handleKeyPress}
                // onSubmit={() => handleSignup()}
                >
                    {
                        currentFlow === 0 &&
                        <div>
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
                        </div>

                    }

                    {currentFlow === 1 &&
                        <div className='relative h-fit'>
                            <div className="flex justify-center mt-6 mb-2">
                                <label className="font-normal text-base text-[rgba(52, 64, 84, 1)]">
                                    Secret Passcode
                                </label>
                                <a className="ml-auto text-[#1570EF] invisible">Forget ?</a>
                            </div>
                            <div className="flex items-center">
                                <input
                                    className="block py-3 px-4 rounded-lg w-full focus:ring-0 border-2 focus:outline-none focus:border-[#D1E9FF]  border-gray-300"
                                    type={`${showPassword ? 'text' : 'password'}`}
                                    placeholder="Enter your password"
                                    value={passcode}
                                    onChange={(e) => { setPasscode(e.target.value) }}
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
                            <div className='absolute flex flex-row justify-center w-full px-2 text-xs text-white rounded-md bg-text-dev-faded-base top-2 h-fit'>
                                {showDiv && "! email and password is invalid"}
                            </div>
                        </div>
                    }
                    {
                        currentFlow === 2 &&
                        <div className='relative h-fit'>
                            <div className="flex justify-center mt-6 mb-2">
                                <label className="font-normal text-base text-[rgba(52, 64, 84, 1)]">
                                    Enter Password
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
                            <div className='absolute flex flex-row justify-center w-full px-2 text-xs text-white rounded-md bg-text-dev-faded-base top-2 h-fit'>
                                {showDiv && "password does not match"}
                            </div>
                        </div>
                    }
                    {
                        currentFlow === 2 &&
                        <div className='relative h-fit'>
                            <div className="flex justify-center mt-6 mb-2">
                                <label className="font-normal text-base text-[rgba(52, 64, 84, 1)]">
                                    Confirm Password
                                </label>
                                <a className="ml-auto text-[#1570EF] invisible">Forget ?</a>
                            </div>
                            <div className="flex items-center">
                                <input
                                    className="block py-3 px-4 rounded-lg w-full focus:ring-0 border-2 focus:outline-none focus:border-[#D1E9FF]  border-gray-300"
                                    type={`${showConfirmPassword ? 'text' : 'password'}`}
                                    placeholder="Enter your password"
                                    value={confirmPassword}
                                    onChange={(e) => { setConfirmPassword(e.target.value) }}
                                />
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    className="-ml-10 cursor-pointer"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                >
                                    {!showConfirmPassword ? (
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

                        </div>
                    }

                    {currentFlow !== 2 &&
                        <div className="flex flex-col items-center w-full pt-2 ">
                            <button
                                type='button'
                                onClick={handleSignupFlow}
                                className="bg-[#fff] hover:bg-[#EBEDEF] border-text-dev-orange border-2 transition text-text-dev-orange mt-8 w-full text-center p-4 text-base font-semibold rounded-lg"
                            >
                                Next
                            </button>
                        </div>
                    }
                    {currentFlow === 2 && <div className="flex flex-col items-center w-full pt-2 ">
                        <button
                            type='button'
                            onClick={handleSignup}
                            className="bg-[#fff] hover:bg-[#EBEDEF] border-text-dev-orange border-2 transition text-text-dev-orange mt-8 w-full text-center p-4 text-base font-semibold rounded-lg"
                        >
                            Signup
                        </button>
                    </div>}
                </form>

            </div>
        </div>
    )
}

export default Signup