import BlogData from "./BlogData";

function BlogContent() {
  return (
    <div className="flex flex-col gap-[50px] py-[4.5rem] lg:px-[7rem] md:px-12 px-4 max-w-[87.5rem] justify-center">
      <div className="flex justify-end gap-2">
        <button className="border-2 px-1 py-[2px] font-bold rounded-[5px]">
          1
        </button>
        <button className="border-2 px-1 py-[2px] font-bold rounded-[5px]">
          2
        </button>
      </div>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col-reverse md:flex-shrink-0 md:flex-grow flex-auto md:flex-row gap-10">
          <div className="flex flex-col gap-2 lg:gap-4 w-full align-middle text-left">
            <button className="text-[16px] text-[#7A6C65] font-[inter] font-normal p-[12px] border-[0.5px] h-[40px] w-[73px] rounded-[8px] ">
              Article
            </button>
            <span className="font-[inter] font-normal text-base w-[103px] h-[20px] text-[#7A6C65] ">
              01 June 2023
            </span>

            <b className="font-[inter] text-xl lg:text-[30px] lg:leading-10 font-semibold text-[#101828] w-full ">
              The Impact of DevOps on Software Development and Deployment
            </b>
            <p className="w-full font-medium text-sm">
              How do you create compelling presentations that wow your
              audience...
            </p>
            <div className="flex items-center w-full gap-4">
              <img
                src="/Avatar.png"
                className="w-10 h-10 rounded-[200px]"
                alt="authorImg"
              />
              <span className="font-[inter] text-base font-bold text-center ">
                Qawi
              </span>
            </div>
          </div>
          <img className="max-w-md rounded-[16px]" src="/Image.png" alt="" />
        </div>

        {/* Blog main section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {BlogData.map((blog) => {
            const { id, title, text, image, author, button } = blog;
            return (
              <div
                key={id}
                className="flex flex-col flex-grow border border-[#D4CECB] lg:max-w-[22rem] m-auto  max-w-[18rem] bg-white rounded-lg text-start"
              >
                <div>
                  <img
                    className="w-full rounded-t-lg"
                    src={image}
                    alt="image"
                  />
                </div>
                <div className="px-3 pt-5 pb-3">
                  <span className="text-xl font-semibold text-black ">
                    {title}
                  </span>
                  <p className="w-full pt-2 textLight">{text}</p>

                  <div className="flex items-center w-full gap-4 pt-7">
                    <img src={author.img} alt="authorImg" />
                    <span className="text">{author.name}</span>
                    <span className="textLight">{author.date}</span>
                  </div>
                  <button className="text-[18px] font-semibold text-[#7A6C65] font-[inter] p-[8px] border-[0.5px] w-[73px] mt-4 rounded-[8px]">
                    {button}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex gap-2 justify-center">
          <button className="border-2 px-1 py-[2px] font-bold rounded-[5px]">
            1
          </button>
          <button className="border-2 px-1 py-[2px] font-bold rounded-[5px]">
            2
          </button>
        </div>
      </div>
    </div>
  );
}

export default BlogContent;
