import { useState } from "react"

const BlogHero = () => {
  const [search, setSearch] = useState('')

  return (
    <div className=" w-full md:h-[60vh] h-[40vh] flex flex-col justify-center items-center gap-8 sm:gap-11 ">
      <div className="font-[inter] md:text-5xl font-bold grid gap-5 text-2xl text-center flex-wrap">
        <span>
          Welcome to <b className="text-text-dev-orange">DEV LEAGUE</b> blog
        </span>

        <div className="flex flex-rol justify-center gap-1 ">
          <input
            className="cursor-pointer border-2 md:w-80 rounded-[10px] text-base md:p-4 w-48 p-1"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            type="search"
          />
          <button className="bg-text-dev-orange rounded-[10px] md:font-bold text-white px-3 text-[15px] sm:text-2xl">
            Search
          </button>
        </div>
      </div>
      <div className="flex flex-row font-semibold md:font-bold font-[inter] justify-center gap-3 sm:gap-5">
        <span className="md:text-4xl text-[20px] ">Categories</span>
        <div className="flex md:text-xl text-xs gap-2 cursor-pointer">
          <span className="py-[4px] px-[6px] border-2 font-['Manrope'] rounded-[5px]">
            All
          </span>
          <span className="py-[4px] px-[6px] border-2 font-['Manrope'] rounded-[5px]">
            Articles
          </span>
          <span className="py-[4px] px-[6px] border-2 font-['Manrope'] rounded-[5px]">
            News
          </span>
          <span className="py-[4px] px-[6px] border-2 font-['Manrope'] rounded-[5px]">
            Jobs
          </span>
        </div>
      </div>
    </div>
  );
};

export default BlogHero;
