import { motion } from 'framer-motion'
import { FiBarChart } from 'react-icons/fi'
import { RxCrossCircled } from 'react-icons/rx'
import { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate()

  const handleDonateClick = () => {
    navigate('/')
    setTimeout(() => {
      const donationSection = document.getElementById('donationSection')
      if (donationSection) {
        // Scroll to the donation section
        donationSection.scrollIntoView({ behavior: 'smooth' })
      }
    }, 100)
  }

  const links = [
    {
      title: 'Home',
      path: '/',
    },
    {
      title: 'About us',
      path: '/about',
    },
    {
      title: 'Events',
      path: '/events',
    },
    // {
    //   title: 'Blog',
    //   path: '/blog',
    // },
    // {
    //   title: 'Shop',
    //   path: '/shop',
    // },
  ]

  const [togglerNav, setTogglerNav] = useState(false)

  const handleClick = () => {
    setTogglerNav(!togglerNav)
    console.log(togglerNav)
  }

  return (
    <div className="bg-white flex flex-row justify-center text lg:px-[7.5rem] md:px-8 px-auto relative">
      <div className="relative flex items-center gap-4 h-20 md:pb-5 pt-4 pb-3 justify-between max-w-[80.5rem] w-full px-4">
        <Link to="/">
          <img
            src="/Union.png"
            alt="logo"
            className="md:w-20 w-auto h-[2.5rem] md:h-auto ml-1 md:ml-0"
          />
        </Link>

        <div className="hidden md:flex items-center gap-[3vw]">
          {links.map((link) => {
            return (
              <NavLink to={link.path} key={link.title} end>
                {link.title}
              </NavLink>
            )
          })}
        </div>

        <div className="flex flex-row items-center gap-2">
          <div className="inline pt-1 h-fit md:block">
            <motion.button
              whileHover={{ scale: 1.05, x: -4 }}
              whileTap={{ scale: 1 }}
              transition={{ duration: 0.3 }}
              className="px-2 py-2 border-2 rounded-lg md:py-3 border-text-dev-orange md:px-3 bg-text-dev-orange"
              onClick={handleDonateClick}
            >
              <span className="text-sm font-semibold text-white md:text-xl">
                Donate
              </span>
            </motion.button>
          </div>
          <div className="inline pt-1 h-fit md:block">
            <motion.button
              whileHover={{ scale: 1.05, x: -4 }}
              whileTap={{ scale: 1 }}
              transition={{ duration: 0.3 }}
              className="px-2 py-2 border-2 rounded-lg md:px-3 md:py-3 border-text-dev-orange"
            >
              <Link
                to="/login"
                className="text-sm font-semibold text-dev-orange md:text-xl"
              >
                Login
              </Link>
            </motion.button>
          </div>

          {/* Mobile nav-icon */}
          <div
            className="cursor-pointer w-fit md:hidden right-4"
            onClick={handleClick}
          >
            {!togglerNav && (
              <FiBarChart
                style={{
                  transform: 'rotate(270deg)',
                  color: '#fd4f13',
                  fontSize: '3rem',
                }}
                className="top-8"
              />
            )}
          </div>
          {togglerNav && ( // Display the overlay only when togglerNav is true
            <div
              className="fixed inset-0 z-40 bg-black md:hidden opacity-95"
              onClick={handleClick} // Close the navigation menu when the overlay is clicked
            ></div>
          )}
        </div>


        {/* mobile navigation menu */}
        <motion.div
          className={`md:hidden h-full fixed inset-y-0  w-[15rem] z-50 bg-white p-4 transition duration-300 transform ${togglerNav ? 'translate-x-0 top-0 right-0' : 'hidden'
            }`}
        >
          {/* Header content goes here */}
          <div className="p-4">
            <div className="flex items-center justify-between pb-4 border-b-2">
              <h1 className="font-semibold text-xl/[19px]">Main Menu</h1>
              <RxCrossCircled
                className="cursor-pointer"
                style={{ fontSize: '2rem', color: '#D4CECB' }}
                onClick={() => setTogglerNav(!togglerNav)}
              />
            </div>

            <NavLink onClick={handleClick} to={'/'} key={'Home'} end>
            </NavLink>
            {links.map((link) => {
              return (
                <NavLink
                  onClick={handleClick}
                  to={link.path}
                  key={link.title}
                  end
                >
                  <div className="flex items-center justify-between py-4 mt-3 border-b-2">
                    {link.title}
                    <img src="/Vector.png" alt="vector" className="vec" />
                  </div>
                </NavLink>
              )
            })}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Header
