import { BrandLogo } from "../../utils"

const Header = () => {
  return (
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
  )
}

export default Header