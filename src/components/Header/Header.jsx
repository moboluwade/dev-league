<<<<<<< HEAD
import { Link, NavLink } from 'react-router-dom'
=======
import { BrandLogo } from "../../utils"

>>>>>>> 6cf97eeb084ef24cdf2b242e2244ea01eb5889e8
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

  return (
<<<<<<< HEAD
    <div className="flex justify-between items-center h-auto bg-white py-6 text mx-20">
      <Link to="/">
        <img src="/Union.png" alt="logo" />
      </Link>
      <div>
        {links.map((link) => {
          return (
            <NavLink to={link.path} key={link.title} className="pr-12" end>
              {link.title}
            </NavLink>
          )
        })}
      </div>
      <div>
        <button className="uppercase">donate</button>
      </div>
    </div>
=======
    <header className="flex flex-row justify-between py-4 sticky">
      <BrandLogo />
      <div className="flex flex-row justify-between items-center w-[55rem] ">
        <div className="flex flex-row ">
          <span className="mr-5"><a href="">About us</a></span>
          <span className="mr-5"><a href="">Events</a></span>
          <span className="mr-5"><a href="">Blog</a></span>
          <span className=""><a href="">Shop</a></span>
        </div>
        <button className="w-fit h-fit px-5 py-4 text-center text-2xl uppercase font-semibold text-white rounded-lg bg-[#FD4F13]">Donate</button>
      </div>
    </header>
>>>>>>> 6cf97eeb084ef24cdf2b242e2244ea01eb5889e8
  )
}

export default Header
