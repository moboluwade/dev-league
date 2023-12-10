import { Link, NavLink } from 'react-router-dom'
import './Header.css'
import { motion } from 'framer-motion'
import { FiBarChart } from 'react-icons/fi'
import { RxCrossCircled } from 'react-icons/rx'
import { useState } from 'react'

const Header = () => {
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
  }

  return (
    <div className="relative flex items-center justify-between h-auto py-4 bg-white md:py-6 md:mx-20 text">
      <Link to="/">
        <img src="/Union.png" alt="logo" className="w-20 h-auto md:ml-0 ml-8" />
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

      <div className="d-btn md:mr-0 mr-8">
        <motion.button
          whileHover={{ scale: 1.1, x: -4 }}
          whileTap={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
          className="uppercase mr-20 md:mr-0 btn"
        >
          <span className="text-sm text-white">donate</span>
        </motion.button>
      </div>

      {/* Mobile navbar */}
      <div
        className="absolute cursor-pointer md:hidden right-8"
        onClick={handleClick}
      >
        {togglerNav ? (
          <RxCrossCircled
            style={{ fontSize: '2rem', color: '#D4CECB' }}
            className="top-8"
          />
        ) : (
          <FiBarChart
            style={{
              transform: 'rotate(270deg)',
              color: '#fd4f13',
              fontSize: '3rem',
            }}
            className="top-5"
          />
        )}
      </div>
      {togglerNav && ( // Display the overlay only when togglerNav is true
        <div
          className="fixed md:hidden inset-0 z-40 bg-black opacity-95"
          onClick={handleClick} // Close the navigation menu when the overlay is clicked
        ></div>
      )}

      {/* mobile navigation menu */}
      <div
        className={`md:hidden absolute inset-y-0 h-[774px] w-96 z-50 bg-white p-4 transition duration-300 transform ${
          togglerNav ? 'translate-x-0 top-0 right-0' : '-translate-x-full'
        }`}
      >
        {/* Navbar content goes here */}
        <div className="p-4">
          <div className="flex justify-between items-center pb-4 border-b-2">
            <h1 className="font-semibold text-xl/[19px]">Main Menu</h1>
            <RxCrossCircled
              className="cursor-pointer"
              style={{ fontSize: '2rem', color: '#D4CECB' }}
              onClick={handleClick}
            />
          </div>
          {links.map((link) => {
            return (
              <NavLink to={link.path} key={link.title} end>
                <div className="flex justify-between items-center py-4 border-b-2 mt-3">
                  {link.title}
                  <img src="/Vector.png" alt="vector" className="vec" />
                </div>
              </NavLink>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Header
