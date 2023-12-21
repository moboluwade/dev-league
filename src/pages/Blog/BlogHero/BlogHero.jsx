const BlogHero = () => {
  return (
    <div className=" w-full h-[60vh] flex flex-col justify-center items-center gap-11 ">
      <div className="font-[inter] text-[50px] font-semibold gap-5">
        <div>
          <span>
            Welcome to <b className="text-text-dev-orange">DEV LEAGUE </b>blog
          </span>
        </div>
        <div className="flex flex-rol justify-center gap-1 h-[50px] ">
          <input
            type="search"
            name="search"
            className="border-2 w-80 rounded-[10px]"
          />
          <button className="bg-text-dev-orange rounded-[10px] text-white p-2 text-xl">
            Search
          </button>
        </div>
      </div>
      <div className="flex flex-row font-bold font-[inter] justify-center gap-5">
        <span className="text-3xl">Categories</span>
        <div className="flex gap-4">
          <span className="hero--btn">All</span>
          <span className="hero--btn">Articles</span>
          <span className="hero--btn">News</span>
          <span className="hero--btn">Jobs</span>
        </div>
      </div>
    </div>
  )
}

export default BlogHero
