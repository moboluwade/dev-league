import { Link, NavLink, useNavigate } from 'react-router-dom'
import './Header.css'
import { motion } from 'framer-motion'
import { FiBarChart } from 'react-icons/fi'
import { RxCrossCircled } from 'react-icons/rx'
import { useState } from 'react'

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
      title: 'About us',
      path: '/about',
    },
    {
      title: 'Events',
      path: '/events',
    },
    {
      title: 'Blog',
      path: '/blog',
    },
    {
      title: 'Shop',
      path: '/shop',
    },
  ]

  const [togglerNav, setTogglerNav] = useState(false)

  const handleClick = () => {
    setTogglerNav(!togglerNav)
    console.log(togglerNav)
  }

  return (
    <div className="bg-white flex flex-row justify-center text lg:px-[7.5rem] md:px-8 px-auto">
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
        <div className="flex flex-row">
          <div className="inline pt-1 h-fit md:block">
            <motion.button
              whileHover={{ scale: 1.05, x: -4 }}
              whileTap={{ scale: 1 }}
              transition={{ duration: 0.3 }}
              className="px-3 py-3 uppercase rounded-lg md:px-4 md:py-3 bg-text-dev-orange"
              onClick={handleDonateClick}
            >
              <span className="text-sm font-semibold text-white md:text-xl">
                donate
              </span>
            </motion.button>
          </div>

          {/* Mobile nav-icon */}
          <div
            className="pl-6 cursor-pointer w-fit md:hidden right-4"
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
          className={`md:hidden absolute inset-y-0 h-[574px] w-[15rem] z-50 bg-white p-4 transition duration-300 transform ${
            togglerNav ? 'translate-x-0 top-0 right-0' : 'hidden'
          }`}
        >
          {/* Navbar content goes here */}
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
              <div className="flex items-center justify-between py-4 mt-3 border-b-2">
                {'Home'}
                <img src="/Vector.png" alt="vector" className="vec" />
              </div>
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
