const BlogHero = () => {
  return (
    <div className=" w-full md:h-[60vh] h-[40vh] flex flex-col justify-center items-center gap-11 ">
      <div className="font-[inter] md:text-5xl font-bold grid gap-5 text-3xl text-center">
        <span>
          Welcome to <b className="text-text-dev-orange">DEV LEAGUE</b> blog
        </span>

        <div className="flex flex-rol justify-center gap-1 ">
          <input
            type="search"
            name="search"
            className="border-2 md:w-80 rounded-[10px] text-base md:p-4 w-60 p-2"
          />
          <button className="bg-text-dev-orange rounded-[10px] md:font-bold text-white p-2 px-5 text-base mobile:px-3 md:text-2xl">
            Search
          </button>
        </div>
      </div>
      <div className="flex flex-row font-semibold md:font-bold font-[inter] justify-center gap-5">
        <span className="md:text-4xl text-[22px] ">Categories</span>
        <div className="flex md:text-xl text-base gap-4">
          <span className="py-[3px] px-[8px] border-2 font-['Manrope'] rounded-[5px]">
            All
          </span>
          <span className="py-[3px] px-[8px] border-2 font-['Manrope'] rounded-[5px]">
            Articles
          </span>
          <span className="py-[3px] px-[8px] border-2 font-['Manrope'] rounded-[5px]">
            News
          </span>
          <span className="py-[3px] px-[8px] border-2 font-['Manrope'] rounded-[5px]">
            Jobs
          </span>
        </div>
      </div>
    </div>
  );
};

export default BlogHero;
