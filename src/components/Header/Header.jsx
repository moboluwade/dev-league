import { Link, NavLink } from 'react-router-dom'
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
    <div className="flex items-center justify-between h-auto py-6 mx-20 bg-white text">
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
  )
}

export default Header

