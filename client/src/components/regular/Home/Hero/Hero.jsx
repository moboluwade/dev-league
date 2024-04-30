import { useMutation } from '@tanstack/react-query'
import { motion } from 'framer-motion'
import { useCallback, useState } from 'react'
import axios from "axios"
const Hero = () => {

  const [email, setEmail] = useState('')


  // const useMutateEmail = () => {
  //   const queryClient = useQueryClient()
  //   return useMutation({
  //     mutationFn: (userEmail) => {
  //       return axios.post('https://dev-league-dsi2.onrender.com/api/emails', userEmail)
  //     },
  //     // Notice the second argument is the variables object that the `mutate` function receives
  //     onSuccess: (data, variables) => {
  //       queryClient.setQueryData(['email', { email: variables.email }], data)
  //     },
  //   })
  // }

  // const { status, data, error } = useQuery({
  //   queryKey: ['email', { email: userEmail }],
  //   queryFn: fetchTodoById,
  // })


  const addEmail = useMutation({
    mutationFn: (userEmail) => {
      return axios.post('https://dev-league-dsi2.onrender.com/api/emails', userEmail)
    },
  })
  //as a fix, give user a feedback when their email is added successfully
  //either a failure modal.
  //or an appealing tick animation for success.
  //there's an attempt above.

  const handleClick = useCallback(() => {
    addEmail.mutate({ email: email })
  }, [addEmail, email])

  return (
    <main className="flex flex-col items-center w-full bg-text-dev-light-orange">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5, type: "tween" }}
        viewport={{ once: true }}
        className=" lg:px-[7.5rem] md:px-12 px-4 flex flex-col justify-between text-center md:text-start md:flex-row ">
        <div className="flex md:flex-col flex-col md:w-1/2 md:max-w-[50%] lg:pt-[7rem] md:pb-8 md:pt-20 pt-8 md:justify-center h-full ">
          <div className="flex flex-col md:max-w-[44rem] max-w-[30rem]">
            <span className="pb-4 text-4xl font-bold md:text-6xl">
              Code or No-Code, Thrive with DEV LEAGUE!
            </span>
            <span className="pb-9 md:pb-6 mx-auto md:ml-0 md:max-w-[30rem] max-w-[20rem] opacity-80">
              Here, you&apos;ll find the right resources and support to take
              your tech career to the next level.
            </span>
          </div>
          <div className="md:flex flex-row relative md:visible hidden w-10/12 md:min-w-[23rem]">
            <input
              className="w-full focus:outline-none pr-40 focus:border-text-dev-orange focus:border-opacity-80 focus:border-2 shadow-input pl-6 h-16 bg-white rounded-[3rem] placeholder:opacity-40 placeholder:font-normal placeholder:text-text-dev-faded-base text-text-dev-faded-base"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
              }}
              placeholder="Enter your email"
              type="text"
            />
            <motion.button
              whileHover={{ scale: 1.1, x: -6 }}
              whileTap={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              onClick={handleClick}
              className="absolute right-[0.5rem] top-[0.5rem] flex flex-col justify-center text-white text-center w-fit h-12 bg-text-dev-orange font-semibold py-4 px-5 rounded-[3rem]"
            >
              {addEmail.isLoading && 'Adding...'}
              {
                addEmail.isError && ['try again', (console.log(addEmail.data))]
              }
              {
                addEmail.isSuccess && 'Added Up!'
              }
              {
                !addEmail.isLoading && !addEmail.isError && !addEmail.isSuccess &&
                (
                  'Get Started'
                )
              }
            </motion.button>
          </div>
        </div>
        <div className="flex flex-col items-end pb-6 pl-6 md:pb-8 md:w-1/2 lg:pt-10 md:pt-8 ">
          <img
            className="lg:w-[27rem] m-auto"
            src="/hero-image.png"
            alt="hero-image"
            draggable="false"
            width={432}
          />
        </div>


        {/* mobile view email field */}
        <div className="flex flex-row relative mb-16 md:hidden w-full md:min-w-[23rem]">
          <input
            className="w-full focus:outline-none pr-32 focus:border-text-dev-orange focus:border-opacity-80 focus:border-2 shadow-input pl-6 h-10 bg-white rounded-[3rem] text-sm placeholder:opacity-40 placeholder:font-normal placeholder:text-text-dev-faded-base text-text-dev-faded-base"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
            }}
            placeholder="Enter your email"
            type="text"
          />
          <motion.button
            whileHover={{ scale: 1.1, x: -4 }}
            whileTap={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
            onClick={handleClick}
            className="absolute right-[0.25rem] top-[0.25rem] flex flex-col justify-center text-white text-sm text-center w-25 h-8 bg-text-dev-orange font-semibold py-4 px-5 rounded-[3rem]"
          >
            {addEmail.isLoading && 'Adding...'}
            {
              addEmail.isError && 'try again'
            }
            {
              addEmail.isSuccess && 'Added Up!'
            }
            {
              !addEmail.isLoading && !addEmail.isError && !addEmail.isSuccess &&
              (
                'Get Started'
              )
            }
          </motion.button>
        </div>
      </motion.div>
    </main>
  )
}

export default Hero
