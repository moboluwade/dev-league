import { Link, NavLink } from 'react-router-dom'
import './Header.css'
import { FiBarChart } from 'react-icons/fi'
import { RxCross1 } from 'react-icons/rx'
import { useState } from 'react'

const Header = () => {
  const links = [
    {
      title: "About us",
      path: "/about",
    },
    {
      title: "Events",
      path: "/events",
    },
    {
      title: "Blog",
      path: "/blog",
    },
    {
      title: "Shop",
      path: "/shop",
    },
  ];

  const [togglerNav, setTogglerNav] = useState(false);

  const handleClick = () => {
    setTogglerNav(!togglerNav);
  };

  return (
    <div className="flex items-center justify-between h-auto py-4 mx-8 bg-white md:py-6 md:mx-20 text">
      <Link to="/">
        <img src="/Union.png" alt="logo" className="w-20 h-auto" />
      </Link>

      <div
        className={`md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 duration-700 ease-in-out md:w-auto w-full flex items-center px-5 md:z-[auto] z-[99] ${
          togglerNav ? 'top-[9%]' : 'top-[-100%]'
        }`}
      >
        <div className="flex md:flex-row flex-col md:items-center md:gap-[3vw] gap-6">
          {links.map((link) => {
            return (
              <NavLink to={link.path} key={link.title} end>
                {link.title}
              </NavLink>
            )
          })}
        </div>
      </div>

      <div
        className="absolute cursor-pointer md:hidden top-5 right-6"
        style={{ color: '#fd4f13', fontSize: '3rem' }}
        onClick={handleClick}
      >
        {togglerNav ? (
          <RxCross1 />
        ) : (
          <FiBarChart
            style={{
              transform: "rotate(270deg)",
            }}
          />
        )}
      </div>

      <button className="mr-20 uppercase md:mr-0 btn">
        <span className="text-sm">donate</span>
      </button>
    </div>
  );
};

export default Header;
