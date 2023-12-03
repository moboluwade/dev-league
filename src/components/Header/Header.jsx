import { Link, NavLink } from "react-router-dom";
import { FiBarChart } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";
import { useState } from "react";

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
    <div className="flex items-center justify-between h-auto py-4 md:py-6 mx-8 md:mx-20 bg-white text">
      <Link to="/">
        <img src="/Union.png" alt="logo" className="w-20 h-auto" />
      </Link>

      <div>
        {links.map((link) => {
          return (
            <NavLink
              to={link.path}
              key={link.title}
              className={
                togglerNav ? "flex flex-col pb-8" : "hidden md:inline pr-12"
              }
              end
            >
              {link.title}
            </NavLink>
          );
        })}
      </div>

      <div
        className="md:hidden absolute top-5 right-6 cursor-pointer"
        style={{ color: "#fd4f13", fontSize: "3rem" }}
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

      <button className="uppercase mr-20 md:mr-0 btn">
        <span className="text-sm">donate</span>
      </button>
    </div>
  );
};

export default Header;
